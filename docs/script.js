const weeksData = [
  {
    id: "S1",
    title: "S1 - Introduccion a DevOps",
    status: "done",
    goal: "Comprender fundamentos DevOps y crear la base tecnica del repositorio.",
    highlights: [
      "Definicion, principios, historia, roles y desafios de DevOps",
      "Practica 1: repositorio publico con ramas main y dev",
      "Primeros archivos y evidencia de commits"
    ]
  },
  {
    id: "S2",
    title: "S2 - Comunicacion y colaboracion",
    status: "done",
    goal: "Aplicar colaboracion visual con Kanban y cultura de trabajo en equipo.",
    highlights: [
      "Herramientas colaborativas y enfoque agil en DevOps",
      "Practica 2: tablero Kanban en GitHub Projects o Jira",
      "Tareas y flujo de trabajo trazable"
    ]
  },
  {
    id: "S3",
    title: "S3 - CI/CD y automatizacion",
    status: "done",
    goal: "Desplegar automaticamente la web desde GitHub con Pages y Actions.",
    highlights: [
      "Integracion y entrega continua como base del flujo",
      "Practica 3: web publicada con GitHub Pages",
      "Deploy automatico desde el repositorio"
    ]
  },
  {
    id: "S4",
    title: "S4 - Integracion Continua (CI)",
    status: "active",
    goal: "Crear flujo CI que notifique al subir a main.",
    highlights: [
      "Practica 4: programa hola mundo en cualquier lenguaje",
      "Workflow alerta.yml en GitHub Actions",
      "Notificacion en ntfy.sh/devops-itla al hacer push a main"
    ]
  },
  {
    id: "S5",
    title: "S5 - 1er Parcial",
    status: "next",
    goal: "Evaluar de forma integrada los temas trabajados de S1 a S4.",
    highlights: [
      "Evaluacion conjunta de fundamentos, colaboracion y CI/CD",
      "Revision de practicas implementadas",
      "Validacion del dominio tecnico del flujo DevOps"
    ]
  },
  {
    id: "S6",
    title: "S6 - Contenedores",
    status: "next",
    goal: "Servir una pagina web con Nginx usando Docker Compose.",
    highlights: [
      "Introduccion a contenedores: Docker Desktop, Docker Hub y Play With Docker",
      "Practica 6: montar src/index.html en /usr/share/nginx/html",
      "Ejecucion y verificacion con docker compose up -d"
    ]
  },
  {
    id: "S7",
    title: "S7 - Dockerfile y Docker Compose",
    status: "next",
    goal: "Conectar una app web con base de datos MySQL usando Compose.",
    highlights: [
      "Crear codigo fuente en src para app conectada a BD",
      "Definir servicios de aplicacion y mysql en docker-compose.yml",
      "Publicar codigo final en GitHub"
    ]
  },
  {
    id: "S8",
    title: "S8 - Automatizacion de Infraestructura",
    status: "next",
    goal: "Automatizar 5 servidores Ubuntu con Ansible sobre Docker.",
    highlights: [
      "Crear imagen Ubuntu con SSH, usuario ansible y privilegios sudo",
      "Levantar 5 servidores con docker-compose",
      "Playbooks: update apt, crear usuario itla, carpeta app, hola.txt, instalar cowsay y htop"
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
    detail: "Cada push a main genera una version publicada automaticamente.",
    status: "done"
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
  lastUpdated: "2026-02-07T18:40:00Z",
  cards: [
    {
      id: "s1-repo-setup",
      title: "S1: repositorio publico con ramas main y dev",
      week: "S1",
      status: "done",
      details: "Base tecnica creada con control de versiones y primeras evidencias.",
      proof: {
        label: "Repositorio",
        url: "https://github.com/luiscdano/DevOps.E2"
      }
    },
    {
      id: "s2-project-kanban",
      title: "S2: tablero Kanban en GitHub Projects",
      week: "S2",
      status: "done",
      details: "Planificacion visual con columnas y trazabilidad por estado.",
      proof: {
        label: "Project #1",
        url: "https://github.com/users/luiscdano/projects/1"
      }
    },
    {
      id: "s3-pages-hosting",
      title: "S3: despliegue automatico en GitHub Pages",
      week: "S3",
      status: "done",
      details: "Hosting en la nube activado desde el repositorio con Actions.",
      proof: {
        label: "Sitio publicado",
        url: "https://luiscdano.github.io/DevOps.E2/"
      }
    },
    {
      id: "s3-home-hero",
      title: "S3: rediseño del Home con hero modular",
      week: "S3",
      status: "done",
      details: "Seccion principal optimizada con layout visual y narrativa del curso.",
      proof: {
        label: "Home",
        url: "https://luiscdano.github.io/DevOps.E2/index.html"
      }
    },
    {
      id: "s3-semanas-route",
      title: "S3: separacion por modulos Home, Semanas y Kanban",
      week: "S3",
      status: "done",
      details: "Navegacion por paginas para mantener cada bloque en su propio espacio.",
      proof: {
        label: "Modulo Semanas",
        url: "https://luiscdano.github.io/DevOps.E2/semanas.html"
      }
    },
    {
      id: "s3-cycle-order",
      title: "S3: orden del ciclo DevOps alineado al flujo real",
      week: "S3",
      status: "done",
      details: "Pipeline visual con secuencia Plan, Code, Build, Test, Release, Deploy, Operate y Monitor.",
      proof: {
        label: "Ciclo DevOps",
        url: "https://luiscdano.github.io/DevOps.E2/semanas.html"
      }
    },
    {
      id: "s3-kanban-command",
      title: "S3: Command Center Kanban con resumen ejecutivo",
      week: "S3",
      status: "review-pr",
      details: "Panel final que concentra KPIs, foco actual e historial de movimientos.",
      proof: {
        label: "Modulo Kanban",
        url: "https://luiscdano.github.io/DevOps.E2/kanban.html"
      }
    },
    {
      id: "s3-readme-evidence",
      title: "S3: actualizar README con evidencia de avances",
      week: "S3",
      status: "in-progress",
      details: "Documentar la evolucion de modulos, flujo CI/CD y entregables por semana.",
      proof: {
        label: "README",
        url: "https://github.com/luiscdano/DevOps.E2/blob/main/README.md"
      }
    },
    {
      id: "s4-ci-hola",
      title: "S4: programa Hola Mundo para flujo CI",
      week: "S4",
      status: "in-progress",
      details: "Preparar base del ejercicio para integracion continua en main."
    },
    {
      id: "s4-ci-ntfy",
      title: "S4: workflow alerta.yml con notificacion a ntfy.sh/devops-itla",
      week: "S4",
      status: "todo",
      details: "Crear automatizacion que dispare alerta al hacer push a main."
    },
    {
      id: "s4-ci-checks",
      title: "S4: checks previos al deploy (lint y pruebas)",
      week: "S4",
      status: "todo",
      details: "Agregar quality gates para fortalecer el pipeline."
    },
    {
      id: "s5-partial-evaluation",
      title: "S5: preparar evidencia integral para el primer parcial",
      week: "S5",
      status: "todo",
      details: "Consolidar practicas S1-S4 con trazabilidad y demostracion tecnica."
    },
    {
      id: "s6-docker-nginx",
      title: "S6: publicar pagina en Nginx con Docker Compose",
      week: "S6",
      status: "todo",
      details: "Servir src/index.html montado en /usr/share/nginx/html."
    },
    {
      id: "s7-app-mysql",
      title: "S7: app conectada a MySQL con Docker Compose",
      week: "S7",
      status: "todo",
      details: "Definir servicios de aplicacion y base de datos en docker-compose.yml."
    },
    {
      id: "s8-ansible-automation",
      title: "S8: automatizacion de 5 servidores Ubuntu con Ansible",
      week: "S8",
      status: "todo",
      details: "Aplicar playbooks para usuarios, paquetes, archivos y configuracion base."
    }
  ],
  movements: [
    {
      date: "2026-02-07T18:40:00Z",
      taskId: "s3-kanban-command",
      from: "in-progress",
      to: "review-pr",
      note: "Command Center Kanban listo para revision final."
    },
    {
      date: "2026-02-07T18:30:00Z",
      taskId: "s3-readme-evidence",
      from: "todo",
      to: "in-progress",
      note: "Se inicia documentacion del avance S3."
    },
    {
      date: "2026-02-07T18:20:00Z",
      taskId: "s4-ci-hola",
      from: "todo",
      to: "in-progress",
      note: "Comienza preparacion del ejercicio CI para S4."
    },
    {
      date: "2026-02-07T18:05:00Z",
      taskId: "s3-cycle-order",
      from: "review-pr",
      to: "done",
      note: "Secuencia del ciclo validada y aplicada."
    },
    {
      date: "2026-02-07T17:55:00Z",
      taskId: "s3-cycle-order",
      from: "in-progress",
      to: "review-pr",
      note: "Ajuste de alineamiento para revision."
    },
    {
      date: "2026-02-07T17:35:00Z",
      taskId: "s3-semanas-route",
      from: "review-pr",
      to: "done",
      note: "Estructura modular aprobada."
    },
    {
      date: "2026-02-07T17:20:00Z",
      taskId: "s3-semanas-route",
      from: "in-progress",
      to: "review-pr",
      note: "Separacion de modulos enviada a revision."
    },
    {
      date: "2026-02-07T16:50:00Z",
      taskId: "s3-home-hero",
      from: "review-pr",
      to: "done",
      note: "Hero final validado visualmente."
    },
    {
      date: "2026-02-07T16:35:00Z",
      taskId: "s3-home-hero",
      from: "in-progress",
      to: "review-pr",
      note: "Cambio de copy y layout listo para revisar."
    },
    {
      date: "2026-02-07T16:12:00Z",
      taskId: "s3-pages-hosting",
      from: "review-pr",
      to: "done",
      note: "Deploy en Pages verificado en produccion."
    },
    {
      date: "2026-02-07T16:00:00Z",
      taskId: "s3-pages-hosting",
      from: "in-progress",
      to: "review-pr",
      note: "Workflow de Pages listo para validacion."
    },
    {
      date: "2026-02-07T15:40:00Z",
      taskId: "s2-project-kanban",
      from: "review-pr",
      to: "done",
      note: "Tablero Kanban oficial consolidado."
    },
    {
      date: "2026-02-07T15:20:00Z",
      taskId: "s1-repo-setup",
      from: "review-pr",
      to: "done",
      note: "Base del repositorio marcada como completada."
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

function renderKanbanExecutive(progressData) {
  const execGrid = document.querySelector("#exec-grid");
  const focusList = document.querySelector("#focus-list");
  const syncMeta = document.querySelector("#sync-meta");

  if (!execGrid || !focusList || !syncMeta) {
    return;
  }

  const cards = Array.isArray(progressData.cards) ? progressData.cards : [];
  const movements = Array.isArray(progressData.movements) ? progressData.movements : [];
  const cardsById = Object.fromEntries(cards.map((card) => [card.id, card]));

  const doneCount = cards.filter((card) => card.status === "done").length;
  const inProgressCount = cards.filter((card) => card.status === "in-progress").length;
  const reviewCount = cards.filter((card) => card.status === "review-pr").length;
  const activeCount = inProgressCount + reviewCount;
  const todoCount = cards.filter((card) => card.status === "todo").length;
  const totalCount = cards.length;
  const completion = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  execGrid.innerHTML = `
    <article class="exec-item tone-main">
      <p class="exec-label">Avance global</p>
      <p class="exec-value">${completion}%</p>
      <div class="exec-meter" role="img" aria-label="Avance ${completion}%">
        <span style="width: ${completion}%"></span>
      </div>
    </article>
    <article class="exec-item tone-done">
      <p class="exec-label">Completado</p>
      <p class="exec-value">${doneCount}</p>
      <p class="exec-foot">Entregables cerrados</p>
    </article>
    <article class="exec-item tone-active">
      <p class="exec-label">En curso</p>
      <p class="exec-value">${activeCount}</p>
      <p class="exec-foot">In Progress + Review / PR</p>
    </article>
    <article class="exec-item tone-next">
      <p class="exec-label">Pendiente</p>
      <p class="exec-value">${todoCount}</p>
      <p class="exec-foot">Backlog del cuatrimestre</p>
    </article>
    <article class="exec-item tone-total">
      <p class="exec-label">Total de tareas</p>
      <p class="exec-value">${totalCount}</p>
      <p class="exec-foot">Ruta S1 -> S8</p>
    </article>
    <article class="exec-item tone-moves">
      <p class="exec-label">Movimientos</p>
      <p class="exec-value">${movements.length}</p>
      <p class="exec-foot">Trazabilidad registrada</p>
    </article>
  `;

  const activeCards = cards
    .filter((card) => card.status === "in-progress" || card.status === "review-pr")
    .slice(0, 3);
  const nextCards = cards.filter((card) => card.status === "todo").slice(0, 1);

  const focusEntries = [...activeCards, ...nextCards];

  if (!focusEntries.length) {
    focusList.innerHTML = "<li class='focus-item'>No hay tareas activas por ahora.</li>";
  } else {
    focusList.innerHTML = focusEntries
      .map((card) => {
        const statusLabel =
          card.status === "todo"
            ? "Siguiente"
            : boardStatusMeta[card.status] || card.status;

        const proof = card.proof?.url
          ? `<a class="focus-proof" href="${escapeHtml(card.proof.url)}" target="_blank" rel="noreferrer">${escapeHtml(card.proof.label || "Evidencia")}</a>`
          : "";

        return `
          <li class="focus-item">
            <p class="focus-top">
              <span class="focus-week">${escapeHtml(card.week || "Sin semana")}</span>
              <span class="focus-status status-${escapeHtml(card.status)}">${escapeHtml(statusLabel)}</span>
            </p>
            <h4>${escapeHtml(card.title)}</h4>
            <p>${escapeHtml(card.details || "")}</p>
            ${proof}
          </li>
        `;
      })
      .join("");
  }

  const orderedMovements = [...movements].sort((a, b) => new Date(b.date) - new Date(a.date));
  const lastMove = orderedMovements[0];
  const lastMoveTask = lastMove ? cardsById[lastMove.taskId] : null;
  const lastMoveLabel = lastMove
    ? `${lastMoveTask?.title || lastMove.taskId} -> ${boardStatusMeta[lastMove.to] || lastMove.to}`
    : "Sin movimientos recientes";
  const updatedLabel = progressData.lastUpdated ? formatDateTime(progressData.lastUpdated) : "Sin fecha";
  const lastMoveDate = lastMove?.date ? formatDateTime(lastMove.date) : "Sin fecha";
  const fallbackLabel = progressData.fallbackReason
    ? `Modo respaldo local (${progressData.fallbackReason}).`
    : "Sincronizado desde data/progress.json.";

  syncMeta.textContent = `Ultima sincronizacion: ${updatedLabel}. Ultimo movimiento: ${lastMoveDate} (${lastMoveLabel}). ${fallbackLabel} Fuente oficial: GitHub Projects #1.`;
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
  loadProgressData().then((progressData) => {
    renderProgressBoard(progressData);
    renderKanbanExecutive(progressData);
  });
}
