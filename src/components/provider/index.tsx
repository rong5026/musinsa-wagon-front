import type { PropsWithChildren } from 'react'

import { CustomQueryClientProvider } from './CustomQueryClientProvider'

export function Provider({ children }: PropsWithChildren) {
  return <CustomQueryClientProvider>{children}</CustomQueryClientProvider>
}
