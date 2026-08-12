import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { ResourcesPage } from "@/screens/resources"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "Resources",
  description:
    "Access sermons, lesson books, music, and study materials from FBCI and HACWA.",
  path: "resources",
  images: opengraphs.select("resources"),
})

export default ResourcesPage
