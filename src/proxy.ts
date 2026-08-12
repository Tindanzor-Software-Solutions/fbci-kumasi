import { type NextRequest, NextResponse } from "next/server"
import { AuthRedirectError } from "./features/auth/auth.error"
import { routes } from "./shared/routes"

const AUTH_PATHS = [routes.auth.login, routes.auth.signup]

const PROTECTED_PATHS = [routes.dashboard.home]

export const config = {
  matcher: ["/dashboard/:path*", "/auth/dashboard/:path"],
}

export default async function proxy(request: NextRequest) {
  const gotoDest = (path: string) => new URL(path, request.url)

  try {
    await authGuard.enforce(
      request.nextUrl.pathname,
      request.cookies.get("fbci_auth")?.value,
    )

    return NextResponse.next()
  } catch (error) {
    if (error instanceof AuthRedirectError) {
      return NextResponse.redirect(gotoDest(error.destination))
    }
  }

  return NextResponse.next()
}

const authGuard = {
  assertAuthenticated: (pathname: string, isLoggedIn: boolean) => {
    const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p))

    if (isProtected && !isLoggedIn)
      throw new AuthRedirectError(
        "You are not authenticated",
        routes.auth.login,
      )
  },
  assertNotAuthenticated: (pathname: string, isLoggedIn: boolean) => {
    const isAuthPage = AUTH_PATHS.some((p) => pathname.startsWith(p))

    if (isAuthPage && isLoggedIn)
      throw new AuthRedirectError(
        "You are already authenticated",
        routes.dashboard.home,
      )
  },

  async enforce(pathname: string, auth: string | null | undefined) {
    const isLoggedIn = !!auth

    this.assertNotAuthenticated(pathname, isLoggedIn)
    this.assertAuthenticated(pathname, isLoggedIn)
  },
}
