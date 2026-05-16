import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/i18n/routing";

const primaryHost = "hub.acezerotrading.com";
const backupHost = "acewang.top";
const handleI18nRouting = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase() ?? "";
  const shouldRedirectVercelHost =
    process.env.VERCEL_ENV === "production" && host.endsWith(".vercel.app");
  const shouldRedirectWwwPrimary = host === `www.${primaryHost}`;
  const shouldRedirectWwwBackup = host === `www.${backupHost}`;

  if (shouldRedirectVercelHost || shouldRedirectWwwPrimary || shouldRedirectWwwBackup) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = shouldRedirectWwwBackup ? backupHost : primaryHost;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
