'use client'

import { cn } from '@/lib/utils'

interface ShinyTextProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ShinyText({ children, className, speed = 5 }: ShinyTextProps) {
  return (
    <span className={cn(
      "relative inline-block",
      "bg-gradient-to-r from-[#3A2A6C] via-[#5E69C7] to-[#3A2A6C]",
      "bg-clip-text text-transparent",
      "animate-shiny",
      className
    )} style={{ animationDuration: `${speed}s` }}>
      {children}
    </span>
  )
}
