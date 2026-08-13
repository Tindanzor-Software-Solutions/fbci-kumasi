"use client"

import type { PropsWithChildren } from "react"
import { useAuthRefresh } from "@/features/auth"
import { AwaitAuthLoad, DashboardSidebar } from "@/screens/dashboard"

export default function DashboardLayout({ children }: PropsWithChildren) {
  useAuthRefresh()

  return (
    <AwaitAuthLoad>
      <div className="flex min-h-screen bg-surface">
        <DashboardSidebar />
        <main className="py-24 sm:py-8 sm:ml-54 md:ml-64 flex-1 px-4">
          {children}
        </main>
      </div>
    </AwaitAuthLoad>
  )
}
