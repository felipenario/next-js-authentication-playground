"use server";

import { SignInActionState } from "@/app/(auth)/sign-in/types/sign-in-action-state";
import { headers } from "next/headers";
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

  const signInRes = await fetch(`${process.env.NEXT_URL}/api/sign-in`, {
    method: "POST",
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

  redirect("/");
}
