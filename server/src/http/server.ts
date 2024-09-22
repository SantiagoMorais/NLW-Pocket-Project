import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "./routes/create-goal";
import { getPedingGoalsRoute } from "./routes/get-pending-goals";
import { createCompletionRoute } from "./routes/create-completion";
import { getWeekSummaryRoute } from "./routes/get-week-summary";
import fastifyCors from "@fastify/cors";
import { deleteGoalRoute } from "./routes/delete-goal";
import { deleteGoalCompletionRoute } from "./routes/delete-goal-completion";
import { editGoalRoute } from "./routes/edit-goal";

const app = fastify().withTypeProvider<ZodTypeProvider>();
const port: number = 3333;

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: "*",
});

app.register(createGoalRoute);
app.register(getPedingGoalsRoute);
app.register(createCompletionRoute);
app.register(getWeekSummaryRoute);
app.register(deleteGoalRoute);
app.register(deleteGoalCompletionRoute);
app.register(editGoalRoute);

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP server running on http://localhost:${port}`);
  });
