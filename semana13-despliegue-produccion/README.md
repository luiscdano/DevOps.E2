# S13 - Despliegue a Produccion

Implementacion de la Semana 13 con el ciclo solicitado:
1. App web Hola Mundo
2. Contenerizacion con Dockerfile
3. Publicacion de imagen en Docker Hub

## Estructura
- `app/server.js`: app web HTTP en Node.js.
- `Dockerfile`: imagen lista para produccion.
- `docker-compose.yml`: ejecucion local para validacion rapida.

## Build local
```bash
cd semana13-despliegue-produccion
docker build -t luiscdano/devops-e2-s13-hola-mundo:2026.03.25 .
```

## Validacion local
```bash
docker run --rm -d --name devops-e2-s13-hola -p 8083:8080 luiscdano/devops-e2-s13-hola-mundo:2026.03.25
curl -fsS http://127.0.0.1:8083/
curl -fsS http://127.0.0.1:8083/health
docker rm -f devops-e2-s13-hola
```

## Docker Hub
```bash
docker tag luiscdano/devops-e2-s13-hola-mundo:2026.03.25 luiscdano/devops-e2-s13-hola-mundo:latest
docker push luiscdano/devops-e2-s13-hola-mundo:2026.03.25
docker push luiscdano/devops-e2-s13-hola-mundo:latest
```

Resultado publicado:
- Repo: `https://hub.docker.com/r/luiscdano/devops-e2-s13-hola-mundo`
- Digest: `sha256:58cbf272e982227bf9996cc695c282c3b97917643201ff3bdac76fb903fb6890`

## Evidencia
- `docs/assets/evidencia-s13-dockerhub.txt`
- `docs/evidencias-s13.html`
