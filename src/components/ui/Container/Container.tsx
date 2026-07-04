import { forwardRef } from 'react'

import type { ContainerProps } from './Container.types'

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className={["container", className].filter(Boolean).join(' ')} {...props}>
        {children}
      </div>
    )
  },
)

Container.displayName = 'Container'
