import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { EditProjectPage } from "@/screens/dashboard"

export const metadata: Metadata = generateMetaData({
  title: "Edit Project",
  description: "Edit FBCI project",
  path: "dashboard/projects/edit",
})

type PageProps = {
  params: Promise<{
    id: string
  }>
}
export default async function PageRoute({ params }: PageProps) {
  const id = (await params).id

  return <EditProjectPage projectId={id} />
}
