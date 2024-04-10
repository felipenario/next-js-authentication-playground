"use server";

import { IronSessionData, ironSessionOptions } from "@/app/lib/iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async () => {
  const session = await getIronSession<IronSessionData>(
    cookies(),
    ironSessionOptions
  );

  session.destroy();

  redirect("/sign-in");
};
