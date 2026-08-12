import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { AboutPage } from "@/screens/about"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "About Us",
  description:
    "Learn about the legacy, beliefs, and leadership of FBCI - established in 1984.",
  path: "about",
  images: opengraphs.select("about"),
})

export default AboutPage
