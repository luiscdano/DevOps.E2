const test = require("node:test");
const assert = require("node:assert/strict");

const { createServer } = require("./server");

function listen(server) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      resolve(server.address().port);
    });
  });
}

function close(server) {
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

test("GET / devuelve HTML con mensaje Hola Mundo", async () => {
  const server = createServer();
  const port = await listen(server);

  try {
    const response = await fetch(`http://127.0.0.1:${port}/`);
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(body, /Hola Mundo desde Producción/u);
    assert.match(response.headers.get("content-type") || "", /text\/html/u);
  } finally {
    await close(server);
  }
});

test("GET /health devuelve estado JSON ok", async () => {
  const server = createServer();
  const port = await listen(server);

  try {
    const response = await fetch(`http://127.0.0.1:${port}/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(body, {
      status: "ok",
      week: "S13",
      service: "hola-mundo-prod"
    });
    assert.match(response.headers.get("content-type") || "", /application\/json/u);
  } finally {
    await close(server);
  }
});
