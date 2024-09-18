import { ISummary, ISummaryData } from "@interfaces/summaryTypes";

export const getSummary = async (): Promise<ISummaryData> => {
  const response = await fetch("http://localhost:3333/summary");
  const data: ISummary = await response.json();
  return data.summary;
};
