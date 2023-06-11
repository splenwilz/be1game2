import React, { createContext, useState } from "react";

export const UserContext = createContext({});

interface UserContextProviderProps {
  children: React.ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}



