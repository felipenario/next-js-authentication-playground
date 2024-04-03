import { UserCredentials } from "@/app/types/user-credentials";
import { isTokenCloseToExpire } from "@/app/utils/isTokenCloseToExpire";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function withSessionValidation(request: NextRequest) {
  const accessToken = cookies().get("access-token")?.value;
  const refreshToken = cookies().get("refresh-token")?.value;

  console.log({ accessToken });
  console.log({ refreshToken });

  if (request.nextUrl.pathname !== "/sign-in") {
    if (!accessToken || !refreshToken) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    const isCloseToExpire = isTokenCloseToExpire(accessToken, 55);

    console.log({ isCloseToExpire });

    if (isCloseToExpire) {
      const res = await fetch(
        `${process.env.NEXT_NEST_JS_SERVICE_URL}/auth/refresh-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken,
            refreshToken,
          }),
        }
      );

      const body = await res.json();

      console.log(body);

      if (!res.ok) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
      }

      const typedBody = body as UserCredentials;

      const cookieRes = await fetch(
        `${process.env.NEXT_URL}/api/refresh-session`,
        {
          method: "POST",
          headers: headers(),
          body: JSON.stringify({
            accessToken: typedBody.accessToken,
            refreshToken: typedBody.refreshToken,
          }),
        }
      );

      if (!cookieRes.ok) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
      }

      console.log("Token refrescado!");

      return NextResponse.next();
    }
  }

  return NextResponse.next();
}
