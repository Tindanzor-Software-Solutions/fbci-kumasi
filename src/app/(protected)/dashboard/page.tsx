import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { DashboardHomePage } from "@/screens/dashboard"

export const metadata: Metadata = generateMetaData({
  title: "Dashboard",
  description: "FBCI Admin Dashboard",
  path: "dashboard",
})

export default DashboardHomePage
