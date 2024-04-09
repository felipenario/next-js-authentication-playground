"use server";

import {
  IronSessionData,
  defaultSession,
  ironSessionOptions,
} from "@/app/lib/iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function getSession() {
  const session = await getIronSession<IronSessionData>(
    cookies(),
    ironSessionOptions
  );

  if (!session.isLoggedIn) {
    session.accessToken = defaultSession.accessToken;
    session.refreshToken = defaultSession.refreshToken;
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return {
    accessToken: session.accessToken,
    refreshToken: session.refreshToken,
    isLoggedIn: session.isLoggedIn,
  };
}
