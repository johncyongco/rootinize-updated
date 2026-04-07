'use client'

import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

interface CountUpProps {
  end: number | string
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function CountUp({ 
  end, 
  duration = 2000, 
  className,
  prefix = '',
  suffix = '' 
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          if (typeof end === 'string' && end.includes('+')) {
            // For values like "40+"
            const numericValue = parseInt(end)
            let start = 0
            const increment = numericValue / (duration / 16)
            
            const timer = setInterval(() => {
              start += increment
              if (start >= numericValue) {
                setCount(numericValue)
                clearInterval(timer)
              } else {
                setCount(Math.floor(start))
              }
            }, 16)
            
            return () => clearInterval(timer)
          } else if (typeof end === 'string' && end.includes('%')) {
            // For percentage values
            const numericValue = parseInt(end)
            let start = 0
            const increment = numericValue / (duration / 16)
            
            const timer = setInterval(() => {
              start += increment
              if (start >= numericValue) {
                setCount(numericValue)
                clearInterval(timer)
              } else {
                setCount(Math.floor(start))
              }
            }, 16)
            
            return () => clearInterval(timer)
          } else if (typeof end === 'number') {
            // For numeric values
            let start = 0
            const increment = end / (duration / 16)
            
            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(Math.floor(start))
              }
            }, 16)
            
            return () => clearInterval(timer)
          }
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, hasAnimated])

  const displayValue = typeof end === 'string' && end.includes('+') 
    ? `${count}+`
    : typeof end === 'string' && end.includes('%')
    ? `${count}%`
    : count

   return (
    <span ref={ref} className={cn("text-[#6F86B6]", className)}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
