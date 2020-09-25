import React, { useState, createContext, useContext } from "react";
import { IMessage } from "../pages/home/ChatPanel/ChatPanel";

export const MessagesContext = createContext({});

export default function MessageProvider({ children }) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessages() {
  const context: any = useContext(MessagesContext);
  if (!context)
    throw new Error("useMessages must be used within a MessageProvider");
  const { messages, setMessages } = context;
  return { messages, setMessages };
}
