import fastify from "fastify";
import { createGoal } from "@functions/create-goal";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import z from "zod";
import { getWeekPendingGoals } from "@functions/get-week-pending-goals";

const app = fastify().withTypeProvider<ZodTypeProvider>();
const port: number = 3333;

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/pending-goals", async () => {
  const { pendingGoals } = await getWeekPendingGoals();

  return { pendingGoals };
});

app.post(
  "/goals",
  {
    schema: {
      body: z.object({
        title: z.string(),
        desiredWeeklyFrequency: z.number().int().min(1).max(7),
      }),
    },
  },
  async (request) => {
    const { desiredWeeklyFrequency, title } = request.body;

    await createGoal({
      title,
      desiredWeeklyFrequency,
    });
  }
);

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${port}`);
  });
