import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { generateMetaData } from "@/libs/next"
import { BRANDING } from "@/shared/constants"
import "./globals.css"

export const metadata: Metadata = generateMetaData({
  title: BRANDING.name,
  description: BRANDING.description,
  path: "",
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-background overflow-x-hidden max-w-screeen text-on-surface font-body antialiased">
        {children}
      </body>
    </html>
  )
}
