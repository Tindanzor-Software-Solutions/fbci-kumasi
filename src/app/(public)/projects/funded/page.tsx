import type { Metadata } from "next"
import { projectListQuery } from "@/features/project"
import { generateMetaData } from "@/libs/next"
import { FundedProjectsPage } from "@/screens/projects"
import { HydrationProvider } from "@/shared/ui/HydationProvider"

export const revalidate = 7_200

export const metadata: Metadata = generateMetaData({
  title: "Funded Projects",
  description: "See the fully funded missions and community projects of FBCI.",
  path: "projects/funded",
})

export default async function PageComponent() {
  return (
    <HydrationProvider
      queries={[
        {
          type: "query",
          queryOptions: projectListQuery({ status: "funded" }),
        },
      ]}
    >
      <FundedProjectsPage />
    </HydrationProvider>
  )
}
