import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res: {
    email: string;
    password: string;
  } = await request.json();

  const signInRes = await fetch(
    `${process.env.NEXT_NEST_JS_SERVICE_URL}/auth/sign-in`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: res.email,
        password: res.password,
      }),
    }
  );

  const signInData = await signInRes.json();

  if (!signInRes.ok) {
    return Response.json(
      { message: "Incorrect email or password!" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ status: 200 });

  response.cookies.set({
    name: "access-token",
    value: signInData.accessToken,
    httpOnly: true,
  });

  response.cookies.set({
    name: "refresh-token",
    value: signInData.refreshToken,
    httpOnly: true,
  });

  return response;
}
