const weeksData = [
  {
    id: "S1",
    title: "S1 - Introduccion a DevOps",
    status: "done",
    goal: "Fundamentos de DevOps y base del repositorio con ramas main/dev.",
    highlights: [
      "Repositorio publico inicializado",
      "Definicion de flujo de trabajo con pull requests",
      "Documentacion de conceptos y evidencias"
    ]
  },
  {
    id: "S2",
    title: "S2 - Comunicacion y colaboracion",
    status: "done",
    goal: "Gestion visual de tareas con Kanban para trazabilidad del proyecto.",
    highlights: [
      "GitHub Projects configurado",
      "Columnas Todo, In Progress, Review y Done",
      "Vinculacion de tareas e issues"
    ]
  },
  {
    id: "S3",
    title: "S3 - CI/CD y automatizacion",
    status: "active",
    goal: "Publicar esta web automaticamente con GitHub Pages usando GitHub Actions.",
    highlights: [
      "Workflow de despliegue continuo",
      "Pagina web evolutiva para evidencias",
      "Base para pruebas y monitoreo futuros"
    ]
  },
  {
    id: "S4+",
    title: "S4 en adelante - Expansion del pipeline",
    status: "next",
    goal: "Agregar pruebas, calidad, observabilidad e infraestructura como codigo.",
    highlights: [
      "Quality gates y lint automatizado",
      "IaC para entornos reproducibles",
      "Monitoreo, logs y alertas"
    ]
  }
];

const automationData = [
  {
    title: "Control de versiones con estrategia de ramas",
    detail: "Flujo main/dev activo para separar desarrollo y entregables estables.",
    status: "done"
  },
  {
    title: "Planificacion visual con Kanban",
    detail: "Seguimiento transparente del trabajo y estado de cada tarea.",
    status: "done"
  },
  {
    title: "Deploy continuo en GitHub Pages",
    detail: "Cada push a main puede generar una version publicada automaticamente.",
    status: "active"
  },
  {
    title: "Pruebas automatizadas",
    detail: "Pendiente para proximas semanas: ejecutar checks antes del deploy.",
    status: "next"
  },
  {
    title: "Monitoreo y gestion de logs",
    detail: "Pendiente: incorporar observabilidad para medir salud y rendimiento.",
    status: "next"
  },
  {
    title: "Automatizacion de infraestructura",
    detail: "Pendiente: definir entornos con IaC para reproducibilidad completa.",
    status: "next"
  }
];

const statusLabels = {
  done: "Completado",
  active: "En curso",
  next: "Proximo"
};

const boardStatusMeta = {
  todo: "Todo",
  "in-progress": "In Progress",
  "review-pr": "Review / PR",
  done: "Done"
};

const boardStatusOrder = ["todo", "in-progress", "review-pr", "done"];

const repoOwner = "luiscdano";
const repoName = "DevOps.E2";

const defaultProgressData = {
  lastUpdated: "2026-02-07T15:35:00Z",
  cards: [
    {
      id: "s3-web-base",
      title: "Creacion de pagina web base del proyecto",
      week: "S3",
      status: "done",
      details: "Landing DevOps, secciones dinamicas y arquitectura para evolucion semanal.",
      proof: {
        label: "Commit principal",
        url: "https://github.com/luiscdano/DevOps.E2/commit/c406107"
      }
    },
    {
      id: "s3-pages-workflow",
      title: "Automatizar deploy con GitHub Pages y Actions",
      week: "S3",
      status: "done",
      details: "Workflow pages.yml activo y despliegue exitoso en la URL publica.",
      proof: {
        label: "Workflow de Pages",
        url: "https://github.com/luiscdano/DevOps.E2/actions/workflows/pages.yml"
      }
    },
    {
      id: "s3-kanban-followup",
      title: "Integrar seguimiento Kanban paso a paso en la web",
      week: "S3",
      status: "review-pr",
      details: "Kanban interno con columnas y bitacora cronologica de movimientos.",
      proof: {
        label: "Project #1",
        url: "https://github.com/users/luiscdano/projects/1"
      }
    },
    {
      id: "s3-docs-refresh",
      title: "Actualizar README con evidencia S3 y trazabilidad",
      week: "S3",
      status: "in-progress",
      details: "Documentar el estado de implementacion CI/CD y seguimiento.",
      proof: {
        label: "README",
        url: "https://github.com/luiscdano/DevOps.E2/blob/main/README.md"
      }
    },
    {
      id: "s4-quality-gates",
      title: "Definir quality gates (lint + tests) para S4",
      week: "S4",
      status: "todo",
      details: "Configurar validaciones automaticas previas al deploy."
    },
    {
      id: "s4-observability",
      title: "Agregar monitoreo y logs basicos",
      week: "S4",
      status: "todo",
      details: "Incorporar observabilidad para salud, errores y rendimiento."
    }
  ],
  movements: [
    {
      date: "2026-02-07T15:35:00Z",
      taskId: "s3-kanban-followup",
      from: "in-progress",
      to: "review-pr",
      note: "Se completa implementacion inicial y pasa a revision."
    },
    {
      date: "2026-02-07T15:28:00Z",
      taskId: "s3-docs-refresh",
      from: "todo",
      to: "in-progress",
      note: "Se inicia ajuste de README con evidencia tecnica."
    },
    {
      date: "2026-02-07T15:20:00Z",
      taskId: "s3-kanban-followup",
      from: "todo",
      to: "in-progress",
      note: "Se inicia conexion visual del progreso en la pagina web."
    },
    {
      date: "2026-02-07T15:10:00Z",
      taskId: "s3-pages-workflow",
      from: "review-pr",
      to: "done",
      note: "Deploy verificado en produccion con GitHub Pages."
    },
    {
      date: "2026-02-07T15:07:00Z",
      taskId: "s3-pages-workflow",
      from: "in-progress",
      to: "review-pr",
      note: "Workflow listo y enviado a validacion final."
    },
    {
      date: "2026-02-07T15:04:00Z",
      taskId: "s3-web-base",
      from: "review-pr",
      to: "done",
      note: "Merge a main y publicacion completada."
    },
    {
      date: "2026-02-07T15:00:00Z",
      taskId: "s3-web-base",
      from: "in-progress",
      to: "review-pr",
      note: "Estructura estable para revision y PR."
    },
    {
      date: "2026-02-07T14:50:00Z",
      taskId: "s3-pages-workflow",
      from: "todo",
      to: "in-progress",
      note: "Se inicia automatizacion CI/CD para GitHub Pages."
    },
    {
      date: "2026-02-07T14:30:00Z",
      taskId: "s3-web-base",
      from: "todo",
      to: "in-progress",
      note: "Inicio de desarrollo de la pagina S3."
    }
  ]
};

const weeksGrid = document.querySelector("#weeks-grid");
const automationGrid = document.querySelector("#automation-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const stageCards = Array.from(document.querySelectorAll(".stage-card"));

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDateTime(dateValue) {
  return new Date(dateValue).toLocaleString("es-DO", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

function renderWeeks(filter = "all") {
  if (!weeksGrid) {
    return;
  }

  const filtered = weeksData.filter((week) => filter === "all" || week.status === filter);

  if (!filtered.length) {
    weeksGrid.innerHTML = "<article class='week-card'><p class='week-goal'>No hay semanas para este filtro.</p></article>";
    return;
  }

  weeksGrid.innerHTML = filtered
    .map(
      (week) => `
      <article class="week-card">
        <header class="week-head">
          <h3>${escapeHtml(week.title)}</h3>
          <span class="badge ${escapeHtml(week.status)}">${escapeHtml(statusLabels[week.status])}</span>
        </header>
        <p class="week-goal">${escapeHtml(week.goal)}</p>
        <ul class="week-list">
          ${week.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function renderAutomation() {
  if (!automationGrid) {
    return;
  }

  automationGrid.innerHTML = automationData
    .map(
      (item) => `
      <article class="auto-card">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
        <span class="status-pill ${escapeHtml(item.status)}">${escapeHtml(statusLabels[item.status])}</span>
      </article>
    `
    )
    .join("");
}

function setupFilters() {
  if (!weeksGrid || !filterButtons.length) {
    return;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderWeeks(button.dataset.filter);
    });
  });
}

function cycleStages() {
  if (!stageCards.length) {
    return;
  }

  let index = 0;
  stageCards[index].classList.add("is-active");

  setInterval(() => {
    stageCards[index].classList.remove("is-active");
    index = (index + 1) % stageCards.length;
    stageCards[index].classList.add("is-active");
  }, 1400);
}

function setupRevealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

async function loadProgressData() {
  try {
    const response = await fetch("data/progress.json", {
      cache: "no-store",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.cards) || !Array.isArray(data.movements)) {
      throw new Error("Formato de progreso invalido");
    }

    return data;
  } catch (error) {
    return {
      ...defaultProgressData,
      fallbackReason: error.message
    };
  }
}

function renderProgressBoard(progressData) {
  const boardColumns = document.querySelector("#board-columns");
  const movementLog = document.querySelector("#movement-log");
  const progressLastUpdated = document.querySelector("#progress-last-updated");

  if (!boardColumns || !movementLog || !progressLastUpdated) {
    return;
  }

  const cardsByStatus = Object.fromEntries(boardStatusOrder.map((status) => [status, []]));

  progressData.cards.forEach((card) => {
    if (cardsByStatus[card.status]) {
      cardsByStatus[card.status].push(card);
    }
  });

  boardColumns.innerHTML = boardStatusOrder
    .map((status) => {
      const cards = cardsByStatus[status];
      const cardMarkup = cards.length
        ? cards
            .map((card) => {
              const proof = card.proof?.url
                ? `<a class="task-proof" href="${escapeHtml(card.proof.url)}" target="_blank" rel="noreferrer">${escapeHtml(card.proof.label || "Evidencia")}</a>`
                : "";

              return `
                <li class="board-task">
                  <h5>${escapeHtml(card.title)}</h5>
                  <p>${escapeHtml(card.details || "")}</p>
                  <span class="task-week">${escapeHtml(card.week || "Sin semana")}</span>
                  ${proof}
                </li>
              `;
            })
            .join("")
        : "<li class='board-task'><p>Sin tareas en esta columna.</p></li>";

      return `
        <article class="board-column status-${escapeHtml(status)}">
          <h4>${escapeHtml(boardStatusMeta[status])}</h4>
          <p class="board-count">${cards.length} tarea(s)</p>
          <ul class="board-items">${cardMarkup}</ul>
        </article>
      `;
    })
    .join("");

  const cardsById = Object.fromEntries(progressData.cards.map((card) => [card.id, card]));
  const orderedMovements = [...progressData.movements].sort((a, b) => new Date(b.date) - new Date(a.date));

  movementLog.innerHTML = orderedMovements.length
    ? orderedMovements
        .map((movement) => {
          const task = cardsById[movement.taskId];
          const taskName = task?.title || movement.taskId;

          return `
            <li class="movement-item">
              <p class="movement-date">${formatDateTime(movement.date)}</p>
              <p class="movement-shift">${escapeHtml(taskName)}</p>
              <p>${escapeHtml(boardStatusMeta[movement.from] || movement.from)} -> ${escapeHtml(boardStatusMeta[movement.to] || movement.to)}</p>
              <p>${escapeHtml(movement.note || "")}</p>
            </li>
          `;
        })
        .join("")
    : "<li class='movement-item'><p>No hay movimientos registrados.</p></li>";

  const updatedLabel = progressData.lastUpdated ? formatDateTime(progressData.lastUpdated) : "Sin fecha";
  const fallback = progressData.fallbackReason ? ` (modo respaldo: ${progressData.fallbackReason})` : "";
  progressLastUpdated.textContent = `Ultima actualizacion: ${updatedLabel}${fallback}`;
}

async function loadTrackingMetrics() {
  const repoMetrics = document.querySelector("#repo-metrics");
  const deployMetrics = document.querySelector("#deploy-metrics");

  if (!repoMetrics || !deployMetrics) {
    return;
  }

  const queryBase = `https://api.github.com/search/issues?q=repo:${repoOwner}/${repoName}+`;
  const openIssuesUrl = `${queryBase}is:issue+state:open`;
  const closedIssuesUrl = `${queryBase}is:issue+state:closed`;
  const openPrUrl = `${queryBase}is:pr+state:open`;
  const closedPrUrl = `${queryBase}is:pr+state:closed`;
  const workflowUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/actions/workflows/pages.yml/runs?per_page=1`;

  try {
    const [
      openIssuesRes,
      closedIssuesRes,
      openPrRes,
      closedPrRes,
      workflowRes
    ] = await Promise.all([
      fetch(openIssuesUrl, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(closedIssuesUrl, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(openPrUrl, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(closedPrUrl, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(workflowUrl, { headers: { Accept: "application/vnd.github+json" } })
    ]);

    if (
      !openIssuesRes.ok ||
      !closedIssuesRes.ok ||
      !openPrRes.ok ||
      !closedPrRes.ok ||
      !workflowRes.ok
    ) {
      throw new Error("No se pudieron consultar todas las metricas");
    }

    const [openIssues, closedIssues, openPrs, closedPrs, workflow] = await Promise.all([
      openIssuesRes.json(),
      closedIssuesRes.json(),
      openPrRes.json(),
      closedPrRes.json(),
      workflowRes.json()
    ]);

    repoMetrics.innerHTML = `
      <li class="metric-item"><strong>Issues abiertas</strong>${openIssues.total_count ?? 0}</li>
      <li class="metric-item"><strong>Issues cerradas</strong>${closedIssues.total_count ?? 0}</li>
      <li class="metric-item"><strong>PR abiertas</strong>${openPrs.total_count ?? 0}</li>
      <li class="metric-item"><strong>PR cerradas</strong>${closedPrs.total_count ?? 0}</li>
      <li class="metric-item"><strong>Ruta Kanban</strong>Project #1 en GitHub</li>
    `;

    const lastRun = workflow.workflow_runs?.[0];

    if (!lastRun) {
      deployMetrics.innerHTML = "<li class='metric-item'>No hay ejecuciones de deploy registradas aun.</li>";
      return;
    }

    const deployDate = formatDateTime(lastRun.updated_at);

    deployMetrics.innerHTML = `
      <li class="metric-item"><strong>Workflow</strong>${escapeHtml(lastRun.name)}</li>
      <li class="metric-item"><strong>Estado</strong>${escapeHtml(lastRun.status)}</li>
      <li class="metric-item"><strong>Resultado</strong>${escapeHtml(lastRun.conclusion ?? "En progreso")}</li>
      <li class="metric-item"><strong>Actualizado</strong>${escapeHtml(deployDate)}</li>
      <li><a class="metric-link" href="${escapeHtml(lastRun.html_url)}" target="_blank" rel="noreferrer">Ver ejecucion en GitHub Actions</a></li>
    `;
  } catch (error) {
    repoMetrics.innerHTML = `
      <li class="metric-item">
        <strong>Seguimiento</strong>
        No disponible en este momento (${escapeHtml(error.message)}).
      </li>
    `;
    deployMetrics.innerHTML = `
      <li class="metric-item">
        <strong>Deploy</strong>
        No disponible en este momento (${escapeHtml(error.message)}).
      </li>
    `;
  }
}

if (weeksGrid) {
  renderWeeks();
}

if (automationGrid) {
  renderAutomation();
}

if (filterButtons.length) {
  setupFilters();
}

cycleStages();
setupRevealOnScroll();
loadTrackingMetrics();

if (document.querySelector("#board-columns")) {
  loadProgressData().then(renderProgressBoard);
}
