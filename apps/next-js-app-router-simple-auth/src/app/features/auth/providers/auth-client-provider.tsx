import { defaultSession, IronSessionData } from "@/app/lib/iron-session";
import React, { createContext } from "react";

export const AuthContext = createContext<IronSessionData>(defaultSession);

export const AuthClientProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: IronSessionData;
}) => {
  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
};
