import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { CreateProjectPage } from "@/screens/dashboard"

export const metadaata: Metadata = generateMetaData({
  title: "Create Project",
  description: "Create a new FBCI project",
  path: "dashboard/projects/new",
})

export default CreateProjectPage
