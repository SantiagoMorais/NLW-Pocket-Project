export type PendingGoalsData = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export type PendingGoals = {
  pendingGoals: PendingGoalsData;
};
