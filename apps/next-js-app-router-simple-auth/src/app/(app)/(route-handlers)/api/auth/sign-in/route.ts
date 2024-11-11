import { IronSessionData, ironSessionOptions } from "@/app/lib/iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();

  const response = await fetch("http://localhost:8000/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: body.email,
      password: body.password,
    }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw {
      message: "Error when signing in",
    };
  }

  const session = await getIronSession<IronSessionData>(
    cookies(),
    ironSessionOptions
  );

  session.accessToken = responseBody.accessToken;
  session.refreshToken = responseBody.refreshToken;
  session.isLoggedIn = true;

  await session.save();

  return Response.json({ message: "Signed in" }, { status: 201 });
}
