import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { MinistriesPage } from "@/screens/ministries"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "Ministries",
  description:
    "Discover the ministries of FBCI - from Bible College to global missions.",
  path: "ministries",
  images: opengraphs.select("ministries"),
})

export default MinistriesPage
