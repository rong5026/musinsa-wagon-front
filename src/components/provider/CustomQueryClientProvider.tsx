'use client'

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

export function CustomQueryClientProvider({ children }: PropsWithChildren) {
  const queryCache = new QueryCache({
    onError: (error: Error) => {
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
