const http = require("node:http");

const host = "0.0.0.0";
const port = Number.parseInt(process.env.PORT || "8080", 10);

const requestHandler = (request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ status: "ok", week: "S13", service: "hola-mundo-prod" }));
    return;
  }

  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(`<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>DevOps.E2 · S13</title>
    <style>
      body { font-family: -apple-system, Segoe UI, Roboto, sans-serif; margin: 0; min-height: 100vh; display: grid; place-items: center; background: linear-gradient(140deg, #0e1a3f, #132a6b 45%, #173f8f); color: #f6fbff; }
      main { width: min(92vw, 700px); border: 1px solid rgba(255,255,255,.2); border-radius: 14px; padding: 28px; background: rgba(12, 18, 45, .65); box-shadow: 0 16px 44px rgba(0,0,0,.28); }
      h1 { margin: 0 0 10px; font-size: 2rem; }
      p { margin: 0 0 10px; line-height: 1.5; }
      code { background: rgba(255,255,255,.12); border-radius: 7px; padding: 2px 8px; }
    </style>
  </head>
  <body>
    <main>
      <h1>Hola Mundo desde Producción</h1>
      <p>Semana <code>S13</code> · Despliegue a Producción · DevOps.E2</p>
      <p>Servicio ejecutándose en contenedor Docker.</p>
    </main>
  </body>
</html>`);
};

http.createServer(requestHandler).listen(port, host, () => {
  // Mensaje visible en logs del contenedor para validación rápida.
  console.log(`S13 app escuchando en http://${host}:${port}`);
});
