import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Nonce-based CSP: wygenerowany raz na żądanie, doklejany do wewnętrznych
// skryptów Next.js (odczytywany automatycznie z nagłówka odpowiedzi) oraz do
// własnych skryptów inline poprzez nagłówek x-nonce odczytywany w komponentach serwerowych.
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const contentSecurityPolicy = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", contentSecurityPolicy);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", contentSecurityPolicy);

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
