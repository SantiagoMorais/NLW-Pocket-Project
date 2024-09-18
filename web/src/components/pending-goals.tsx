import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PendingGoalsData } from "@interfaces/pendingGoalsTypes";
import { getPendingGoals } from "http/get-pending-goals";
import { createGoalCompletion } from "http/create-goal-completion";

export const PendingGoals = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery<PendingGoalsData>({
    queryKey: ["pendingGoal"],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, // 60 seconds
  });

  if (!data) return null;

  const handleCompleteGoal = async (goalId: string) => {
    await createGoalCompletion(goalId);

    // quando passamos para o queryClient o id de uma query, ele faz essa query novamente. Funciona como um useEffect para atualizar a UI com os novos dados atualizados.
    queryClient.invalidateQueries({ queryKey: ["summary"] });
    queryClient.invalidateQueries({ queryKey: ["pendingGoal"] });
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
