import { CreateGoal } from "@components/create-goal";
import { EmptyGoals } from "@components/empty-goals";
import { Summary } from "@components/summary";
import { Dialog } from "@components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { ISummaryData } from "@utils/types";
import { getSummary } from "http/get-summary";

export function App() {
  const { data } = useQuery<ISummaryData>({
    queryKey: ["summary"],
    queryFn: getSummary,
  });

  return (
    <Dialog>
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}
