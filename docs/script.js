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

const repoOwner = "luiscdano";
const repoName = "DevOps.E2";

const weeksGrid = document.querySelector("#weeks-grid");
const automationGrid = document.querySelector("#automation-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const stageCards = Array.from(document.querySelectorAll(".stage-card"));

function renderWeeks(filter = "all") {
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
          <h3>${week.title}</h3>
          <span class="badge ${week.status}">${statusLabels[week.status]}</span>
        </header>
        <p class="week-goal">${week.goal}</p>
        <ul class="week-list">
          ${week.highlights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function renderAutomation() {
  automationGrid.innerHTML = automationData
    .map(
      (item) => `
      <article class="auto-card">
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
        <span class="status-pill ${item.status}">${statusLabels[item.status]}</span>
      </article>
    `
    )
    .join("");
}

function setupFilters() {
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

async function loadCommits() {
  const commitList = document.querySelector("#commit-list");
  const endpoint = `https://api.github.com/repos/${repoOwner}/${repoName}/commits?per_page=5`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/vnd.github+json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const commits = await response.json();

    if (!Array.isArray(commits) || !commits.length) {
      commitList.innerHTML = "<li class='commit-item'>No hay commits disponibles por ahora.</li>";
      return;
    }

    commitList.innerHTML = commits
      .map((commit) => {
        const message = commit.commit?.message?.split("\n")[0] ?? "Sin mensaje";
        const author = commit.commit?.author?.name ?? "Autor desconocido";
        const date = new Date(commit.commit?.author?.date ?? Date.now()).toLocaleString("es-DO", {
          dateStyle: "medium",
          timeStyle: "short"
        });
        const url = commit.html_url;

        return `
          <li class="commit-item">
            <p class="commit-message">${message}</p>
            <p class="commit-meta">${author} · ${date}</p>
            <a class="commit-link" href="${url}" target="_blank" rel="noreferrer">Ver commit</a>
          </li>
        `;
      })
      .join("");
  } catch (error) {
    commitList.innerHTML = `
      <li class="commit-item">
        <p class="commit-message">No se pudo cargar la actividad en este momento.</p>
        <p class="commit-meta">${error.message}</p>
      </li>
    `;
  }
}

async function loadTrackingMetrics() {
  const repoMetrics = document.querySelector("#repo-metrics");
  const deployMetrics = document.querySelector("#deploy-metrics");

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

    const deployDate = new Date(lastRun.updated_at).toLocaleString("es-DO", {
      dateStyle: "medium",
      timeStyle: "short"
    });

    deployMetrics.innerHTML = `
      <li class="metric-item"><strong>Workflow</strong>${lastRun.name}</li>
      <li class="metric-item"><strong>Estado</strong>${lastRun.status}</li>
      <li class="metric-item"><strong>Resultado</strong>${lastRun.conclusion ?? "En progreso"}</li>
      <li class="metric-item"><strong>Actualizado</strong>${deployDate}</li>
      <li><a class="metric-link" href="${lastRun.html_url}" target="_blank" rel="noreferrer">Ver ejecucion en GitHub Actions</a></li>
    `;
  } catch (error) {
    repoMetrics.innerHTML = `
      <li class="metric-item">
        <strong>Seguimiento</strong>
        No disponible en este momento (${error.message}).
      </li>
    `;
    deployMetrics.innerHTML = `
      <li class="metric-item">
        <strong>Deploy</strong>
        No disponible en este momento (${error.message}).
      </li>
    `;
  }
}

renderWeeks();
renderAutomation();
setupFilters();
cycleStages();
setupRevealOnScroll();
loadCommits();
loadTrackingMetrics();
