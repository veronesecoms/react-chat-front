import api from '../api';
import IMessage from '../../interfaces/message.interface';
import IMessagesSummary from '../../interfaces/message-summary';
import { IMessageSave } from '../../pages/Home/ChatConversation/SendMessageInput/SendMessageInput';

const getSummaryMessages = async (): Promise<IMessagesSummary[]> => {
  const { data } = await api.get<IMessagesSummary[]>('/messages/summary');
  return data;
};

const getUserMessages = async (
  key: string,
  emailDestinatary: string
): Promise<IMessage[]> => {
  const { data } = await api.get<IMessage[]>(
    `/messages/historic/${emailDestinatary}`
  );
  return data;
};

const createMessage = async (messageObj: IMessageSave): Promise<IMessage> => {
  const { data } = await api.post<IMessage>('/messages', {
    messageObj,
  });
  return data;
};

export { getSummaryMessages, getUserMessages, createMessage };
