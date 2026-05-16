import { NextResponse, type NextRequest } from "next/server";

const canonicalHost = "acewang.top";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase() ?? "";
  const shouldRedirectVercelHost =
    process.env.VERCEL_ENV === "production" && host.endsWith(".vercel.app");
  const shouldRedirectWww = host === `www.${canonicalHost}`;

  if (shouldRedirectVercelHost || shouldRedirectWww) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = canonicalHost;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)$).*)"],
};
