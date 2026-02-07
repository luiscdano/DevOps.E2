#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const validStatuses = new Set(["todo", "in-progress", "review-pr", "done"]);
const rootDir = process.cwd();
const progressPath = path.join(rootDir, "docs", "data", "progress.json");

function printUsage() {
  console.log(`
Uso:
  node scripts/progress-task.mjs add --id <id> --title <titulo> --week <Sx> --details <texto> [--status <todo|in-progress|review-pr|done>] [--proof-label <texto>] [--proof-url <url>] [--note <texto>] [--when <ISO>]
  node scripts/progress-task.mjs move --id <id> --to <todo|in-progress|review-pr|done> [--note <texto>] [--when <ISO>]

Ejemplos:
  node scripts/progress-task.mjs move --id s3-docs-refresh --to review-pr --note "Lista para revision"
  node scripts/progress-task.mjs add --id s4-ci-tests --title "Configurar pruebas CI" --week S4 --details "Correr tests en cada PR"
`);
}

function parseArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (!token.startsWith("--")) {
      continue;
    }

    const key = token.slice(2);
    const value = argv[index + 1];

    if (!value || value.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = value;
    index += 1;
  }

  return args;
}

function loadProgress() {
  if (!fs.existsSync(progressPath)) {
    throw new Error(`No existe ${progressPath}`);
  }

  const raw = fs.readFileSync(progressPath, "utf8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed.cards) || !Array.isArray(parsed.movements)) {
    throw new Error("Formato invalido en docs/data/progress.json");
  }

  return parsed;
}

function saveProgress(progress) {
  fs.writeFileSync(progressPath, `${JSON.stringify(progress, null, 2)}\n`, "utf8");
}

function nowIso(input) {
  if (!input) {
    return new Date().toISOString();
  }

  const date = new Date(input);

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Fecha invalida: ${input}`);
  }

  return date.toISOString();
}

function ensureStatus(status, fieldName) {
  if (!status || !validStatuses.has(status)) {
    throw new Error(`Valor invalido para ${fieldName}: ${status}`);
  }
}

function addTask(progress, args) {
  const id = args.id;
  const title = args.title;
  const week = args.week;
  const details = args.details;
  const status = args.status || "todo";
  const note = args.note || "Tarea creada";
  const when = nowIso(args.when);

  if (!id || !title || !week || !details) {
    throw new Error("Faltan parametros obligatorios para add: --id --title --week --details");
  }

  ensureStatus(status, "--status");

  if (progress.cards.some((card) => card.id === id)) {
    throw new Error(`Ya existe una tarea con id '${id}'`);
  }

  const card = {
    id,
    title,
    week,
    status,
    details
  };

  if (args["proof-label"] && args["proof-url"]) {
    card.proof = {
      label: args["proof-label"],
      url: args["proof-url"]
    };
  }

  progress.cards.push(card);
  progress.movements.unshift({
    date: when,
    taskId: id,
    from: "todo",
    to: status,
    note
  });
  progress.lastUpdated = when;

  return `Tarea agregada: ${id} -> ${status}`;
}

function moveTask(progress, args) {
  const id = args.id;
  const to = args.to;
  const note = args.note || "Cambio de estado";
  const when = nowIso(args.when);

  if (!id || !to) {
    throw new Error("Faltan parametros obligatorios para move: --id --to");
  }

  ensureStatus(to, "--to");

  const card = progress.cards.find((item) => item.id === id);

  if (!card) {
    throw new Error(`No existe una tarea con id '${id}'`);
  }

  const from = card.status;

  if (from === to) {
    throw new Error(`La tarea '${id}' ya esta en estado '${to}'`);
  }

  card.status = to;

  progress.movements.unshift({
    date: when,
    taskId: id,
    from,
    to,
    note
  });
  progress.lastUpdated = when;

  return `Tarea movida: ${id} ${from} -> ${to}`;
}

function main() {
  const command = process.argv[2];

  if (!command || command === "--help" || command === "-h") {
    printUsage();
    process.exit(0);
  }

  if (!["add", "move"].includes(command)) {
    console.error(`Comando no soportado: ${command}`);
    printUsage();
    process.exit(1);
  }

  const args = parseArgs(process.argv.slice(3));
  const progress = loadProgress();

  const result = command === "add" ? addTask(progress, args) : moveTask(progress, args);

  saveProgress(progress);
  console.log(result);
  console.log(`Archivo actualizado: ${progressPath}`);
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
