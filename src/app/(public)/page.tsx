import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { HomePage } from "@/screens/home"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "Welcome",
  description:
    "Welcome to FBCI - a modern sanctuary dedicated to transformative worship and global impact.",
  path: "",
  images: opengraphs.select("home"),
})

export default HomePage
