import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { SignInPage } from "@/screens/auth"

export const metadata: Metadata = generateMetaData({
  title: "Sign In",
  description: "Sign in to your FBCI account.",
  path: "auth/dashboard/signin",
})

export default SignInPage
