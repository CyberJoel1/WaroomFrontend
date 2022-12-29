// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ['/login/:path*', '/social/:path*','/register/:path*','/'],
};

export function middleware(request: NextRequest) {
  const jwt = request.cookies.get("token");

  if(!jwt){
    console.log('hola')
    if((request.nextUrl.pathname.startsWith('/login'))){
      console.log('aqui hola')
      return;
    }else if((request.nextUrl.pathname.startsWith('/register'))){
      console.log('aqui2 hola')
      return;
    } else {
      console.log('aqui3 hola')
      return NextResponse.redirect(new URL("/login", request.url));
    }
    
  }else{
    if ((request.nextUrl.pathname.startsWith('/'))) {
      return;
    }
  }

  // Clone the request headers and set a new header
  // that will be sent to the server `header-for-the-server`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("header-for-the-server", "hello server");

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header that you can inspect in the browser
  // `header-for-the-client`
  response.headers.set("header-for-the-client", "hello client");
  return response;
}
