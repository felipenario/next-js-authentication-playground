"use server";

import { SignInActionState } from "@/app/features/auth/types/sign-in-action-state";
import { IronSessionData, ironSessionOptions } from "@/app/lib/iron-session";
import { getIronSession } from "iron-session";
import { cookies, headers } from "next/headers";
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

  const nextHeaders = headers();

  const myHeaders = new Headers(nextHeaders);

  const signInRes = await fetch(`${process.env.NEXT_URL}/api/sign-in`, {
    credentials: "include",
    method: "POST",
    headers: {
      ...myHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  const signInData = await signInRes.json();

  if (!signInRes.ok) {
    return {
      error: true,
      message: signInData.message,
    };
  }

  console.log(signInRes.headers.getSetCookie());

  const cookiesStore = cookies();

  cookiesStore.set("teste", "value", {
    httpOnly: true,
    path: "/",
  });

  // const session = await getIronSession<IronSessionData>(
  //   cookies(),
  //   ironSessionOptions
  // );

  // session.accessToken = signInData.accessToken;
  // session.refreshToken = signInData.refreshToken;
  // session.isLoggedIn = true;

  // await session.save();

  // redirect("/");
}
