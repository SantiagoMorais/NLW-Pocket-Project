import fastify from "fastify";
import { createGoal } from "@functions/create-goal";

const app = fastify();
const port: number = 3333;

app.post("/goal", async (request) => {
  const body = request.body;

  await createGoal;
});

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${port}`);
  });
