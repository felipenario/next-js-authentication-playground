import {
  IronSessionData,
  defaultSession,
  ironSessionOptions,
} from "@/app/lib/iron-session";
import { UserCredentials } from "@/app/types/user-credentials";
import { isTokenCloseToExpire } from "@/app/utils/isTokenCloseToExpire";
import { IronSession, sealData } from "iron-session";
import { NextResponse } from "next/server";

export const updateCookie = async (
  session: IronSession<IronSessionData>,
  response: NextResponse
): Promise<NextResponse<unknown>> => {
  const isAccessTokenCloseToExpire = isTokenCloseToExpire(
    session.accessToken,
    55
  );

  if (isAccessTokenCloseToExpire) {
    const refreshRes = await fetch(
      `${process.env.NEXT_NEST_JS_SERVICE_URL}/auth/refresh-session`,
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

      const sealedSession = await sealData(session, ironSessionOptions);

      response.cookies.set("session", sealedSession);

      return response;
    }

    const typedBody = body as UserCredentials;

    session.accessToken = typedBody.accessToken;
    session.refreshToken = typedBody.refreshToken;
    session.isLoggedIn = true;

    const sealedRefreshedSession = await sealData(session, ironSessionOptions);

    response.cookies.set("session", sealedRefreshedSession);

    return response;
  }

  return NextResponse.next();
};
