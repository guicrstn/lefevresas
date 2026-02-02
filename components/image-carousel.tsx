"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Construction, Images } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  title: string
  description: string
  images?: string[]
  autoPlayInterval?: number
}

export function ImageCarousel({
  title,
  description,
  images = [],
  autoPlayInterval = 4000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const hasImages = images.length > 0

  const goToNext = useCallback(() => {
    if (!hasImages) return
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [hasImages, images.length])

  const goToPrevious = useCallback(() => {
    if (!hasImages) return
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [hasImages, images.length])

  useEffect(() => {
    if (!hasImages || isHovered) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [hasImages, isHovered, autoPlayInterval, goToNext])

  return (
    <div className="rounded-xl overflow-hidden bg-card border">
      <div
        className="relative aspect-[4/3]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {hasImages ? (
          <>
            {/* Images */}
            <div className="relative w-full h-full">
              {images.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${title} - Photo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 hover:opacity-100 transition-opacity"
              onClick={goToPrevious}
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 hover:opacity-100 transition-opacity"
              onClick={goToNext}
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Aller à la photo ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        ) : (
          /* Placeholder */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
            <Images className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground font-medium">Galerie en cours de construction</p>
            <p className="text-muted-foreground/70 text-sm mt-1">Plusieurs photos d'un même chantier</p>
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
