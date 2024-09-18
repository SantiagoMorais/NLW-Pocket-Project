import { Summary, SummaryData } from "@interfaces/summaryTypes";

export const getSummary = async (): Promise<SummaryData> => {
  const response = await fetch("http://localhost:3333/summary");
  const data: Summary = await response.json();
  return data.summary;
};
