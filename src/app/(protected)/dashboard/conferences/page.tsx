import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { ConferencePage } from "@/screens/dashboard/conferences"

export const medata: Metadata = generateMetaData({
  title: "Conferences",
  description: "Manage FBCI annual conferences",
  path: "dashboard/conferences",
})

export default ConferencePage
