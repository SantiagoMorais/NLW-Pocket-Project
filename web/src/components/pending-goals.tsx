import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { useQuery } from "@tanstack/react-query";
import { PendingGoalsData } from "@interfaces/pendingGoalsTypes";
import { getPendingGoals } from "http/get-pending-goals";
import { createGoalCompletion } from "http/create-goal-completion";

export const PendingGoals = () => {
  const { data } = useQuery<PendingGoalsData>({
    queryKey: ["pendingGoal"],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, // 60 seconds
  });

  if (!data) return null;

  const handleCompleteGoal = async (goalId: string) => {
    await createGoalCompletion(goalId);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {data?.map((goal) => {
        const completedGoal =
          goal.completionCount >= goal.desiredWeeklyFrequency;
        return (
          <OutlineButton
            key={goal.id}
            disabled={completedGoal}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
};
