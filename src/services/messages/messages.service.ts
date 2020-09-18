import api from "../api";
import { IMessagesSummary } from "../../pages/home/ChatPanel/ChatPanel";

const getSummaryMessages = async (): Promise<IMessagesSummary[]> => {
  const { data } = await api.get<IMessagesSummary[]>("/messages/summary");
  return data;
};

export { getSummaryMessages };
