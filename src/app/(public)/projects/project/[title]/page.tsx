import { QueryClient } from "@tanstack/react-query"
import type { Metadata } from "next"
import { projectDetailQuery } from "@/features/project"
import { generateMetaData } from "@/libs/next"
import { ProjectDetailPage } from "@/screens/projects"
import { HydrationProvider } from "@/shared/ui/HydationProvider"

type PageProps = {
  params: Promise<{
    title: string
  }>
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const title = (await params).title

  const id = title.split("-").pop() ?? ""

  const qc = new QueryClient()
  const query = projectDetailQuery(id)
  const data = await qc.fetchQuery(query)

  return generateMetaData({
    title: data?.title ?? "Project Details",
    description:
      data?.story ??
      "View project details and support FBCI's ongoing missions.",
    path: `projects/project/${id}`,
    images: data?.image,
  })
}

export default async function PageeComponent({ params }: PageProps) {
  const title = (await params).title
  const id = title.split("-").pop() ?? ""

  return (
    <HydrationProvider
      queries={[{ type: "query", queryOptions: projectDetailQuery(id) }]}
    >
      <ProjectDetailPage id={id} />
    </HydrationProvider>
  )
}
