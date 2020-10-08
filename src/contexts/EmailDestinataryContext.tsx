import React, { useState, createContext, useContext } from 'react';

export const EmailDestinataryContext = createContext({});

export default function EmailDestinataryProvider({ children }) {
  const [emailDestinatary, setEmailDestinatary] = useState<string | null>(null);
  const [nameDestinatary, setNameDestinatary] = useState<string | null>(null);

  return (
    <EmailDestinataryContext.Provider
      value={{
        emailDestinatary,
        setEmailDestinatary,
        nameDestinatary,
        setNameDestinatary,
      }}
    >
      {children}
    </EmailDestinataryContext.Provider>
  );
}

export function useEmailDestinatary() {
  const context: any = useContext(EmailDestinataryContext);
  if (!context)
    throw new Error(
      'useEmailDestinatary must be used within a EmailDestinataryProvider'
    );
  const {
    emailDestinatary,
    setEmailDestinatary,
    nameDestinatary,
    setNameDestinatary,
  } = context;
  return {
    emailDestinatary,
    setEmailDestinatary,
    nameDestinatary,
    setNameDestinatary,
  };
}
