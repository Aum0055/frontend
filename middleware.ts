import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const path = request.nextUrl.pathname;
 
  if (path != "/auth/sign-in") {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/auth/:path*", "/app/:path*"],
};
