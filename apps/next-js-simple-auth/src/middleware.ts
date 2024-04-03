import { withSessionValidation } from "@/app/(auth)/middlewares/withSessionValidation";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return withSessionValidation(request);
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
