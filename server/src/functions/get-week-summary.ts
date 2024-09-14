import { db } from "@db/index";
import { goalCompletions, goals } from "@db/schema";
import dayjs from "dayjs";
import { between, count, eq, sql } from "drizzle-orm";

export const getWeekSummary = async () => {
  const firstDayOfTheWeek = dayjs().startOf("week").toDate();
  const lastDayOfTheWeek = dayjs().endOf("week").toDate();

  const goalsCreatedUpToWeek = db.$with("goals_created_up_to_week").as(
    db
      .select({
        id: goals.id,
        title: goals.title,
        desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
        createdAt: goals.createdAt,
      })
      .from(goals)
      .where(between(goals.createdAt, firstDayOfTheWeek, lastDayOfTheWeek))
  );

  const goalsCompletedInWeek = db.$with("goal_completion_counts").as(
    db
      .select({
        id: goalCompletions.id,
        title: goals.title,
        completedAt: goalCompletions.createdAt,
        completedAtDate: sql/* sql */ `
            DATE(${goalCompletions.createdAt})
        `.as("completedAtDate"),
      })
      .from(goalCompletions)
      .innerJoin(goals, eq(goals.id, goalCompletions.goalId))
      .where(
        between(goalCompletions.createdAt, firstDayOfTheWeek, lastDayOfTheWeek)
      )
  );

  const goalsCompletedByWeekDay = db.$with("goals_completed_by_week_day").as(
    db
      .select({
        completedAtDate: goalsCompletedInWeek.completedAtDate,
        completions: sql/* sql */ `
            JSON_AGG(
                JSON_BUILD_OBJECT(
                    'id', ${goalsCompletedInWeek.id},
                    'title', ${goalsCompletedInWeek.title},
                    'completedAt', ${goalsCompletedInWeek.completedAt}
                )
            )
        `.as("completions"),
      })
      .from(goalsCompletedInWeek)
      .groupBy(goalsCompletedInWeek.completedAtDate)
  );
  // o JSON_AGG pega um retorno do postgres e converte em um array
  // o JSON_BUILD_OBJET vai criar os objetos que ficarão dentro do array

  const result = await db
    .with(goalsCreatedUpToWeek, goalsCompletedInWeek, goalsCompletedByWeekDay)
    .select({
      completed: sql/*sql*/ `
            (SELECT COUNT(*) FROM ${goalsCompletedInWeek})
        `.mapWith(Number),
      total: sql/* sql */ `
            (SELECT SUM(${goalsCreatedUpToWeek.desiredWeeklyFrequency}) FROM ${goalsCreatedUpToWeek})
        `.mapWith(Number),
      goalsPerDay: sql/* sql */ `
            JSON_OBJECT_AGG(
                ${goalsCompletedByWeekDay.completedAtDate},
                ${goalsCompletedByWeekDay.completions}
            )
        `,
    })
    .from(goalsCompletedByWeekDay);

  return {
    summary: result,
  };
};