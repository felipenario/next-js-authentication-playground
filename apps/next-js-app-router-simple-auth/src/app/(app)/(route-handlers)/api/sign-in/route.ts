import { IronSessionData, ironSessionOptions } from "@/app/lib/iron-session";
import * as cookie from "cookie";
import { getIronSession } from "iron-session";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

const { parse: parseCookie, serialize: serializeCookie } = cookie;

export async function POST(request: Request) {
  const res = await request.json();

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
    return NextResponse.json({ message: "Error when loggin" }, { status: 400 });
  }

  // const cookies = parseCookie(request.headers.get("cookie") ?? "");

  // const headers = new Headers(request.headers);

  // cookies["access-token"] = signInData.accessToken;

  // Object.entries(cookies).forEach(([cookieName, cookieValue]) => {
  //   const serializedCookie = serializeCookie(cookieName, cookieValue ?? "");

  //   if (headers.has("Set-Cookie")) {
  //     headers.append("Set-Cookie", serializedCookie);
  //   } else {
  //     headers.set("Set-Cookie", serializedCookie);
  //   }
  // });

  // const url = headers.get("location");

  // const session = await getIronSession<IronSessionData>(
  //   cookies(),
  //   ironSessionOptions
  // );

  // session.accessToken = signInData.accessToken;
  // session.refreshToken = signInData.refreshToken;
  // session.isLoggedIn = true;

  // await session.save();

  // const response = Response.json({}, { status: 201 });

  // console.log(response.headers);

  const cookiesStore = cookies();

  cookiesStore.set("teste2", "value", {
    httpOnly: true,
    path: "/",
  });

  const response = NextResponse.json({ message: "Logged In" });

  response.cookies.set("access-token", signInData.accessToken, {
    httpOnly: true,
    path: "/",
  });

  response.cookies.set("refresh-token", signInData.refreshToken, {
    httpOnly: true,
    path: "/",
  });

  console.log(response);

  return response;
}
