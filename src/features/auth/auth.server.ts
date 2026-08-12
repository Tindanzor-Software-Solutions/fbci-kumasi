"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { routes } from "@/shared/routes"

export async function getCookie() {
  const header = await headers()
  return !!header.get("fbci_auth")
}

export const redirectToSigin = () => {
  throw redirect(routes.auth.login)
}

export const redirectAfterAuthentication = () => {
  throw redirect(routes.dashboard.home)
}
