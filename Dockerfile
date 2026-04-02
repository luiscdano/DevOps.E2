FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /app

# Render (repo build) espera Dockerfile en la raiz; se reutiliza la app S13.
COPY semana13-despliegue-produccion/app/server.js ./server.js

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/health >/dev/null || exit 1

CMD ["node", "server.js"]
