import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { SignUpPage } from "@/screens/auth"

export const metadata: Metadata = generateMetaData({
  title: "Sign Up",
  description: "Create a FBCI account.",
  path: "auth/dashboard/signup",
})

export default SignUpPage
