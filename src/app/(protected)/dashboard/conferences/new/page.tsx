import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { ConferencePage } from "@/screens/dashboard/conferences"

export const metadata: Metadata = generateMetaData({
  title: "Create Conference",
  description: "Create a new FBCI annual conference",
  path: "dashboard/conferences/new",
})

export default ConferencePage
