import { refreshSession } from "@/app/features/auth/api/refresh-session";
import { applySetCookie } from "@/app/features/auth/utils/apply-set-cookie";
import {
  defaultSession,
  ironSessionCookieName,
  IronSessionData,
  ironSessionOptions,
} from "@/app/lib/iron-session";
import { isJwtCloseToExpire } from "@/app/utils/is-jwt-close-to-expire";
import { getIronSession, sealData } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function signOut(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/sign-in", request.url));

  const sealedDefaultSession = await sealData(
    defaultSession,
    ironSessionOptions
  );

  response.cookies.set(ironSessionCookieName, sealedDefaultSession);

  applySetCookie(request, response);

  return response;
}

export async function middleware(request: NextRequest) {
  const session = await getIronSession<IronSessionData>(
    cookies(),
    ironSessionOptions
  );

  if (!session.isLoggedIn && request.nextUrl.pathname !== "/sign-in") {
    return signOut(request);
  }

  const response = NextResponse.next();

  if (session.isLoggedIn && isJwtCloseToExpire(session.accessToken, 55)) {
    try {
      const { accessToken, refreshToken } = await refreshSession({
        accessToken: session.accessToken,
        refreshToken: session.refreshToken,
      });

      const encodedSession = await sealData(
        {
          accessToken,
          refreshToken,
          isLoggedIn: true,
        },
        {
          password: process.env.NEXT_IRON_SESSION_COOKIE_PASSWORD!,
        }
      );

      response.cookies.set(ironSessionCookieName, encodedSession);

      applySetCookie(request, response);

      console.log("refrescou");

      return response;
    } catch (e) {
      console.log(e);
      return signOut(request);
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api(?!/auth/session)|_next/static|_next/image|favicon.ico).*)",
  ],
};
