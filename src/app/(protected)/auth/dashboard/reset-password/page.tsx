import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { ResetPasswordPage } from "@/screens/auth"

export const metadata: Metadata = generateMetaData({
  title: "Reset Password",
  description: "Set a new password for your FBCI account.",
  path: "auth/dashboard/reset-password",
})

export default ResetPasswordPage
