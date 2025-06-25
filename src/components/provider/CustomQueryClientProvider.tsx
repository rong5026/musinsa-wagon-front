'use client'

import { removeSession } from '@/utils/utils'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { invariant } from 'es-toolkit'
import { get } from 'es-toolkit/compat'
import type { PropsWithChildren } from 'react'
import { toast } from 'sonner'

export const CustomQueryClientProvider = (props: PropsWithChildren) => {
  const { children } = props

  const queryCache = new QueryCache({
    onError: async (error: Error) => {
      if (axios.isAxiosError(error)) {
        invariant(!!error.response, 'error.response is undefined')
        if (error.response.status === 401) {
          await removeSession()
          window.location.href = '/sign-in?isExpiredToken=true'
        }
      } else {
        toast.error(get(error, 'message', '알 수 없는 오류가 발생했습니다.'))
      }
      throw error
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
