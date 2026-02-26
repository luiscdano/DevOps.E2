const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

const port = Number(process.env.PORT || 3000);
const dbConfig = {
  host: process.env.DB_HOST || "mysql",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "devops",
  password: process.env.DB_PASSWORD || "devops123",
  database: process.env.DB_NAME || "devopse2"
};

const pool = mysql.createPool({
  ...dbConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function waitForDatabase(maxAttempts = 30, intervalMs = 2000) {
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const connection = await pool.getConnection();
      await connection.query("SELECT 1 AS ok");
      connection.release();
      console.log(`MySQL listo en intento ${attempt}.`);
      return;
    } catch (error) {
      console.log(`Esperando MySQL (intento ${attempt}/${maxAttempts}): ${error.message}`);
      await sleep(intervalMs);
    }
  }

  throw new Error("No fue posible conectar a MySQL dentro del tiempo esperado.");
}

app.get("/", async (_request, response) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS db_time");
    const dbTime = rows?.[0]?.db_time;

    response.status(200).send(`
      <!doctype html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Semana 7 - DevOps.E2</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 2rem; background: #f8fafc; color: #0f172a; }
            .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1.25rem; max-width: 720px; }
            h1 { margin-top: 0; }
            code { background: #f1f5f9; padding: 0.1rem 0.35rem; border-radius: 6px; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>Hola mundo desde la Semana 7</h1>
            <p>Aplicacion web ejecutandose en Docker Compose y conectada a MySQL.</p>
            <p><strong>DB Host:</strong> <code>${dbConfig.host}:${dbConfig.port}</code></p>
            <p><strong>DB Name:</strong> <code>${dbConfig.database}</code></p>
            <p><strong>Hora en MySQL:</strong> <code>${dbTime}</code></p>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    response.status(500).send(`
      <h1>Error de conexion a MySQL</h1>
      <p>${error.message}</p>
    `);
  }
});

app.get("/healthz", async (_request, response) => {
  try {
    await pool.query("SELECT 1 AS ok");
    response.json({
      status: "ok",
      database: "connected"
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      database: "disconnected",
      message: error.message
    });
  }
});

waitForDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`App S7 escuchando en puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
