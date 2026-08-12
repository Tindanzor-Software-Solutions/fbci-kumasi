import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { PastorPage } from "@/screens/pastor"
import { CHURCH_INFO } from "@/shared/db"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "Pastor's Biography",
  description: `Meet Pastor ${CHURCH_INFO.pastor.name} - ${CHURCH_INFO.pastor.role} of ${CHURCH_INFO.name}.`,
  path: "pastor",
  images: opengraphs.select("pastor"),
})

export default PastorPage
