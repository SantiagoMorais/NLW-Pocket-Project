import fastify from "fastify";

const app = fastify();
const port: number = 3333;

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${port}`);
  });
