import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

type NextRequestCustom = NextRequest & NextApiRequest;

export async function middleware(req: NextRequestCustom) {
  // Token will exist if the user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET ?? "" });

  const { pathname, origin  } = req.nextUrl;

  if (pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session)
      return NextResponse.rewrite(`${origin}/login`)

    // If user is authenticated, continue.
  }
}
