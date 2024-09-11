import { defineConfig } from "drizzle-kit";
import { env } from "./src/env";

export default defineConfig({
  // preciso colocar aqui em schema onde está o meu schema do db
  schema: "./src/db/schema.ts",
  out: "./.migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
