"use client"

import { ErrorPage } from "@/shared/ui/ErrorPage"

type PageProps = {
  reset(): void
}
export default function Page({ reset }: PageProps) {
  return <ErrorPage reset={reset} />
}
