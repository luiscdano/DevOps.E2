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
    status: "done",
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
    status: "done",
    goal: "Integrar despliegue continuo en Surge.sh con GitHub Actions y evidencias del parcial.",
    highlights: [
      "Workflow principal main.yaml para despliegue automatico a Surge.sh",
      "Secrets de GitHub para SURGE_DOMAIN y SURGE_TOKEN sin exponer credenciales",
      "Trazabilidad sincronizada entre README, Kanban y sitio web"
    ]
  },
  {
    id: "S6",
    title: "S6 - Contenedores",
    status: "done",
    goal: "Servir una pagina web con Nginx usando Docker Compose.",
    highlights: [
      "Introduccion a contenedores: Docker Desktop, Docker Hub y Play With Docker",
      "Practica 6 completada: src/index.html montado en /usr/share/nginx/html",
      "Ejecucion validada con docker compose up -d y docker compose ps",
      "Evidencia registrada en docs/assets/evidencia-s6-nginx-compose.txt"
    ]
  },
  {
    id: "S7",
    title: "S7 - App web + MySQL con Compose",
    status: "active",
    goal: "Conectar una app web con base de datos MySQL usando Compose.",
    highlights: [
      "Codigo fuente de app en src con Node.js, Express y mysql2",
      "Servicios app + mysql definidos en docker-compose.yml con healthcheck",
      "Evidencia S7 publicada en docs/assets/evidencia-s7-app-mysql-compose.txt"
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
    title: "Deploy continuo en Surge.sh",
    detail: "S5 completada: workflow main.yaml despliega docs/ a Surge.sh usando secrets seguros.",
    status: "done"
  },
  {
    title: "Integracion continua con alerta ntfy",
    detail: "S4 completada: workflow alerta.yml notifica en ntfy.sh/devops-itla al hacer push a main.",
    status: "done"
  },
  {
    title: "Contenerizacion con Nginx y Docker Compose",
    detail: "S6 completada: servicio web en contenedor con volumen de contenido y verificacion HTTP.",
    status: "done"
  },
  {
    title: "App Hola Mundo conectada a MySQL",
    detail: "S7 en curso: implementacion app + mysql en Docker Compose lista para validacion final.",
    status: "active"
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
const ntfyTopicUrl = "https://ntfy.sh/devops-itla";
const ntfyLatestJsonUrl = `${ntfyTopicUrl}/json?poll=1&since=latest`;

const defaultProgressData = {
  lastUpdated: "2026-02-18T05:34:34Z",
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
      status: "done",
      details: "Integracion completada: deploy en Surge, secrets activos y evidencia sincronizada."
    },
    {
      id: "s6-docker-nginx",
      title: "S6: publicar pagina en Nginx con Docker Compose",
      week: "S6",
      status: "done",
      details: "Completado: contenedor nginx levantado y pagina servida desde src con Docker Compose.",
      proof: {
        label: "Issue S6",
        url: "https://github.com/luiscdano/DevOps.E2/issues/11"
      }
    },
    {
      id: "s7-app-mysql",
      title: "S7: app conectada a MySQL con Docker Compose",
      week: "S7",
      status: "in-progress",
      details: "Implementacion lista en codigo (app + mysql); pendiente cierre final en Projects #1."
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
      date: "2026-02-18T05:34:34Z",
      taskId: "s6-docker-nginx",
      from: "todo",
      to: "done",
      note: "Semana 6 completada con evidencia de Nginx + Docker Compose."
    },
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
  const pagesWorkflowUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/actions/workflows/pages.yml/runs?per_page=1`;
  const surgeWorkflowUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/actions/workflows/main.yaml/runs?per_page=1`;

  try {
    const [
      openIssuesRes,
      closedIssuesRes,
      openPrRes,
      closedPrRes,
      pagesWorkflowRes,
      surgeWorkflowRes
    ] = await Promise.all([
      fetch(openIssuesUrl, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(closedIssuesUrl, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(openPrUrl, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(closedPrUrl, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(pagesWorkflowUrl, { headers: { Accept: "application/vnd.github+json" } }),
      fetch(surgeWorkflowUrl, { headers: { Accept: "application/vnd.github+json" } })
    ]);

    if (
      !openIssuesRes.ok ||
      !closedIssuesRes.ok ||
      !openPrRes.ok ||
      !closedPrRes.ok ||
      !pagesWorkflowRes.ok
    ) {
      throw new Error("No se pudieron consultar todas las metricas");
    }

    const [openIssues, closedIssues, openPrs, closedPrs, pagesWorkflow] = await Promise.all([
      openIssuesRes.json(),
      closedIssuesRes.json(),
      openPrRes.json(),
      closedPrRes.json(),
      pagesWorkflowRes.json()
    ]);

    let surgeWorkflow = { workflow_runs: [] };

    if (surgeWorkflowRes.ok) {
      surgeWorkflow = await surgeWorkflowRes.json();
    }

    repoMetrics.innerHTML = `
      <li class="metric-item"><strong>Issues abiertas</strong>${openIssues.total_count ?? 0}</li>
      <li class="metric-item"><strong>Issues cerradas</strong>${closedIssues.total_count ?? 0}</li>
      <li class="metric-item"><strong>PR abiertas</strong>${openPrs.total_count ?? 0}</li>
      <li class="metric-item"><strong>PR cerradas</strong>${closedPrs.total_count ?? 0}</li>
      <li class="metric-item"><strong>Ruta Kanban</strong>Project #1 en GitHub</li>
    `;

    const pagesRun = pagesWorkflow.workflow_runs?.[0];
    const surgeRun = surgeWorkflow.workflow_runs?.[0];

    const runMarkup = (label, run) => {
      if (!run) {
        return `<li class="metric-item"><strong>${escapeHtml(label)}</strong>Sin ejecuciones registradas.</li>`;
      }

      return `
        <li class="metric-item">
          <strong>${escapeHtml(label)}</strong>
          <span class="metric-detail"><strong>Workflow</strong>${escapeHtml(run.name)}</span>
          <span class="metric-detail"><strong>Estado</strong>${escapeHtml(run.status)}</span>
          <span class="metric-detail"><strong>Resultado</strong>${escapeHtml(run.conclusion ?? "En progreso")}</span>
          <span class="metric-detail"><strong>Actualizado</strong>${escapeHtml(formatDateTime(run.updated_at))}</span>
          <a class="metric-link" href="${escapeHtml(run.html_url)}" target="_blank" rel="noreferrer">Ver ejecucion</a>
        </li>
      `;
    };

    deployMetrics.innerHTML = `${runMarkup("Deploy Pages", pagesRun)}${runMarkup("Deploy Surge", surgeRun)}`;
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

function parseNtfyPayload(rawBody) {
  const lines = rawBody
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) {
    return null;
  }

  const events = lines
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  if (!events.length) {
    return null;
  }

  const messageEvent = [...events].reverse().find((event) => event.event === "message");
  return messageEvent || events[events.length - 1];
}

async function loadLatestCiAlert() {
  const alertFeed = document.querySelector("#ci-alert-feed");

  if (!alertFeed) {
    return;
  }

  try {
    const response = await fetch(ntfyLatestJsonUrl, {
      headers: {
        Accept: "application/x-ndjson, application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const rawBody = await response.text();
    const event = parseNtfyPayload(rawBody);

    if (!event) {
      throw new Error("Sin eventos de alerta");
    }

    const title = event.title || "DevOps.E2 CI Alert";
    const eventDate = event.time ? formatDateTime(event.time * 1000) : "Sin fecha";
    const message = event.message || "Sin contenido";
    const tags = Array.isArray(event.tags) && event.tags.length ? event.tags.join(", ") : "Sin tags";
    const commitMatch = message.match(/https:\/\/github\.com\/[^\s]+\/commit\/[a-f0-9]{7,40}/i);
    const commitUrl = commitMatch ? commitMatch[0] : "";

    alertFeed.innerHTML = `
      <li class="metric-item">
        <strong>${escapeHtml(title)}</strong>
        <span class="metric-detail"><strong>Fecha</strong>${escapeHtml(eventDate)}</span>
        <span class="metric-detail"><strong>Tags</strong>${escapeHtml(tags)}</span>
        <span class="metric-detail metric-message"><strong>Mensaje</strong>${escapeHtml(message)}</span>
      </li>
      ${commitUrl ? `<li><a class="metric-link" href="${escapeHtml(commitUrl)}" target="_blank" rel="noreferrer">Abrir commit notificado</a></li>` : ""}
      <li><a class="metric-link" href="${escapeHtml(ntfyTopicUrl)}" target="_blank" rel="noreferrer">Ver historial completo en ntfy</a></li>
    `;
  } catch (error) {
    alertFeed.innerHTML = `
      <li class="metric-item">
        <strong>Alerta CI</strong>
        No disponible en este momento (${escapeHtml(error.message)}).
      </li>
      <li><a class="metric-link" href="${escapeHtml(ntfyTopicUrl)}" target="_blank" rel="noreferrer">Abrir topic en ntfy</a></li>
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
loadLatestCiAlert();

if (document.querySelector("#board-columns")) {
  loadProgressData().then((progressData) => {
    renderProgressBoard(progressData);
    renderKanbanExecutive(progressData);
  });
}
