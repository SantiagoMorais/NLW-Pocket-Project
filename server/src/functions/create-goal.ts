import { db } from "../db";
import { goals } from "../db/schema";

interface ICreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}

export const createGoal = async ({
  title,
  desiredWeeklyFrequency,
}: ICreateGoalRequest) => {
  const result = await db
    .insert(goals)
    .values({
      title,
      desiredWeeklyFrequency,
    })
    .returning();
  // Preciso adicionar o returning(), pois, por padrão, os db's não retornam os dados inseridos, somente, no máximo, os dados afetados. 
  // Usando o returning eu consigo ter acesso a eles

  const goal = result[0];
  // A inserção de novos dados, por mais que adicionamos somente um, vai sempre retornar um array. 
  // Portanto precisamos colocar o index 0 para coletar o dado.

  return {
    goal,
  };
};