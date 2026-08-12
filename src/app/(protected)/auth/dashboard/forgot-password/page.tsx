import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { ForgotPasswordPage } from "@/screens/auth"

export const metadata: Metadata = generateMetaData({
  title: "Forgot Password",
  description: "Reset your FBCI account password.",
  path: "auth/dashboard/forgot-password",
})

export default ForgotPasswordPage
