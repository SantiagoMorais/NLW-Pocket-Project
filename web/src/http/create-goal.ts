import { ICreateGoalRequest } from "@interfaces/createGoalRequest";

export const createGoal = async ({
  title,
  desiredWeeklyFrequency,
}: ICreateGoalRequest) => {
  await fetch("http://localhost:3333/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  });
};
