import type { PropsWithChildren } from 'react'

import { CustomQueryClientProvider } from './CustomQueryClientProvider'
import { ViewportProvider } from './ViewportProvider'

export function Provider({ children }: PropsWithChildren) {
  return (
    <CustomQueryClientProvider>
      <ViewportProvider>{children}</ViewportProvider>
    </CustomQueryClientProvider>
  )
}
