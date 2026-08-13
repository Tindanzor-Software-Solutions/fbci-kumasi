import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { HeavenPage } from "@/screens/heaven"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "The Way to Heaven",
  description:
    "Discover the foundational truths of salvation and find the peace that comes from a personal relationship with Christ.",
  path: "heaven",
  images: opengraphs.select("heaven"),
})

export default HeavenPage
