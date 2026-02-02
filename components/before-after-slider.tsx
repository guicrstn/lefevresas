"use client"

import React from "react"

import { useCallback, useRef, useState } from "react"
import Image from "next/image"
import { Construction } from "lucide-react"

interface BeforeAfterSliderProps {
  title: string
  description: string
  beforeImage?: string
  afterImage?: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  title,
  description,
  beforeImage,
  afterImage,
  beforeLabel = "Avant",
  afterLabel = "Après",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percentage = (x / rect.width) * 100
      setSliderPosition(percentage)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const hasImages = beforeImage && afterImage

  return (
    <div className="rounded-xl overflow-hidden bg-card border">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {hasImages ? (
          <>
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <Image
                src={afterImage || "/placeholder.svg"}
                alt={`${title} - Après`}
                fill
                className="object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {afterLabel}
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={beforeImage || "/placeholder.svg"}
                alt={`${title} - Avant`}
                fill
                className="object-cover"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                {beforeLabel}
              </div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-primary rounded-full" />
                  <div className="w-0.5 h-4 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Placeholder */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
            <Construction className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground font-medium">Photos en cours de construction</p>
            <p className="text-muted-foreground/70 text-sm mt-1">Glissez pour comparer avant/après</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
    </div>
  )
}
