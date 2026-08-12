"use client"

import { createAuthClient } from "@tindanzor/auth-client"
import { publicUrls } from "@/config/publicUrls"
import { apiRoutes, routes } from "@/shared/routes"
import type { UserAccountType } from "../user"
import type { LoginProps, SignupProps } from "./auth.contract.types"
import { AUTH_PATHS, PROTECTED_PATHS } from "./auth.server"

export type * from "./auth.contract.types"
export * from "./auth.validators"
export const {
  useAuthRefresh,
  useAuthStore,
  useAuthService,
  useLogout,
  useSignup,
  useSignin,
  usePasswordReset,
  useRequestPasswordReset,
  useUserStore,
  authGuard,
} = createAuthClient<UserAccountType, LoginProps, SignupProps>(
  {
    baseUrl: publicUrls.serverUri,
    endpoints: {
      login: apiRoutes.auth.login,
      logout: apiRoutes.auth.logout,
      refresh: apiRoutes.auth.refresh,
      register: apiRoutes.auth.signup,
      resetPassword: apiRoutes.auth.resetPassword,
      requestPasswordReset: {
        ...apiRoutes.auth.forgotPassword,
        resetPageDetails: {
          url: `${publicUrls.appUrl}${routes.auth.resetPassword}`,
          queryName: "access",
        },
      },
    },
  },
  {
    protectedPaths: PROTECTED_PATHS,
    authPaths: AUTH_PATHS,
    onAuthenticated: () => null,
    onUnauthenticated: () => null,
  },
)
