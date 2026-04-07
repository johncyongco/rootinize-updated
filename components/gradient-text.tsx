'use client'

import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  direction?: 'horizontal' | 'vertical' | 'diagonal'
}

export function GradientText({
  children,
  className,
  colors = ['#3A2A6C', '#5E69C7', '#3A2A6C'],
  direction = 'horizontal'
}: GradientTextProps) {
  const gradientDirection = 
    direction === 'horizontal' ? 'to right' : 
    direction === 'vertical' ? 'to bottom' : 
    'to bottom right'
  
  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientDirection}, ${colors.join(', ')})`,
    backgroundSize: direction === 'horizontal' ? '300% 100%' : '100% 300%',
    animation: 'gradientShift 8s ease infinite'
  }

  return (
    <span 
      className={cn(
        "inline-block text-transparent bg-clip-text",
        className
      )}
      style={gradientStyle}
    >
      {children}
    </span>
  )
}
