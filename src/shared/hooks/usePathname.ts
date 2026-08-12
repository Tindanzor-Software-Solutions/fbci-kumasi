import { usePathname as useLocation } from "next/navigation"

export function usePathname(): string {
  return useLocation()
}
