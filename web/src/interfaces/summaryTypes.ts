export type ISummaryData = {
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
  
  export type ISummary = {
    summary: ISummaryData;
  };
  