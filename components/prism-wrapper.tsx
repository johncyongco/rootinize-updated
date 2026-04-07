'use client'

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

export function PrismWrapper(props: PrismWrapperProps) {
  // Always use the canvas fallback - simpler and more reliable
  return <PrismFallback {...props} />
}