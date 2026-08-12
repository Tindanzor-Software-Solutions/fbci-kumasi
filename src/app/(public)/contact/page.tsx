import type { Metadata } from "next"
import { generateMetaData } from "@/libs/next"
import { ContactPage } from "@/screens/contact"
import { opengraphs } from "@/shared/routes"

export const metadata: Metadata = generateMetaData({
  title: "Contact Us",
  description:
    "Get in touch with FBCI. Reach out for prayer requests, inquiries, or spiritual guidance.",
  path: "contact",
  images: opengraphs.select("contact"),
})

export default ContactPage
