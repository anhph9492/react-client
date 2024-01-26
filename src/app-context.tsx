import React, { Dispatch, SetStateAction } from "react";
import { Socket, io } from "socket.io-client";

type CUserType = {
  email: string;
};

export type AppContextType = {
  cUser: CUserType | null;
  setCUser: AnyType;
  token: string | null;
  setToken: AnyType;
};

const init: AppContextType = {
  cUser: null,
  token: null,
  setCUser: null,
  setToken: null,
};

export const AppContext = React.createContext(init);

const AppContextHOC = ({ children }: { children: React.ReactNode }) => {
  

  const [cUser, setCUser] = React.useState<CUserType | null>(null);
  const [token, setToken] = React.useState<string | null>(null);

  return (
    <AppContext.Provider value={{ cUser, setCUser, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextHOC;
