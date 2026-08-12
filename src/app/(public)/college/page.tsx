import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { CollegePage } from "@/screens/college"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "Hyles-Anderson College of West Africa",
  description:
    "Explore HACWA - empowering future ministry leaders with a transformative education in Christian faith.",
  path: "college",
  images: opengraphs.select("college"),
})

export default CollegePage
