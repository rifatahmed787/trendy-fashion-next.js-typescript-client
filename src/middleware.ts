import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log("middleware@@@");
  let token = request?.cookies.get("token")?.value;
  console.log("@token", token);

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  let user;
  try {
    user = jwtDecode(token);  
  } catch (error) {
    console.error("Failed to decode token:", error);
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }
  
//   console.log("**user", user);
//   if (user?.role === "ADMIN") {
//     return NextResponse.next();
//   } else {
//     return NextResponse.redirect(new URL("/admin-login", request.url));
//   }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
