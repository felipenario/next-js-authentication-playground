import {
  IronSessionData,
  defaultSession,
  ironSessionOptions,
} from "@/lib/iron-session";
import { UserCredentials } from "@/types/user-credentials";
import { isTokenCloseToExpire } from "@/utils/isTokenCloseToExpire";
import { getIronSession } from "iron-session";
import { NextRequest, NextResponse } from "next/server";

export const updateCookie = async (
  request: NextRequest,
  response: NextResponse
): Promise<NextResponse<unknown>> => {
  const session = await getIronSession<IronSessionData>(
    request,
    response,
    ironSessionOptions
  );

  if (session.isLoggedIn) {
    const isAccessTokenCloseToExpire = isTokenCloseToExpire(
      session.accessToken,
      55
    );

    if (isAccessTokenCloseToExpire) {
      const refreshRes = await fetch(
        `${process.env.NEXT_PUBLIC_NEST_JS_SERVICE_URL}/auth/refresh-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken: session.accessToken,
            refreshToken: session.refreshToken,
          }),
        }
      );

      const body = await refreshRes.json();

      if (!refreshRes.ok) {
        session.accessToken = defaultSession.accessToken;
        session.refreshToken = defaultSession.refreshToken;
        session.isLoggedIn = defaultSession.isLoggedIn;

        await session.save();

        return NextResponse.redirect(new URL("/sign-in", request.url));
      }

      const typedBody = body as UserCredentials;

      session.accessToken = typedBody.accessToken;
      session.refreshToken = typedBody.refreshToken;
      session.isLoggedIn = true;

      await session.save();

      return response;
    }
  }

  return response;
};
