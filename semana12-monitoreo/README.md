# Semana 12 · Monitoreo y Observabilidad

Practica base de monitoreo usando `Prometheus`, `Grafana` y `node-exporter` sobre Docker Compose.

## Estructura

- `docker-compose.yml`: levanta los 3 servicios solicitados.
- `prometheus/prometheus.yml`: define los targets a monitorear.
- `grafana/provisioning/datasources/prometheus.yml`: registra Prometheus como data source por defecto.
- `grafana/provisioning/dashboards/dashboards.yml`: carga dashboards automaticamente.
- `grafana/dashboards/s12-observabilidad.json`: dashboard inicial con CPU, memoria, uptime, carga y disco.

## Levantar el entorno

```bash
cd semana12-monitoreo
docker compose up -d
```

## Verificacion

- Prometheus: `http://localhost:9090`
- Grafana: `http://localhost:3000`
- Node Exporter: `http://localhost:9100/metrics`

Credenciales de Grafana:

- Usuario: `admin`
- Contrasena: `admin`

## Resultado esperado

- Prometheus detecta los targets `prometheus:9090` y `node-exporter:9100`.
- Grafana ya trae configurada la fuente de datos `Prometheus`.
- El dashboard `S12 - Observabilidad Base` queda disponible en la carpeta `Semana 12`.
