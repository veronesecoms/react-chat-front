import api from '../api';

export interface IRoomInterface {
  roomId: number;
}

const getRoomId = async (
  key: string,
  emailDestinatary: string
): Promise<number | null> => {
  const { data } = await api.get<IRoomInterface>(`/rooms/${emailDestinatary}`);
  return data.roomId;
};

const createRoom = async (email: string | null): Promise<number> => {
  const { data } = await api.post('/rooms', { email: email });
  return data.roomId;
};

export { getRoomId, createRoom };
