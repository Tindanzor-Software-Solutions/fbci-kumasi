import { type NextRequest, NextResponse } from "next/server"
import { AUTH_PATHS, authGuard } from "./features/auth"

export const matcher = AUTH_PATHS

export default async function proxy(request: NextRequest) {
  await authGuard.enforce(request.nextUrl.pathname, "server")

  return NextResponse.next()
}
