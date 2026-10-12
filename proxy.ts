import { NextResponse, type NextRequest } from "next/server";

// The partner price sheet (/consulting/partners) shows wholesale prices and partner margins, so it
// sits behind a password: the browser's own sign-in prompt (HTTP Basic). Any username works; the
// password is the PARTNERS_PASSWORD environment variable, set in Vercel and never in the code.
// With no password configured the page stays locked.

const REALM = 'Basic realm="OER Consulting partners", charset="UTF-8"';

function sameText(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function locked(message: string, status: number) {
  return new NextResponse(message, {
    status,
    headers: {
      ...(status === 401 ? { "WWW-Authenticate": REALM } : {}),
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export function proxy(request: NextRequest) {
  const expected = process.env.PARTNERS_PASSWORD;
  if (!expected) return locked("This page isn't available yet.", 503);

  const header = request.headers.get("authorization") ?? "";
  if (header.startsWith("Basic ")) {
    let decoded = "";
    try {
      decoded = atob(header.slice(6));
    } catch {
      decoded = "";
    }
    const password = decoded.slice(decoded.indexOf(":") + 1);
    if (decoded.includes(":") && sameText(password, expected)) {
      const res = NextResponse.next();
      res.headers.set("Cache-Control", "private, no-store");
      res.headers.set("X-Robots-Tag", "noindex, nofollow");
      return res;
    }
  }
  return locked("Partner password required.", 401);
}

export const config = {
  matcher: ["/consulting/partners", "/consulting/partners/:path*"],
};
