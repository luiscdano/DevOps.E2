#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const statusMap = {
  todo: "todo",
  "to do": "todo",
  "in progress": "in-progress",
  "in-progress": "in-progress",
  review: "review-pr",
  "review / pr": "review-pr",
  "review/pr": "review-pr",
  done: "done"
};

const statusOrder = {
  todo: 0,
  "in-progress": 1,
  "review-pr": 2,
  done: 3
};

function parseArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (!token.startsWith("--")) {
      continue;
    }

    const key = token.slice(2);
    const next = argv[index + 1];

    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    index += 1;
  }

  return args;
}

function scriptJson(html, id) {
  const openTag = `<script type="application/json" id="${id}">`;
  const start = html.indexOf(openTag);

  if (start === -1) {
    throw new Error(`No se encontro script JSON '${id}'`);
  }

  const contentStart = start + openTag.length;
  const end = html.indexOf("</script>", contentStart);

  if (end === -1) {
    throw new Error(`No se encontro cierre de script para '${id}'`);
  }

  const raw = html.slice(contentStart, end).trim();
  return JSON.parse(raw);
}

function toStatus(groupValue) {
  const normalized = String(groupValue || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  return statusMap[normalized] || "todo";
}

function inferWeek(title, fallback = "") {
  const match = `${title} ${fallback}`.match(/\bS\d+\b/i);
  return match ? match[0].toUpperCase() : "Sin semana";
}

function getTitleColumnValue(item) {
  const columns = item.memexProjectColumnValues || [];
  const titleColumn = columns.find((column) => column.memexProjectColumnId === "Title");
  return titleColumn?.value || null;
}

function itemId(item, titleValue) {
  const number = titleValue?.number;

  if (number) {
    if (item.contentType === "PullRequest") {
      return `pr-${number}`;
    }

    if (item.contentType === "Issue") {
      return `issue-${number}`;
    }
  }

  return `item-${item.id}`;
}

function loadExisting(progressPath) {
  if (!fs.existsSync(progressPath)) {
    return {
      cards: [],
      movements: []
    };
  }

  const parsed = JSON.parse(fs.readFileSync(progressPath, "utf8"));

  if (!Array.isArray(parsed.cards) || !Array.isArray(parsed.movements)) {
    throw new Error("Formato invalido en progress.json");
  }

  return parsed;
}

function normalizeUrl(url, fallback) {
  if (!url) {
    return fallback;
  }

  if (url.includes("/144865687/1142011005/")) {
    return url.replace("/144865687/1142011005/", "/luiscdano/DevOps.E2/");
  }

  return url;
}

function buildProgress({ memexData, paginatedItems, projectUrl, existing }) {
  const groupNameById = new Map(
    (paginatedItems.groups?.nodes || []).map((group) => [group.groupId, group.groupValue])
  );

  const existingById = new Map((existing.cards || []).map((card) => [card.id, card]));
  const cards = [];

  (paginatedItems.groupedItems || []).forEach((group) => {
    const status = toStatus(groupNameById.get(group.groupId));

    (group.nodes || []).forEach((node) => {
      const titleValue = getTitleColumnValue(node);
      const id = itemId(node, titleValue);
      const previous = existingById.get(id);
      const title = titleValue?.title?.raw?.trim() || previous?.title || `Item ${node.id}`;
      const proofUrl = normalizeUrl(node.content?.url || titleValue?.url, projectUrl);
      const details =
        previous?.details ||
        `Sincronizado automaticamente desde GitHub Projects (${memexData.title || "Project"}).`;
      const week = previous?.week || inferWeek(title, details);

      const card = {
        id,
        title,
        week,
        status,
        details
      };

      if (proofUrl) {
        card.proof = {
          label: previous?.proof?.label || (node.contentType === "PullRequest" ? "Pull Request" : "Issue"),
          url: proofUrl
        };
      }

      cards.push(card);
    });
  });

  cards.sort((left, right) => {
    const statusDiff = (statusOrder[left.status] ?? 99) - (statusOrder[right.status] ?? 99);

    if (statusDiff !== 0) {
      return statusDiff;
    }

    return left.title.localeCompare(right.title, "es");
  });

  const nowIso = new Date().toISOString();
  const newMovements = [];
  const newCardIds = new Set(cards.map((card) => card.id));

  cards.forEach((card) => {
    const previous = existingById.get(card.id);

    if (!previous) {
      newMovements.push({
        date: nowIso,
        taskId: card.id,
        from: card.status === "todo" ? "backlog" : "todo",
        to: card.status,
        note: "Tarea importada desde GitHub Projects"
      });
      return;
    }

    if (previous.status !== card.status) {
      newMovements.push({
        date: nowIso,
        taskId: card.id,
        from: previous.status,
        to: card.status,
        note: "Estado actualizado por sincronizacion con GitHub Projects"
      });
    }
  });

  const movements = [...newMovements, ...(existing.movements || [])]
    .filter((movement) => newCardIds.has(movement.taskId))
    .slice(0, 200);

  return {
    lastUpdated: memexData.updatedAt || nowIso,
    source: {
      kind: "github-projects-public-html",
      projectUrl,
      projectTitle: memexData.title || "GitHub Project",
      syncedAt: memexData.updatedAt || nowIso
    },
    cards,
    movements
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const owner = args.owner || "luiscdano";
  const project = Number.parseInt(args.project || "1", 10);
  const progressPath = args.path || path.join("docs", "data", "progress.json");
  const dryRun = Boolean(args["dry-run"]);

  if (!owner || Number.isNaN(project)) {
    throw new Error("Debes indicar --owner y --project validos");
  }

  const projectUrl = `https://github.com/users/${owner}/projects/${project}`;
  const response = await fetch(projectUrl, {
    headers: {
      "user-agent": "DevOps.E2 Project Sync Bot"
    }
  });

  if (!response.ok) {
    throw new Error(`No se pudo leer ${projectUrl} (HTTP ${response.status})`);
  }

  const html = await response.text();
  const memexData = scriptJson(html, "memex-data");
  const paginatedItems = scriptJson(html, "memex-paginated-items-data");
  const existing = loadExisting(progressPath);
  const nextProgress = buildProgress({
    memexData,
    paginatedItems,
    projectUrl,
    existing
  });

  const nextRaw = `${JSON.stringify(nextProgress, null, 2)}\n`;
  const currentRaw = fs.existsSync(progressPath) ? fs.readFileSync(progressPath, "utf8") : "";

  if (dryRun) {
    console.log(`Project: ${projectUrl}`);
    console.log(`Cards detectadas: ${nextProgress.cards.length}`);
    console.log(`Movimientos nuevos: ${Math.max(0, nextProgress.movements.length - (existing.movements?.length || 0))}`);
    console.log(currentRaw === nextRaw ? "Sin cambios." : "Hay cambios pendientes.");
    return;
  }

  fs.writeFileSync(progressPath, nextRaw, "utf8");

  if (currentRaw === nextRaw) {
    console.log("Sin cambios en progress.json");
    return;
  }

  console.log(`Sincronizacion aplicada en ${progressPath}`);
  console.log(`Project sincronizado: ${projectUrl}`);
  console.log(`Cards: ${nextProgress.cards.length}`);
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
