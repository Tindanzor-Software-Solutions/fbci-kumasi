import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { generateMetaData } from "@/libs/next"
import { BaseProvider } from "@/providers/BaseProvider"
import { BRANDING } from "@/shared/constants"
import { PublicLayout } from "@/shared/layouts/PublicLayout"
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
        <BaseProvider>
          <PublicLayout>{children}</PublicLayout>
        </BaseProvider>
      </body>
    </html>
  )
}
