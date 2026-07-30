import { projectDetailQuery } from "@/features/project"
import { generateMetaData } from "@/libs/tanstack"
import { ProjectDetailPage } from "@/screens/projects"
import { HydrationProvider } from "@/shared/ui/HydationProvider"
import { QueryClient } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/__public/projects/project/$title")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const qc = new QueryClient()
    const { title } = params
    const id = title.split("-").pop()
    if (!id) throw new Error("Failed to retrieve project info")

    const query = projectDetailQuery(id)
    const data = await qc.fetchQuery(query)
    return { data, queryKey: query.queryKey, id }
  },
  head: ({ loaderData: { data, id } = {} }) => ({
    meta: generateMetaData({
      title: data?.title ?? "Project Details",
      description:
        data?.story ??
        "View project details and support FBCI's ongoing missions.",
      path: `projects/project/${id}`,
      images: data?.image,
    }),
  }),
})

function RouteComponent() {
  const { data, queryKey, id } = Route.useLoaderData()

  return (
    <HydrationProvider queries={[{ queryKey, data }]}>
      <ProjectDetailPage id={id} />
    </HydrationProvider>
  )
}
