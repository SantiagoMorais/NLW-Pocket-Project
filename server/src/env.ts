import z from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
// Basicamente verifico que essa variável env exista, caso não, gerará um erro. Assim posso utilizá-la no meu drizzle sem que gere erros, evitando que o env possa ser undefined.