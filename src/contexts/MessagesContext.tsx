import React, { useState, createContext, useContext, useEffect } from 'react';
import IMessage from '../interfaces/message.interface';

export const MessagesContext = createContext({});

export default function MessagesProvider({ children }) {
  const [messages, setMessages] = useState<IMessage[] | null>(null);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  const context: any = useContext(MessagesContext);
  if (!context)
    throw new Error('useMessages must be used within a MessageProvider');
  const { messages, setMessages } = context;
  return { messages, setMessages };
}
