'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { PrismFallback } from './prism-fallback'

interface PrismWrapperProps {
  height?: number
  baseWidth?: number
  animationType?: 'rotate' | 'hover' | '3drotate'
  glow?: number
  offset?: { x?: number; y?: number }
  noise?: number
  transparent?: boolean
  scale?: number
  hueShift?: number
  colorFrequency?: number
  hoverStrength?: number
  inertia?: number
  bloom?: number
  suspendWhenOffscreen?: boolean
  timeScale?: number
}

// Try to dynamically import the OGL Prism component
const PrismOGL = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((resolve) => {
    // Check if OGL is available
    if (typeof window !== 'undefined') {
      import('ogl').then((ogl) => {
        // If OGL is available, try to load the Prism component
        try {
          // We'll create a simple wrapper that uses the Prism component logic
          // For now, we'll just reject to use the fallback
          resolve({ default: () => null as any })
        } catch (error) {
          console.log('OGL Prism not available, using fallback')
          resolve({ default: () => null as any })
        }
      }).catch(() => {
        console.log('OGL library not available, using fallback')
        resolve({ default: () => null as any })
      })
    } else {
      resolve({ default: () => null as any })
    }
  })
})

export function PrismWrapper(props: PrismWrapperProps) {
  const [useOGL, setUseOGL] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Check if OGL might be available
    const checkOGL = async () => {
      try {
        // Try to dynamically import OGL to see if it's available
        await import('ogl')
        setUseOGL(true)
      } catch (err) {
        console.log('OGL not available, using canvas fallback')
        setUseOGL(false)
        setError(true)
      }
    }
    
    checkOGL()
  }, [])

  // Always use fallback for now since we can't guarantee OGL is installed
  return <PrismFallback {...props} />
  
  // Uncomment this when OGL is properly installed:
  // return (
  //   <Suspense fallback={<PrismFallback {...props} />}>
  //     {useOGL && !error ? (
  //       <PrismOGL {...props} />
  //     ) : (
  //       <PrismFallback {...props} />
  //     )}
  //   </Suspense>
  // )
}
