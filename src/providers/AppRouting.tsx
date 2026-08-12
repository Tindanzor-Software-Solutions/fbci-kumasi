import { usePathname, useSearchParams } from "next/navigation"
import {
  createContext,
  type PropsWithChildren,
  Suspense,
  useLayoutEffect,
  useMemo,
  useState,
} from "react"
import type { SetState } from "@/shared/types/utils/SetState"

type Search = Record<string, string[] | string>

type AppRoutingContext = {
  searchParams: Search
  pathname: string
}

export const AppRoutingContext = createContext<AppRoutingContext | null>(null)

export function AppRoutingProvider({ children }: PropsWithChildren) {
  const routerPath = usePathname()
  const [pathname, setPathname] = useState(routerPath)
  const [searchParams, setSearchParams] = useState({})

  const value = useMemo(
    () => ({
      searchParams,
      pathname,
    }),
    [searchParams, pathname],
  )

  return (
    <AppRoutingContext.Provider value={value}>
      <Suspense fallback={null}>
        <RouteChangeListener
          setSearchParams={setSearchParams}
          setPathname={setPathname}
        />
        {children}
      </Suspense>
    </AppRoutingContext.Provider>
  )
}

type RouteChangeListenerProps = {
  setPathname: SetState<string>
  setSearchParams: SetState<Search>
}
function RouteChangeListener({
  setSearchParams,
  setPathname,
}: RouteChangeListenerProps) {
  const pathname = usePathname()
  const search = useSearchParams()

  useLayoutEffect(() => {
    setSearchParams(Object.fromEntries(search))
  }, [search, setSearchParams])

  useLayoutEffect(() => {
    setPathname(pathname)
  }, [pathname, setPathname])

  return null
}
