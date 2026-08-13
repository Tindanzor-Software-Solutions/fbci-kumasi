import { useRouter } from "next/navigation"
import { useMemo } from "react"

export function useNavigate() {
  const router = useRouter()

  const routing = useMemo(
    () => ({
      push: (url: string) => router.push(url),
      replace: (url: string) => router.replace(url),
      refresh: () => router.refresh(),
      back: () => router.back(),
      forward: () => router.forward(),
    }),
    [router],
  )

  return routing
}
