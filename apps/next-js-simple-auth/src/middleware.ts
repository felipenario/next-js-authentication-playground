import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access-token")?.value;

  if (!accessToken && request.nextUrl.pathname !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", request.url));
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
