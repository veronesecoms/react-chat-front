import React, { useState, createContext, useContext } from 'react';

export const SocketContext = createContext({});

export default function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [roomId, setRoomId] = useState<number | null>(null);

  return (
    <SocketContext.Provider value={{ socket, setSocket, roomId, setRoomId }}>
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  const context: any = useContext(SocketContext);
  if (!context)
    throw new Error('useSocket must be used within a SocketContextProvider');
  const { socket, setSocket, roomId, setRoomId } = context;
  return { socket, setSocket, roomId, setRoomId };
}
