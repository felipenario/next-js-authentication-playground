import { IronSessionData, ironSessionOptions } from "@/lib/iron-session";
import { updateCookie } from "@/utils/updateCookie";
import { getIronSession } from "iron-session";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const session = await getIronSession<IronSessionData>(
    req,
    res,
    ironSessionOptions
  );

  if (session.isLoggedIn) {
    await updateCookie(req, res);
  }

  if (!session.isLoggedIn && req.nextUrl.pathname !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (session.isLoggedIn && req.nextUrl.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/", req.url), {
      headers: res.headers,
    });
  }

  return res;
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
