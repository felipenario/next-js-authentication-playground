"use server";

import { SignInActionState } from "@/app/(auth)/sign-in/types/sign-in-action-state";
import { IronSessionData, ironSessionOptions } from "@/app/lib/iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(
  state: SignInActionState | null,
  formData: FormData
): Promise<SignInActionState> {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (data.email === "") {
    return {
      error: true,
      message: "Type a email",
    };
  }

  if (data.password === "") {
    return {
      error: true,
      message: "Type a password",
    };
  }

  const signInRes = await fetch(
    `${process.env.NEXT_NEST_JS_SERVICE_URL}/auth/sign-in`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }
  );

  const signInData = await signInRes.json();

  if (!signInRes.ok) {
    return {
      error: true,
      message: signInData.message,
    };
  }

  const session = await getIronSession<IronSessionData>(
    cookies(),
    ironSessionOptions
  );

  session.accessToken = signInData.accessToken;
  session.refreshToken = signInData.refreshToken;
  session.isLoggedIn = true;

  await session.save();

  redirect("/");
}
