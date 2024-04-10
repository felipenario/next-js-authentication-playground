import {
  IronSessionData,
  ironSessionOptions,
} from "@/app/lib/iron-session";
import { updateCookie } from "@/app/utils/updateCookie";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await getIronSession<IronSessionData>(
    cookies(),
    ironSessionOptions
  );

  if (!session.isLoggedIn && request.nextUrl.pathname !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  let response = NextResponse.redirect(request.url);

  if (session.isLoggedIn) {
    return updateCookie(session, response);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
