import { CreateGoal } from "@components/create-goal";
import { EmptyGoals } from "@components/empty-goals";
import { Summary } from "@components/summary";
// import { EmptyGoals } from "@components/empty-goals";
import { Dialog } from "@components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type ISummaryData = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

type ISummary = {
  summary: ISummaryData;
};

export function App() {
  const { data } = useQuery<ISummaryData>({
    queryKey: ["summary"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/summary");
      const data: ISummary = await response.json();
      return data.summary;
    },
  });

  return (
    <Dialog>
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}
