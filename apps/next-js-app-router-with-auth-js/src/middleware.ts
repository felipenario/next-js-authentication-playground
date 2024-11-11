import { refreshSession } from "@/app/features/auth/api/refresh-session";
import { encode, getToken } from "next-auth/jwt";
import { isJwtCloseToExpire } from "@/app/utils/is-jwt-close-to-expire";
import { NextRequest, NextResponse } from "next/server";
import { applySetCookie } from "@/app/features/auth/utils/apply-set-cookie";

function signOut(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/sign-in", request.url));

  request.cookies.getAll().forEach((cookie) => {
    if (cookie.name.includes("authjs.session-token"))
      response.cookies.delete(cookie.name);
  });

  applySetCookie(request, response);

  return response;
}

export async function middleware(request: NextRequest) {
  const secureSession = request.nextUrl.protocol === "https:";

  const sessionCookie = secureSession
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";

  const session = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET!,
    salt: sessionCookie,
  });

  if (!session && request.nextUrl.pathname !== "/sign-in") {
    return signOut(request);
  }

  const response = NextResponse.next();

  if (session && isJwtCloseToExpire(session.accessToken, 55)) {
    try {
      const { accessToken, refreshToken } = await refreshSession({
        accessToken: session.accessToken,
        refreshToken: session.refreshToken,
      });

      const encodedSession = await encode({
        secret: process.env.AUTH_SECRET!,
        token: {
          ...session,
          accessToken,
          refreshToken,
        },
        maxAge: 30 * 24 * 60 * 60,
        salt: sessionCookie,
      });

      response.cookies.set(sessionCookie, encodedSession);

      applySetCookie(request, response);

      return response;
    } catch {
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
