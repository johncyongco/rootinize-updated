'use client'

import { useEffect, useRef } from 'react'

interface PrismFallbackProps {
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

export function PrismFallback({
  height = 3.5,
  baseWidth = 5.5,
  animationType = 'rotate',
  glow = 1,
  offset = { x: 0, y: 0 },
  noise = 0.5,
  transparent = true,
  scale = 3.6,
  hueShift = 0,
  colorFrequency = 1,
  hoverStrength = 2,
  inertia = 0.05,
  bloom = 1,
  suspendWhenOffscreen = false,
  timeScale = 0.5
}: PrismFallbackProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let isVisible = true
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        targetMouseX = ((e.touches[0].clientX - rect.left) / rect.width - 0.5) * 2
        targetMouseY = ((e.touches[0].clientY - rect.top) / rect.height - 0.5) * 2
      }
    }

    // Add event listeners for hover mode
    if (animationType === 'hover') {
      canvas.addEventListener('mousemove', handleMouseMove)
      canvas.addEventListener('touchmove', handleTouchMove, { passive: true })
    }

    // Intersection observer for suspendWhenOffscreen
    if (suspendWhenOffscreen) {
      const observer = new IntersectionObserver(
        (entries) => {
          isVisible = entries[0].isIntersecting
        },
        { threshold: 0.1 }
      )
      observer.observe(canvas)
    }

    const draw = (time: number) => {
      if (!isVisible && suspendWhenOffscreen) {
        animationRef.current = requestAnimationFrame(draw)
        return
      }

      const deltaTime = (time - timeRef.current) * 0.001
      timeRef.current = time

      // Update mouse position with inertia
      mouseX += (targetMouseX - mouseX) * inertia
      mouseY += (targetMouseY - mouseY) * inertia

      const width = canvas.width
      const height = canvas.height
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height)
      
      // Center of canvas
      const centerX = width / 2
      const centerY = height / 2
      
      // Calculate rotation based on animation type
      let rotation = 0
      let rotationX = 0
      let rotationY = 0
      
      if (animationType === 'rotate') {
        rotation = time * 0.0005 * timeScale
      } else if (animationType === '3drotate') {
        rotation = time * 0.0003 * timeScale
        rotationX = Math.sin(time * 0.0002) * 0.5
        rotationY = Math.cos(time * 0.00025) * 0.3
      } else if (animationType === 'hover') {
        rotationX = mouseY * hoverStrength * 0.5
        rotationY = mouseX * hoverStrength * 0.5
      }
      
      // Size of prism
      const size = Math.min(width, height) * 0.2 * scale
      
      // Draw prism with 3D effect
      ctx.save()
      ctx.translate(centerX + (offset.x || 0), centerY + (offset.y || 0))
      
      // Apply 3D rotation
      ctx.rotate(rotation)
      ctx.transform(1, rotationX, rotationY, 1, 0, 0)
      
      // Base color with hue shift
      const hue = (time * 0.01 * colorFrequency + hueShift) % 360
      
      // Draw multiple layers for 3D effect
      for (let i = 0; i < 3; i++) {
        const layerScale = 1 - i * 0.2
        const opacity = 0.3 - i * 0.1
        
        // Front triangle
        ctx.beginPath()
        ctx.moveTo(0, -size * 0.6 * layerScale)
        ctx.lineTo(size * 0.5 * layerScale, size * 0.3 * layerScale)
        ctx.lineTo(-size * 0.5 * layerScale, size * 0.3 * layerScale)
        ctx.closePath()
        
        const frontGradient = ctx.createLinearGradient(
          -size * 0.5 * layerScale, size * 0.3 * layerScale,
          size * 0.5 * layerScale, -size * 0.6 * layerScale
        )
        frontGradient.addColorStop(0, `hsla(${hue}, 70%, 60%, ${opacity * glow})`)
        frontGradient.addColorStop(0.5, `hsla(${(hue + 20) % 360}, 70%, 70%, ${opacity * glow * 1.2})`)
        frontGradient.addColorStop(1, `hsla(${hue}, 70%, 60%, ${opacity * glow})`)
        
        ctx.fillStyle = frontGradient
        ctx.fill()
        
        // Add noise effect
        if (noise > 0) {
          ctx.save()
          ctx.globalCompositeOperation = 'overlay'
          ctx.globalAlpha = noise * 0.1
          for (let j = 0; j < 50; j++) {
            const x = (Math.random() - 0.5) * size * 2
            const y = (Math.random() - 0.5) * size * 2
            const r = Math.random() * 2 + 1
            ctx.beginPath()
            ctx.arc(x, y, r, 0, Math.PI * 2)
            ctx.fillStyle = `hsla(${(hue + Math.random() * 40) % 360}, 50%, 70%, 0.3)`
            ctx.fill()
          }
          ctx.restore()
        }
      }
      
      // Edge highlights
      ctx.beginPath()
      ctx.moveTo(0, -size * 0.6)
      ctx.lineTo(size * 0.5, size * 0.3)
      ctx.lineTo(-size * 0.5, size * 0.3)
      ctx.closePath()
      
      ctx.strokeStyle = `hsla(${hue}, 80%, 80%, 0.3)`
      ctx.lineWidth = 2
      ctx.stroke()
      
      ctx.restore()
      
      // Bloom/glow effect
      const glowSize = size * 2 * bloom
      const glowGradient = ctx.createRadialGradient(
        centerX, centerY, size * 0.3,
        centerX, centerY, glowSize
      )
      glowGradient.addColorStop(0, `hsla(${hue}, 70%, 70%, ${0.2 * glow})`)
      glowGradient.addColorStop(0.5, `hsla(${(hue + 10) % 360}, 70%, 60%, ${0.1 * glow})`)
      glowGradient.addColorStop(1, 'transparent')
      
      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      ctx.beginPath()
      ctx.arc(centerX, centerY, glowSize, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()
      ctx.restore()
      
      animationRef.current = requestAnimationFrame(draw)
    }

    // Initial setup
    resize()
    timeRef.current = performance.now()
    animationRef.current = requestAnimationFrame(draw)

    // Handle resize
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      
      if (animationType === 'hover') {
        canvas.removeEventListener('mousemove', handleMouseMove)
        canvas.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [
    height,
    baseWidth,
    animationType,
    glow,
    offset,
    noise,
    transparent,
    scale,
    hueShift,
    colorFrequency,
    hoverStrength,
    inertia,
    bloom,
    suspendWhenOffscreen,
    timeScale
  ])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: transparent ? 0.7 : 1 }}
    />
  )
}
