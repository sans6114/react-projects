import { heroApi } from "../api/hero.api";
import type { SummaryInformationResponse } from "../interfaces/get-summary-response";

export const getSummaryAction =
  async (): Promise<SummaryInformationResponse> => {
    const { data } = await heroApi.get("/summary");
    return data;
  };
