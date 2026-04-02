# DevOps.E2

Este es mi repositorio público para la práctica de la asignatura **Electiva 2 (DevOps)** en el Instituto Tecnológico de las Américas (ITLA), bajo la conducción del docente **Elvys Cruz**.

Aquí documento de forma progresiva los conceptos, prácticas y evidencias que desarrollo semana a semana durante el curso, simulando un entorno real de trabajo DevOps con enfoque en colaboración, automatización y mejora continua.

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
En esta semana revisé cómo DevOps surge como respuesta a la separación tradicional entre desarrollo y operaciones, la cual generaba retrasos, errores en producción y falta de alineación entre equipos. También identifiqué cómo esta evolución ha impulsado la adopción de prácticas como CI/CD, infraestructura como código y monitoreo en tiempo real.

---

### Roles y Responsabilidades en DevOps
Identifiqué los principales roles dentro de un entorno DevOps:
- Desarrolladores
- Ingenieros de Operaciones
- Ingenieros DevOps
- QA / Testing
- Product Owner / Project Manager

Todos enfocados en un modelo de trabajo colaborativo y multifuncional.

---

### Desafíos en DevOps
Analicé retos comunes como:
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
Esta semana comprendí que DevOps no es solo una herramienta o metodología, sino una cultura organizacional. Crear el repositorio y separar ramas me ayudó a visualizar cómo se estructuran los flujos de trabajo en equipos reales de desarrollo y despliegue.

---

## S2 — Herramientas de Comunicación y Colaboración

### Objetivo de la Semana
Implementar una herramienta visual de planificación y seguimiento de tareas mediante un tablero Kanban, reforzando la importancia de la comunicación, la trazabilidad y la organización del trabajo en entornos DevOps.

---

### Herramientas de Comunicación y Colaboración en DevOps
Trabajé con GitHub Projects como herramienta central para la gestión visual de tareas, lo que me permitió:
- Organización de actividades por estados
- Seguimiento del progreso del proyecto
- Relación entre tareas e incidencias del repositorio

---

### Construyendo una Cultura Colaborativa y Multifuncional
Reforcé la importancia de la transparencia en el trabajo, donde todos los miembros del equipo pueden ver:
- Qué tareas están pendientes
- Qué se está desarrollando
- Qué está en revisión
- Qué ya fue completado

---

### Metodologías Ágiles y DevOps
Establecí la relación entre enfoques ágiles (como Kanban) y DevOps, destacando cómo ambos buscan:
- Entregas continuas
- Mejora incremental
- Retroalimentación constante
- Adaptación al cambio

---

### Automatización
Introduje el concepto de automatización como pilar de DevOps, con énfasis en:
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
Usar el tablero Kanban me permitió comprender cómo la planificación visual mejora la comunicación dentro de los equipos, facilita la priorización de tareas y crea una trazabilidad clara entre la planeación, el desarrollo y la validación del trabajo realizado.

---

## S3 — Herramientas CI/CD y Automatización

### Objetivo de la Semana
Crear una página web del proyecto y desplegarla automáticamente en la nube desde GitHub usando **GitHub Pages** como base del flujo CI/CD.

---

### Implementación Realizada
- Creé una web evolutiva en `docs/` para presentar el progreso DevOps del cuatrimestre.
- Configuré un workflow de GitHub Actions en `.github/workflows/pages.yml`.
- Cada push a `main` (con cambios en `docs/`, workflow o `README.md`) dispara el despliegue automático.
- Dejé la web diseñada para crecer por semanas sin rehacer toda la estructura.
- Integré el seguimiento general con enlace directo al tablero Kanban (`Projects/1`) y métricas dinámicas del repositorio (issues, PR y estado del último deploy).

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
Mi web ahora refleja automaticamente el estado real de **GitHub Projects** (`Project #1`) para evitar diferencias entre tablero y pagina.

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
Esta semana me permitió conectar teoría y práctica de CI/CD en un caso real: cada cambio en el repositorio puede transformarse en una entrega visible en línea, con trazabilidad y base para futuras automatizaciones del curso.

---

## S4 — Integración Continua (CI)

### Objetivo de la Semana
Implementar una integración continua con GitHub Actions que, al subir cambios a la rama `main`, envíe una notificación a `ntfy.sh/devops-itla`.

---

### Implementación Realizada
- Mantengo el programa base del curso en `docs/index.html` (sitio ya publicado en GitHub Pages).
- Creé el workflow `.github/workflows/alerta.yml`.
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
Esta práctica fortaleció mi enfoque DevOps al incorporar retroalimentación inmediata en cada integración a `main`, acercando el flujo académico a un escenario real de monitoreo y respuesta temprana.

---

## S5 — 1er Parcial: Integración Continua con Surge.sh y GitHub Actions

### Objetivo de la Semana
Adapté el proyecto existente para desplegar automáticamente la web en **Surge.sh** al hacer `push` a `main`, manteniendo la trazabilidad en GitHub Actions y la sincronización con el tablero Kanban.

---

### Implementación Realizada
- Creé el workflow de despliegue en `.github/workflows/main.yaml`.
- Configuré el workflow para ejecutarse en `push` a `main` (cambios en `docs/**`, workflow o `README.md`) y `workflow_dispatch`.
- Validé la presencia de secretos antes del despliegue para evitar exposiciones o ejecuciones ambiguas.
- Instalé Surge CLI en CI y publiqué `docs/` al dominio configurado en secret.
- Actualicé las vistas web (`Home`, `Semanas`, `Kanban`) para evidenciar S5 y el nuevo flujo de deploy.

---

### Secrets Requeridos en GitHub
Para no exponer mis credenciales, configuré en **Settings > Secrets and variables > Actions**:

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

## S6 — Contenedores: Nginx con Docker Compose

### Objetivo de la Semana
Servir una pagina web usando `nginx` y `docker compose`, montando el contenido desde `src/`.

---

### Implementacion Realizada
- Cree `src/index.html` con el contenido "Hola mundo".
- Cree `docker-compose.yml` con servicio `nginx:alpine`.
- Configure volumen de solo lectura:
  - `./src:/usr/share/nginx/html:ro`
- Expose puerto local:
  - `8080:80`
- Levante el servicio con:
  - `docker compose up -d`

---

### Evidencia Tecnica — S6
- Archivos:
  - `docker-compose.yml`
  - `src/index.html`
- Verificacion:
  - `docker compose ps` con contenedor `devops-e2-semana6` en estado `Up`
  - respuesta HTTP valida en `http://localhost:8080`
- Trazabilidad:
  - Issue S6 cerrada: `https://github.com/luiscdano/DevOps.E2/issues/11`
  - Comentario de evidencia: `https://github.com/luiscdano/DevOps.E2/issues/11#issuecomment-3918805032`
  - Evidencia publicada en web: `docs/assets/evidencia-s6-nginx-compose.txt`

---

## S7 — Docker Compose: App Hola Mundo + MySQL

### Objetivo de la Semana
Crear una aplicacion web "Hola mundo" conectada a una base de datos MySQL usando `docker compose`.

---

### Implementacion Realizada
- Mantengo `src/` como directorio de codigo fuente de la app.
- Cree aplicacion web con `Node.js + Express` en:
  - `src/server.js`
- Configure conexion a MySQL con `mysql2` y endpoint de salud:
  - `GET /` (hola mundo + prueba de conexion a BD)
  - `GET /healthz`
- Cree imagen de aplicacion con:
  - `src/Dockerfile`
- Defini `docker-compose.yml` con dos servicios:
  - `app` (servidor web)
  - `mysql` (base de datos)
- Agregue healthcheck en MySQL y dependencia controlada:
  - `depends_on: condition: service_healthy`

---

### Evidencia Tecnica — S7
- Archivos:
  - `docker-compose.yml`
  - `src/server.js`
  - `src/package.json`
  - `src/package-lock.json`
  - `src/Dockerfile`
- Validaciones realizadas:
  - `node --check src/server.js`
  - `docker compose config`
  - arranque local de app verificando espera de MySQL
- Evidencia publicada en web:
  - `docs/assets/evidencia-s7-app-mysql-compose.txt`
- Trazabilidad:
  - Issue S7: `https://github.com/luiscdano/DevOps.E2/issues/12`
  - Tablero oficial: `https://github.com/users/luiscdano/projects/1`

---

### Ejecucion Local (S7)
1. `docker compose up -d --build`
2. Abrir `http://localhost:8080`
3. Verificar salud en `http://localhost:8080/healthz`
4. Revisar logs con `docker compose logs -f app mysql`
5. Detener con `docker compose down`

---

## S8 — Automatizacion con Ansible en 5 servidores Ubuntu

### Objetivo de la Semana
Usar Ansible para automatizar tareas de administracion en 5 servidores Ubuntu creados con Docker.

---

### Implementacion Realizada
- Cree una imagen Ubuntu para laboratorios Ansible en:
  - `semana8-ansible/Dockerfile`
- La imagen incluye:
  - `openssh-server`
  - usuario `ansible` con password `ansible`
  - privilegios `sudo` sin password
  - `python3` para ejecucion de modulos de Ansible
- Defini 5 servidores en:
  - `semana8-ansible/docker-compose.yml`
- Configure inventario y parametros de Ansible en:
  - `semana8-ansible/inventario.ini`
  - `semana8-ansible/ansible.cfg`
- Cree playbook de automatizacion en:
  - `semana8-ansible/playbook.yml`

---

### Automatizaciones Aplicadas con Ansible
- Actualizacion de paquetes del sistema (`apt update` + `upgrade`)
- Creacion del usuario `itla`
- Creacion de carpeta `app` en `/home/ansible/app`
- Creacion del archivo `/home/ansible/app/hola.txt`
- Instalacion de `cowsay` y `htop`

---

### Ejecucion Local (S8)
1. `cd semana8-ansible`
2. `docker compose up -d --build`
3. `docker compose ps`
4. Instalar Ansible (Ubuntu/WSL):
   - `sudo apt update && sudo apt install -y ansible sshpass`
5. Probar conectividad:
   - `ansible servidores_ubuntu -m ping`
6. Ejecutar playbook:
   - `ansible-playbook playbook.yml`
7. Verificar resultados:
   - `ansible servidores_ubuntu -m shell -a "id itla"`
   - `ansible servidores_ubuntu -m shell -a "ls -l /home/ansible/app/hola.txt"`
   - `ansible servidores_ubuntu -m shell -a "dpkg -l cowsay htop | grep '^ii'"`
8. Detener entorno:
   - `docker compose down`

---

### Evidencia Tecnica — S8
- Archivos clave:
  - `semana8-ansible/Dockerfile`
  - `semana8-ansible/docker-compose.yml`
  - `semana8-ansible/inventario.ini`
  - `semana8-ansible/ansible.cfg`
  - `semana8-ansible/playbook.yml`
  - `semana8-ansible/README.md`
- Evidencia publicada:
  - `docs/assets/evidencia-s8-ansible.txt`
  - `docs/evidencias-s8.html`
- Trazabilidad:
  - Issue S8 implementacion cerrada (2026-03-18):
    `https://github.com/luiscdano/DevOps.E2/issues/13`
  - Issue S8 ruta futura aun en TODO:
    `https://github.com/luiscdano/DevOps.E2/issues/14`

---

## S9 — Introduccion a Azure DevOps

### Objetivo de la Semana
Cumplir la practica operativa de Azure DevOps y dejar evidencia completa en repo, Kanban y foro.

---

### Que es Azure DevOps
Azure DevOps es un conjunto de herramientas de Microsoft orientado a planificar, desarrollar, probar y entregar software de manera colaborativa y automatizada.

Su valor dentro de la materia es mostrar una plataforma integrada donde convergen desarrollo (`Dev`) y operaciones (`Ops`) en un mismo flujo de trabajo.

---

### Servicios Principales de Azure DevOps
- **Azure Boards**: gestion de proyectos con tareas, bugs, historias de usuario y sprints.
- **Azure Repos**: repositorios Git privados y colaborativos para control de versiones.
- **Azure Pipelines**: automatizacion de integracion continua (CI) y entrega continua (CD).
- **Azure Test Plans**: planificacion y ejecucion de pruebas manuales y automatizadas.
- **Azure Artifacts**: gestion de paquetes como NuGet, npm y Maven para compartir componentes reutilizables.

---

### Para Que se Usa
- Automatizar compilaciones y despliegues.
- Gestionar codigo fuente con Git.
- Dar seguimiento al progreso del desarrollo.
- Integrar pruebas en el flujo de entrega.
- Centralizar colaboracion y visibilidad del trabajo del equipo.

---

### Beneficios Identificados
- Compatible con multiples lenguajes como .NET, Java, Node.js, Python y PHP.
- Permite desplegar en Azure, AWS, Google Cloud o infraestructura on-premise.
- Escala tanto para equipos pequenos como para equipos grandes.
- Se integra con herramientas externas como Jira, Slack y Microsoft Teams.

---

### Flujo Simple de Trabajo
1. El desarrollador sube codigo a **Azure Repos**.
2. Se activa un pipeline en **Azure Pipelines**.
3. El pipeline compila el proyecto y ejecuta pruebas automatizadas.
4. Si todo sale bien, se realiza el despliegue.
5. El seguimiento del avance y resultados puede visualizarse en **Azure Boards**.

---

### Requerimientos de la Practica S9 (foro)
- [ ] a) Crear organizacion y proyecto en Azure DevOps.
- [ ] b) Crear tablero con al menos 5 issues y mover tareas a Doing/Done.
- [ ] c) Inicializar app "hola mundo" local y hacer push al repositorio de Azure DevOps.
- [ ] d) Publicar URL del proyecto de Azure DevOps en el foro.

---

### Estado Actual (2026-03-25)
- La lectura base de S9 se completo y cerro en issue `#15`.
- La practica operativa de S9 fue suspendida por decision docente y la issue `#16` queda cerrada.
- Se conserva el material academico de S9 para referencia historica.

---

### Evidencia Disponible Hoy
- Estado consolidado de S9:
  - `docs/assets/evidencia-s9-estado-suspendida.txt`
- Material de apoyo de aula virtual:
  - `docs/assets/evidencia-s9-azure-material.pdf`
- Modulo web de evidencia S9:
  - `docs/evidencias-s9.html`

---

### Nota de Cronograma
La lectura base de S9 fue cerrada el **14 de marzo de 2026** (issue #15). El **25 de marzo de 2026** la practica queda marcada como **suspendida** por decision docente y la issue #16 se cierra conservando toda la documentacion.

---

### Trazabilidad
- Issue S9 (lectura cerrada, 2026-03-14):
  `https://github.com/luiscdano/DevOps.E2/issues/15`
- Issue S9 (practica suspendida, 2026-03-25):
  `https://github.com/luiscdano/DevOps.E2/issues/16`
- GitHub Projects #1:
  `https://github.com/users/luiscdano/projects/1`

---

## S10 — 2do Parcial: Servidor Web con Ansible

### Objetivo de la Semana
Automatizar la implementacion de un servidor web con Ansible, publicar el codigo en GitHub y registrar evidencia integral.

---

### Implementacion Realizada
- Laboratorio tecnico creado en:
  - `semana10-ansible-parcial/`
- Archivos principales:
  - `semana10-ansible-parcial/Dockerfile`
  - `semana10-ansible-parcial/docker-compose.yml`
  - `semana10-ansible-parcial/inventory.ini`
  - `semana10-ansible-parcial/ansible.cfg`
  - `semana10-ansible-parcial/playbook.yml`
  - `semana10-ansible-parcial/templates/index.html.j2`
- Flujo validado:
  1. `docker compose up -d --build`
  2. `ansible webservers -m ping`
  3. `ansible-playbook playbook.yml`
  4. `curl http://127.0.0.1:8081` y `curl http://127.0.0.1:8082`
  5. `docker compose down`

---

### Evidencia Tecnica — S10
- Salida completa de comandos y validaciones:
  - `docs/assets/evidencia-s10-ansible-web.txt`
- Modulo web de evidencia:
  - `docs/evidencias-s10.html`

---

### Referencia Base
- Guia de apoyo:
  - `https://chatgpt.com/share/68767f33-a24c-8000-aec5-c15b67c512d3`

---

### Trazabilidad
- Issue S10 (cerrada, 2026-03-19):
  `https://github.com/luiscdano/DevOps.E2/issues/17`
- GitHub Projects #1:
  `https://github.com/users/luiscdano/projects/1`

---

## Ruta Futura (S14-S16) · Sujeta a Cambios

Nota: las Semanas 12 y 13 ya fueron implementadas y documentadas en este repositorio.

---

## S12 — Monitoreo y Observabilidad

### Objetivo de la Semana
Habilitar un sistema basico de monitoreo para aplicaciones y servicios usando `Prometheus`, `Grafana` y `node-exporter` con `Docker Compose`.

---

### Implementacion Realizada
- Laboratorio tecnico creado en:
  - `semana12-monitoreo/`
- Archivos principales:
  - `semana12-monitoreo/docker-compose.yml`
  - `semana12-monitoreo/prometheus/prometheus.yml`
  - `semana12-monitoreo/grafana/provisioning/datasources/prometheus.yml`
  - `semana12-monitoreo/grafana/provisioning/dashboards/dashboards.yml`
  - `semana12-monitoreo/grafana/dashboards/s12-observabilidad.json`
  - `semana12-monitoreo/README.md`
- Flujo validado:
  1. `cd semana12-monitoreo`
  2. `docker compose up -d`
  3. `curl http://127.0.0.1:9090/-/ready`
  4. `curl -u admin:admin http://127.0.0.1:3000/api/health`
  5. `curl http://127.0.0.1:9090/api/v1/targets`
  6. `curl -u admin:admin http://127.0.0.1:3000/api/datasources`
  7. `curl -u admin:admin "http://127.0.0.1:3000/api/search?query=S12"`

---

### Resultado Tecnico
- Prometheus quedo escuchando en `http://localhost:9090`.
- Grafana quedo escuchando en `http://localhost:3000` con credenciales `admin/admin`.
- `node-exporter` quedo exponiendo metricas en `http://localhost:9100/metrics`.
- Grafana se aprovisiona automaticamente con:
  - Fuente de datos `Prometheus`
  - Dashboard `S12 - Observabilidad Base`
- El dashboard inicial incluye paneles de:
  - Estado `up` del exporter
  - Uso de CPU
  - Uso de memoria
  - Uptime
  - Load average
  - Espacio disponible en disco

---

### Evidencia Tecnica — S12
- Salida completa de comandos y validaciones:
  - `docs/assets/evidencia-s12-prometheus-grafana.txt`
- Modulo web de evidencia:
  - `docs/evidencias-s12.html`

---

### Ajuste Tecnico Aplicado
La guia base del docente usaba un `docker-compose.yml` minimo con configuracion manual dentro de Grafana. En esta entrega deje la misma practica, pero adaptada a un flujo mas reproducible:
- La carpeta S12 esta aislada para no afectar el `docker-compose.yml` de semanas anteriores.
- Se omitio el campo `version` porque `Docker Compose` actual trabaja con Compose Specification.
- Grafana queda preconfigurado para evitar pasos manuales repetitivos durante la demostracion.

---

### Trazabilidad
- Issue S12:
  `https://github.com/luiscdano/DevOps.E2/issues/18`
- GitHub Projects #1:
  `https://github.com/users/luiscdano/projects/1`
- Modulo web S12:
  `https://luiscdano.github.io/DevOps.E2/evidencias-s12.html`

---

## S13 — Despliegue a Produccion

### Objetivo de la Semana
Completar el ciclo solicitado: app web Hola Mundo, contenerizacion con Docker y publicacion en Docker Hub.

---

### Implementacion Realizada
- Laboratorio tecnico creado en:
  - `semana13-despliegue-produccion/`
- Archivos principales:
  - `semana13-despliegue-produccion/app/server.js`
  - `semana13-despliegue-produccion/Dockerfile`
  - `semana13-despliegue-produccion/docker-compose.yml`
  - `semana13-despliegue-produccion/README.md`
- Flujo validado:
  1. `cd semana13-despliegue-produccion`
  2. `docker build -t luiscdano/devops-e2-s13-hola-mundo:2026.03.25 .`
  3. `docker run -d --name devops-e2-s13-hola -p 8083:8080 luiscdano/devops-e2-s13-hola-mundo:2026.03.25`
  4. `curl http://127.0.0.1:8083/` y `curl http://127.0.0.1:8083/health`
  5. `docker push luiscdano/devops-e2-s13-hola-mundo:2026.03.25`
  6. `docker push luiscdano/devops-e2-s13-hola-mundo:latest`

---

### Resultado Tecnico
- Imagen publicada en Docker Hub:
  - `luiscdano/devops-e2-s13-hola-mundo:2026.03.25`
  - `luiscdano/devops-e2-s13-hola-mundo:latest`
- Digest publicado:
  - `sha256:58cbf272e982227bf9996cc695c282c3b97917643201ff3bdac76fb903fb6890`
- Validaciones completadas:
  - Build local `OK`
  - Endpoints `/` y `/health` `OK`
  - Push a Docker Hub `OK`

---

### Evidencia Tecnica — S13
- Salida completa de comandos y validaciones:
  - `docs/assets/evidencia-s13-dockerhub.txt`
- Modulo web de evidencia:
  - `docs/evidencias-s13.html`

---

### Trazabilidad
- Issue S13 (cerrada, 2026-03-25):
  `https://github.com/luiscdano/DevOps.E2/issues/19`
- Docker Hub:
  `https://hub.docker.com/r/luiscdano/devops-e2-s13-hola-mundo`
- GitHub Projects #1:
  `https://github.com/users/luiscdano/projects/1`

---

## S14 — Cont. Despliegue a Produccion

### Objetivo de la Semana
Automatizar el ciclo de entrega para que cada `push` a `main`:
1. construya y publique imagen Docker en Docker Hub;
2. dispare despliegue automatico del servicio en Render.

### Implementacion Realizada
- Workflow creado:
  - `.github/workflows/s14-docker-render.yml`
- Flujo configurado:
  1. `build-and-push`
     - valida `DOCKER_USERNAME` y `DOCKER_PASSWORD`;
     - construye imagen desde `semana13-despliegue-produccion/Dockerfile`;
     - publica tags:
       - `latest`
       - `sha corto del commit`
       - `fecha UTC (YYYYMMDD)`
  2. `deploy-render`
     - valida `RENDER_API_KEY` y `RENDER_SERVICE_ID`;
     - ejecuta `POST /v1/services/{serviceId}/deploys` en API Render.
- Trigger del workflow:
  - `push` a `main`.
  - `workflow_dispatch` para ejecucion manual.
- Evidencia web S14:
  - `docs/evidencias-s14.html`

### Ejecucion Real de la Semana (2026-04-02)
1. Se hizo `push` a `main` con el workflow S14.
2. Primer run fallido:
   - Run: `https://github.com/luiscdano/DevOps.E2/actions/runs/23877424134`
   - Causa: token de Docker Hub sin permisos de push
   - Error clave: `unauthorized: access token has insufficient scopes`
3. Se reemplazo `DOCKER_PASSWORD` por un token Docker Hub con scope correcto.
4. Segundo run ejecutado manualmente y completado en `success`:
   - Run: `https://github.com/luiscdano/DevOps.E2/actions/runs/23878576731`
   - Job `build-and-push`: `success`
   - Job `deploy-render`: `success`
5. Tercer run por `push` (validacion final) tambien completado en `success`:
   - Run: `https://github.com/luiscdano/DevOps.E2/actions/runs/23879182714`
   - Job `build-and-push`: `success`
   - Job `deploy-render`: `success`
6. Resultado Docker Hub validado:
   - `latest`
   - `787906e`
   - `20260402`
7. Resultado Render:
   - trigger de deploy via API completado en workflow
   - en build por repo aparecio error inicial:
     - `failed to read dockerfile: open Dockerfile: no such file or directory`
   - correccion aplicada en repo:
     - `Dockerfile` en raiz reutilizando `semana13-despliegue-produccion/app/server.js`
     - `.dockerignore` en raiz para contexto minimo de build
   - validacion final:
     - `GET https://devops-e2.onrender.com/health` -> HTTP `200`
     - respuesta: `{\"status\":\"ok\",\"week\":\"S13\",\"service\":\"hola-mundo-prod\"}`

### Secrets Requeridos (GitHub Actions)
Configurar en `Settings > Secrets and variables > Actions`:
- `DOCKER_USERNAME`: usuario de Docker Hub.
- `DOCKER_PASSWORD`: Access Token de Docker Hub.
- `RENDER_API_KEY`: API Key de Render.
- `RENDER_SERVICE_ID`: ID del servicio en Render (ej. `srv-xxxxxxxxxxxx`).

### Paso a Paso de Verificacion en Render
1. Abrir el servicio en Render y entrar a la pestana `Deploys`.
2. Confirmar que el ultimo deploy este en estado `Live`.
3. Abrir el deploy mas reciente y revisar `Logs`.
4. Verificar que la app este escuchando en `PORT` (variable de entorno de Render).
5. Revisar en `Settings` el `Health Check Path` (usar `/health` si corresponde).
6. Si usa Docker image, confirmar imagen/tag de Docker Hub y ejecutar `Manual Deploy`.
7. Si Render construye desde repo, asegurar:
   - Root Directory correcto
   - Dockerfile Path apuntando al `Dockerfile` valido
8. Validar publicamente:
   - `https://devops-e2.onrender.com/`
   - `https://devops-e2.onrender.com/health`
9. Al responder HTTP 200, marcar S14 como completada en Issue + Project.

### Trazabilidad
- Issue S14:
  `https://github.com/luiscdano/DevOps.E2/issues/20`
- Run fallido (diagnostico):
  `https://github.com/luiscdano/DevOps.E2/actions/runs/23877424134`
- Run exitoso (evidencia principal):
  `https://github.com/luiscdano/DevOps.E2/actions/runs/23879182714`
- Evidencia TXT S14:
  `docs/assets/evidencia-s14-docker-render.txt`

---

## S15 — Mejores Practicas en DevOps

### Enfoque
Las mejores practicas en DevOps buscan optimizar la colaboracion entre desarrollo y operaciones para entregar software de manera eficiente, segura y confiable.

### Contenido Base Disponible
1. **Cultura y Colaboracion**
- Fomentar cultura DevOps entre desarrollo, operaciones y QA.
- Compartir responsabilidades de calidad, seguridad y rendimiento.
- Impulsar aprendizaje y mejora continua.

2. **Automatizacion**
- Implementar CI/CD para compilar, probar y desplegar automaticamente.
- Usar IaC (Terraform, Ansible, CloudFormation).
- Automatizar monitoreo y alertas.

3. **Gestion de Configuracion**
- Mantener versionado de aplicaciones, scripts y documentacion.
- Asegurar consistencia de entornos con contenedores (Docker).

4. **Seguridad (DevSecOps)**
- Integrar seguridad temprano en el pipeline.
- Gestionar secretos con herramientas especializadas.

5. **Supervision y Metricas**
- Centralizar logs (ELK, Loki, Splunk).
- Medir KPIs como frecuencia de despliegue y MTTR.
- Exponer dashboards con feedback en tiempo real.

6. **Escalabilidad y Resiliencia**
- Ejecutar pruebas de carga y estres.
- Diseñar para tolerancia a fallos y recuperacion.
- Evaluar orquestacion con Kubernetes.

7. **Iteracion y Mejora Continua**
- Aplicar practicas agiles (sprints, retrospectivas).
- Realizar post-mortem de incidentes.

8. **Uso de Herramientas Adecuadas**
- Control de versiones: Git/GitLab/Bitbucket.
- CI/CD: Jenkins, GitHub Actions, GitLab CI/CD, ArgoCD.
- Observabilidad: Prometheus, Grafana, Datadog, New Relic.
- Automatizacion: Ansible, Chef, Puppet.

9. **Documentacion**
- Mantener procesos y flujos documentados.
- Automatizar documentacion tecnica cuando aplique.

10. **Adaptacion a la Nube**
- Diseñar con enfoque cloud-native y microservicios.
- Optimizar costos de infraestructura en nube.

### Trazabilidad
- Issue S15:
  `https://github.com/luiscdano/DevOps.E2/issues/21`

---

## S16 — Proyecto Final de DevOps

### Objetivo Preliminar
Consolidar en un proyecto final los aprendizajes del cuatrimestre: CI/CD, infraestructura, seguridad, observabilidad y despliegue.

### Trazabilidad
- Issue S16:
  `https://github.com/luiscdano/DevOps.E2/issues/22`

---

## Autor
**Luis Emilio Cedano, Matr.2024-0128**  
ITLA – Electiva 2 (DevOps)
