import { QueryClient } from "@tanstack/react-query"
import type { Metadata } from "next"
import { conferenceQuery } from "@/features/conference"
import { generateMetaData } from "@/libs/next"
import { ConferencesPage } from "@/screens/conferences"
import { HydrationProvider } from "@/shared/ui/HydationProvider"

export const revalidate = 28_800

export const generateMetadata = async (): Promise<Metadata> => {
  const qc = new QueryClient()
  const query = conferenceQuery()
  const data = await qc.fetchQuery(query)

  return generateMetaData({
    title: data?.title ?? "Conferences",
    description:
      data?.shortIntro ??
      "Join the Annual Pastors & Workers Conference at FBCI Kumasi - a time of biblical teaching, spiritual renewal, and fellowship.",
    path: "conferences",
    images: data?.poster,
  })
}

export default async function PageComponent() {
  return (
    <HydrationProvider
      queries={[{ type: "query", queryOptions: conferenceQuery() }]}
    >
      <ConferencesPage />
    </HydrationProvider>
  )
}
