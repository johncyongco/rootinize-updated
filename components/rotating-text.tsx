'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface RotatingTextProps {
  words: string[]
  interval?: number
  className?: string
  baseText?: string
}

export function RotatingText({ 
  words, 
  interval = 2000,
  className,
  baseText = "We Build the Tools Businesses Need Next."
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  const parts = baseText.split(/(\s+)/)
  const wordToReplace = words[currentIndex]

  return (
    <div className={cn("inline-flex items-center", className)}>
      <div className="relative">
        <div className="relative">
          <span className="text-4xl md:text-5xl font-heading text-[#F5F5F2]">
            {parts.map((part, index) => {
              const isWord = part.trim().length > 0 && !['.', ',', '!', '?'].includes(part)
              
              if (isWord && part.toLowerCase() === 'build') {
                return (
                  <span 
                    key={index} 
                    className={cn(
                      "inline-block mx-1 min-w-[120px] text-center",
                      "transition-all duration-300",
                      isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
                    )}
                  >
                    <span className="text-[#6F86B6] font-bold">
                      {wordToReplace}
                    </span>
                  </span>
                )
              }
              return (
                <span 
                  key={index} 
                  className={cn(
                    "transition-opacity duration-300",
                    isAnimating ? "opacity-50" : "opacity-100"
                  )}
                >
                  {part}
                </span>
              )
            })}
          </span>
        </div>
      </div>
    </div>
  )
}
