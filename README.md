# DevOps.E2

Repositorio público creado para la práctica de la asignatura **Electiva 2 (DevOps)** en el Instituto Tecnológico de las Américas (ITLA), bajo la conducción del docente **Elvys Cruz**.

Este repositorio documenta de forma progresiva los conceptos, prácticas y evidencias desarrolladas semana a semana durante el curso, simulando un entorno real de trabajo DevOps con enfoque en colaboración, automatización y mejora continua.

---

## Objetivo General del Repositorio
- Aplicar los principios fundamentales de DevOps en un entorno práctico.
- Utilizar control de versiones con ramas (`main` y `dev`) como base del flujo de trabajo.
- Implementar herramientas de planificación y seguimiento de tareas (Kanban).
- Documentar la evolución del proyecto como evidencia de aprendizaje académico y técnico.

---

## Estructura de Ramas
- **main**: Rama estable que representa los entregables validados y listos como versión final.
- **dev**: Rama de desarrollo donde se realizan los cambios, mejoras y pruebas antes de ser promovidos a `main`.

---

## Flujo de Trabajo
1. Desarrollo de cambios en la rama `dev`  
2. Creación de Pull Request (`dev → main`)  
3. Revisión y validación de los cambios  
4. Integración en `main` para mantener un historial limpio y estable  

---

## S1 — Introducción a DevOps

### Objetivo de la Semana
Comprender los fundamentos de DevOps y establecer la base técnica del proyecto mediante la creación de un repositorio público con control de ramas y estructura profesional.

---

### Definición y Principios de DevOps
DevOps es una cultura y conjunto de prácticas que integran los equipos de desarrollo (Dev) y operaciones (Ops) para mejorar la entrega continua de software, promoviendo la colaboración, la automatización y la responsabilidad compartida a lo largo del ciclo de vida del sistema.

Principios clave abordados:
- Colaboración entre equipos
- Integración continua
- Automatización de procesos
- Monitoreo y retroalimentación constante

---

### Historia y Evolución de DevOps
Se revisó cómo DevOps surge como respuesta a la separación tradicional entre desarrollo y operaciones, la cual generaba retrasos, errores en producción y falta de alineación entre equipos. La evolución ha llevado a la adopción de prácticas como CI/CD, infraestructura como código y monitoreo en tiempo real.

---

### Roles y Responsabilidades en DevOps
Se identificaron los principales roles dentro de un entorno DevOps:
- Desarrolladores
- Ingenieros de Operaciones
- Ingenieros DevOps
- QA / Testing
- Product Owner / Project Manager

Todos enfocados en un modelo de trabajo colaborativo y multifuncional.

---

### Desafíos en DevOps
Se analizaron retos comunes como:
- Resistencia al cambio cultural
- Falta de automatización
- Problemas de comunicación entre equipos
- Gestión de infraestructura y seguridad

---

### Evidencia Técnica — S1
- Repositorio público creado en GitHub
- Ramas configuradas: `main` y `dev`
- Documentación inicial en README
- Historial de commits como evidencia de control de versiones

---

### Experiencia Personal
Esta semana permitió comprender que DevOps no es solo una herramienta o metodología, sino una cultura organizacional. La creación del repositorio y la separación de ramas ayudó a visualizar cómo se estructuran los flujos de trabajo en equipos reales de desarrollo y despliegue.

---

## S2 — Herramientas de Comunicación y Colaboración

### Objetivo de la Semana
Implementar una herramienta visual de planificación y seguimiento de tareas mediante un tablero Kanban, reforzando la importancia de la comunicación, la trazabilidad y la organización del trabajo en entornos DevOps.

---

### Herramientas de Comunicación y Colaboración en DevOps
Se trabajó con GitHub Projects como herramienta central para la gestión visual de tareas, permitiendo:
- Organización de actividades por estados
- Seguimiento del progreso del proyecto
- Relación entre tareas e incidencias del repositorio

---

### Construyendo una Cultura Colaborativa y Multifuncional
Se reforzó la importancia de la transparencia en el trabajo, donde todos los miembros del equipo pueden ver:
- Qué tareas están pendientes
- Qué se está desarrollando
- Qué está en revisión
- Qué ya fue completado

---

### Metodologías Ágiles y DevOps
Se estableció la relación entre enfoques ágiles (como Kanban) y DevOps, destacando cómo ambos buscan:
- Entregas continuas
- Mejora incremental
- Retroalimentación constante
- Adaptación al cambio

---

### Automatización
Se introdujo el concepto de automatización como pilar de DevOps, con énfasis en:
- Integración continua (CI)
- Validación automática de cambios
- Preparación para futuras configuraciones de pipelines

---

### Evidencia Técnica
- Creación de tablero Kanban en GitHub Projects
- Columnas configuradas:
  - Todo
  - In Progress
  - Review / PR
  - Done
- Tareas vinculadas a issues del repositorio
- Seguimiento visual del flujo de trabajo

Enlace del tablero Kanban:  
https://github.com/users/luiscdano/projects/1

---

### Experiencia Personal — S2
El uso del tablero Kanban permitió comprender cómo la planificación visual mejora la comunicación dentro de los equipos, facilita la priorización de tareas y crea una trazabilidad clara entre la planeación, el desarrollo y la validación del trabajo realizado.

---

## S3 — Herramientas CI/CD y Automatización

### Objetivo de la Semana
Crear una página web del proyecto y desplegarla automáticamente en la nube desde GitHub usando **GitHub Pages** como base del flujo CI/CD.

---

### Implementación Realizada
- Se creó una web evolutiva en `docs/` para presentar el progreso DevOps del cuatrimestre.
- Se configuró un workflow de GitHub Actions en `.github/workflows/pages.yml`.
- Cada push a `main` (con cambios en `docs/`, workflow o `README.md`) dispara el despliegue automático.
- La web quedó diseñada para crecer por semanas sin rehacer toda la estructura.
- Se integró el seguimiento general con enlace directo al tablero Kanban (`Projects/1`) y métricas dinámicas del repositorio (issues, PR y estado del último deploy).

---

### Evidencia Técnica — S3
- Sitio web estático publicado con GitHub Pages
- Pipeline de despliegue automático con GitHub Actions
- Secciones incluidas:
  - Integración Continua (CI)
  - Entrega Continua (CD)
  - Automatización de infraestructura (roadmap)
  - Monitoreo y trazabilidad (commits recientes desde API de GitHub)

Enlace raiz principal (Home) del sitio:
https://luiscdano.github.io/DevOps.E2/

---

### Activación en GitHub (una sola vez)
1. Ir a **Settings > Pages** del repositorio.
2. En **Source**, seleccionar **GitHub Actions**.
3. Confirmar que el workflow `Deploy GitHub Pages` complete correctamente.

---

### Sincronizacion automatica del Kanban Web
La web ahora refleja automaticamente el estado real de **GitHub Projects** (`Project #1`) para evitar diferencias entre tablero y pagina.

Fuente oficial del estado:
https://github.com/users/luiscdano/projects/1

Implementacion:
- `docs/data/progress.json`: archivo generado automaticamente con tareas y estados.
- `scripts/sync-project-progress.mjs`: sincroniza `Project #1` hacia `progress.json`.
- `.github/workflows/sync-project-progress.yml`: ejecuta la sincronizacion en CI.

Disparadores del workflow de sync:
1. Manual (`workflow_dispatch`)
2. Cada 30 minutos (`cron`)
3. Eventos de `issues` y `pull_request`

Comando local de sincronizacion:
`node scripts/sync-project-progress.mjs --owner luiscdano --project 1 --path docs/data/progress.json`

Nota: para mantener consistencia, los cambios de estado deben hacerse en **GitHub Projects**; la web se actualiza a partir de ese tablero.

---

### Experiencia Personal — S3
Esta semana permitió conectar teoría y práctica de CI/CD en un caso real: cada cambio en el repositorio puede transformarse en una entrega visible en línea, con trazabilidad y base para futuras automatizaciones del curso.

---

## S4 — Integración Continua (CI)

### Objetivo de la Semana
Implementar una integración continua con GitHub Actions que, al subir cambios a la rama `main`, envíe una notificación a `ntfy.sh/devops-itla`.

---

### Implementación Realizada
- Se mantiene el programa base del curso en `docs/index.html` (sitio ya publicado en GitHub Pages).
- Se creó el workflow `.github/workflows/alerta.yml`.
- El workflow se ejecuta en `push` a `main` y también permite prueba manual con `workflow_dispatch`.
- En cada ejecución:
  1. valida que exista `docs/index.html`;
  2. envía una alerta a `https://ntfy.sh/devops-itla` con datos del repositorio, autor, evento y commit.

---

### Evidencia Técnica — S4
- Workflow de CI con alerta:
  - `.github/workflows/alerta.yml`
- Notificación enviada a:
  - `ntfy.sh/devops-itla`
- Integración con el flujo del curso:
  - `main` como rama de integración
  - trazabilidad en GitHub Actions + Kanban + sitio web

---

### Experiencia Personal — S4
Esta práctica fortalece la cultura DevOps al incorporar retroalimentación inmediata en cada integración a `main`, acercando el flujo académico a un escenario real de monitoreo y respuesta temprana.

---

## S5 — 1er Parcial: Integración Continua con Surge.sh y GitHub Actions

### Objetivo de la Semana
Adaptar el proyecto existente para desplegar automáticamente la web en **Surge.sh** al hacer `push` a `main`, manteniendo la trazabilidad en GitHub Actions y la sincronización con el tablero Kanban.

---

### Implementación Realizada
- Se creó el workflow de despliegue en `.github/workflows/main.yaml`.
- El workflow se ejecuta en `push` a `main` (cambios en `docs/**`, workflow o `README.md`) y `workflow_dispatch`.
- Se valida la presencia de secretos antes del despliegue para evitar exposiciones o ejecuciones ambiguas.
- Se instala Surge CLI en CI y se publica `docs/` al dominio configurado en secret.
- Se actualizaron las vistas web (`Home`, `Semanas`, `Kanban`) para evidenciar S5 y el nuevo flujo de deploy.

---

### Secrets Requeridos en GitHub
Para no exponer credenciales, configurar en **Settings > Secrets and variables > Actions**:

1. `SURGE_DOMAIN`
2. `SURGE_TOKEN`

Obtención de token local:
`surge token`

Nota: el token de Surge **no** debe guardarse en código ni en archivos versionados.

---

### Evidencia Técnica — S5
- Workflow de Surge:
  - `.github/workflows/main.yaml`
- Workflow de Pages (se mantiene activo):
  - `.github/workflows/pages.yml`
- Tablero oficial de seguimiento:
  - `https://github.com/users/luiscdano/projects/1`
- Sitio base del proyecto:
  - `https://luiscdano.github.io/DevOps.E2/`

---

### Prueba Esperada del Parcial
1. Realizar un cambio en `docs/`.
2. Hacer `push` a `main`.
3. Verificar ejecución satisfactoria en:
   - `Actions > Deploy Surge`
4. Confirmar publicación en el dominio `*.surge.sh` configurado.

---

## Autor
**Luis Emilio Cedano, Matr.2024-0128**  
ITLA – Electiva 2 (DevOps)
