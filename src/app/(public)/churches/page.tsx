import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { ChurchesPage } from "@/screens/churches"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "Churches",
  description:
    "Find churches pastored by HACWA graduates and partner with FBCI in spreading the gospel.",
  path: "churches",
  images: opengraphs.select("churches"),
})

export default ChurchesPage
