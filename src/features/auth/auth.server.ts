"use server"

import { routes } from "@/shared/routes"

export const AUTH_PATHS = [
  routes.auth.login,
  routes.auth.signup,
  routes.auth.forgotPassword,
  routes.auth.resetPassword,
]

export const PROTECTED_PATHS = [routes.dashboard.home]
