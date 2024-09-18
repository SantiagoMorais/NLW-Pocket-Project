import { PendingGoals, PendingGoalsData } from "@interfaces/pendingGoalsTypes";

export const getPendingGoals = async (): Promise<PendingGoalsData> => {
  const response = await fetch("http://localhost:3333/pending-goals");
  const data: PendingGoals = await response.json();
  return data.pendingGoals;
};
