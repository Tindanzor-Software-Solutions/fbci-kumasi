import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { ProjectsListPage } from "@/screens/dashboard"

export const metadata: Metadata = generateMetaData({
  title: "Projects",
  description: "Manage FBCI projects",
  path: "dashboard/projects",
})
export default ProjectsListPage
