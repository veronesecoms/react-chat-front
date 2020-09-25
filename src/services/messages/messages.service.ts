import { IMessage } from './../../pages/home/ChatPanel/ChatPanel';
import api from "../api";
import { IMessagesSummary } from "../../pages/home/ChatPanel/ChatPanel";

const getSummaryMessages = async (): Promise<IMessagesSummary[]> => {
  const { data } = await api.get<IMessagesSummary[]>("/messages/summary");
  return data;
};

const getUserMessages = async(key: string, emailDestinatary: string): Promise<IMessage[]> => {
  const { data } = await api.get<IMessage[]>(`/messages/historic/${emailDestinatary}`);
  return data;
}

export { getSummaryMessages, getUserMessages };
