'use client'

import type { PropsWithChildren } from 'react'

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function CustomQueryClientProvider({ children }: PropsWithChildren) {
  const queryCache = new QueryCache({
    onError: (error: Error) => {
      // eslint-disable-next-line no-console
      console.error('Query error:', error.message)
    },
  })

  const queryClient = new QueryClient({
    queryCache,
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  })

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
