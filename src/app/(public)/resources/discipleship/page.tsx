import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { DiscipleshipPage } from "@/screens/discipleship"

export const metadata: Metadata = generateMetaData({
  title: "Discipleship Lessons",
  description:
    "Download free discipleship lesson booklets from FBCI to strengthen your walk with Christ.",
  path: "resources/discipleship",
})

export default DiscipleshipPage
