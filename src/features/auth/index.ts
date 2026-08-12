import { createAuthClient } from "@tindanzor/auth-client"
import { publicUrls } from "@/config/publicUrls"
import { apiRoutes, routes } from "@/shared/routes"
import type { UserAccountType } from "../user"
import type { LoginProps, SignupProps } from "./auth.contract.types"
import {
  getCookie,
  redirectAfterAuthentication,
  redirectToSigin,
} from "./auth.server"

export const AUTH_PATHS = [
  routes.auth.login,
  routes.auth.signup,
  routes.auth.forgotPassword,
  routes.auth.resetPassword,
]

export const PROTECTED_PATHS = [routes.dashboard.home]

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
    isAuthenticatedServer: () => getCookie(),
    onAuthenticated: () => redirectAfterAuthentication(),
    onUnauthenticated: () => redirectToSigin(),
  },
)
