import type { Metadata } from "next"
import { projectListQuery } from "@/features/project"
import { generateMetaData } from "@/libs/next"
import { ProjectsPage } from "@/screens/projects"
import { HydrationProvider } from "@/shared/ui/HydationProvider"

export const revalidate = 7_200

export const metadata: Metadata = generateMetaData({
  title: "Projects",
  description:
    "Join FBCI's ongoing missions and community projects making a global impact.",
  path: "projects",
})

export default async function PageComponent() {
  return (
    <HydrationProvider
      queries={[{ type: "query", queryOptions: projectListQuery() }]}
    >
      <ProjectsPage />
    </HydrationProvider>
  )
}
