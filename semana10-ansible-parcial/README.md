# Semana 10 · 2do Parcial (Ansible)

Estado: DONE

## Objetivo
Automatizar la implementacion de un servidor web con Ansible, validarlo localmente y dejar evidencia trazable en el repositorio.

## Implementacion realizada
- Infraestructura de laboratorio en Docker con 2 nodos Ubuntu:
  - `Dockerfile`
  - `docker-compose.yml`
- Inventario y configuracion Ansible:
  - `inventory.ini`
  - `ansible.cfg`
- Automatizacion del servidor web:
  - `playbook.yml`
  - `templates/index.html.j2`

## Flujo aplicado
1. Levantar nodos (`docker compose up -d --build`).
2. Validar conectividad (`ansible webservers -m ping`).
3. Ejecutar playbook para instalar y configurar Nginx.
4. Verificar endpoints HTTP en puertos `8081` y `8082`.
5. Bajar entorno (`docker compose down`).

## Evidencia tecnica
- Salida completa de ejecucion:
  - `docs/assets/evidencia-s10-ansible-web.txt`

## Trazabilidad
- Issue S10: https://github.com/luiscdano/DevOps.E2/issues/17
- Kanban: https://github.com/users/luiscdano/projects/1
- Repo: https://github.com/luiscdano/DevOps.E2

## Referencia de apoyo
- https://chatgpt.com/share/68767f33-a24c-8000-aec5-c15b67c512d3
