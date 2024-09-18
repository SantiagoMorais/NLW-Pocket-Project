import { CreateGoal } from "@components/create-goal";
import { EmptyGoals } from "@components/empty-goals";
import { Summary } from "@components/summary";
import { Dialog } from "@components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { SummaryData } from "@interfaces/summaryTypes";
import { getSummary } from "http/get-summary";

export function App() {
  const { data } = useQuery<SummaryData>({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60 // 60 seconds
  });

  return (
    <Dialog>
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}
