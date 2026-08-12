import {
  dehydrate,
  HydrationBoundary,
  type infiniteQueryOptions,
  QueryClient,
  type QueryOptions,
} from "@tanstack/react-query"

type Query =
  | {
      type: "query"
      // biome-ignore lint/suspicious/noExplicitAny: Use any for queryKey to match any queryKey
      queryOptions: QueryOptions<any, any, any, any>
    }
  | {
      type: "infinite"
      infiniteOptions: ReturnType<typeof infiniteQueryOptions>
    }

type HydrationProviderProps = {
  queries: Query[]
  children: React.ReactNode
}

export async function HydrationProvider({
  queries,
  children,
}: HydrationProviderProps) {
  const qc = new QueryClient()

  await Promise.all(
    queries.map(async (query) => {
      if (query.type === "query") {
        const queryKey = query.queryOptions.queryKey
        if (queryKey)
          await qc.fetchQuery({
            ...query.queryOptions,
            queryKey,
          })
      }
      if (query.type === "infinite") {
        const queryKey = query.infiniteOptions.queryKey

        if (queryKey) await qc.fetchInfiniteQuery(query.infiniteOptions)
      }
    }),
  )

  return <HydrationBoundary state={dehydrate(qc)}>{children}</HydrationBoundary>
}
