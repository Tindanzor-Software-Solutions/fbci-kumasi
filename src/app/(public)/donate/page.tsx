import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { DonatePage } from "@/screens/donate"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "Donate",
  description:
    "Support FBCI through secure donations. Your stewardship enables global gospel outreach.",
  path: "donate",
  images: opengraphs.select("donate"),
})

export default DonatePage
