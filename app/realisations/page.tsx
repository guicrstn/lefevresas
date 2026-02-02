"use client"

import React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { Construction, Video, Images, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// ============ BEFORE AFTER SLIDER COMPONENT ============
interface BeforeAfterSliderProps {
  title: string
  description: string
  beforeImage?: string
  afterImage?: string
  beforeLabel?: string
  afterLabel?: string
}

function BeforeAfterSlider({
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

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }, [])

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

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-primary rounded-full" />
                  <div className="w-0.5 h-4 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
            <Construction className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground font-medium">Photos en cours de construction</p>
            <p className="text-muted-foreground/70 text-sm mt-1">Glissez pour comparer avant/après</p>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
    </div>
  )
}

// ============ VIDEO PLAYER COMPONENT ============
interface VideoPlayerProps {
  title: string
  description: string
  videoSrc?: string
  posterImage?: string
}

function VideoPlayer({
  title,
  description,
  videoSrc,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video && videoSrc) {
      video.muted = true
      video.play().catch((err) => {
        console.log("[v0] Video autoplay failed:", err)
      })
    }
  }, [videoSrc])

  return (
    <div className="rounded-xl overflow-hidden bg-card border">
      <div className="relative aspect-video bg-muted">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            autoPlay
            preload="auto"
          >
            <source src={videoSrc} type="video/mp4" />
            Votre navigateur ne supporte pas les vidéos HTML5.
          </video>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
            <Video className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground font-medium">Vidéo en cours de construction</p>
            <p className="text-muted-foreground/70 text-sm mt-1">Lecture automatique sans son</p>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
    </div>
  )
}

// ============ IMAGE CAROUSEL COMPONENT ============
interface ImageCarouselProps {
  title: string
  description: string
  images?: string[]
  autoPlayInterval?: number
}

function ImageCarousel({
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

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-opacity"
              onClick={goToPrevious}
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-opacity"
              onClick={goToNext}
              style={{ opacity: isHovered ? 1 : 0 }}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

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

            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
            <Images className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground font-medium">Galerie en cours de construction</p>
            <p className="text-muted-foreground/70 text-sm mt-1">Plusieurs photos du même chantier</p>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
    </div>
  )
}

// ============ DATA ============
const beforeAfterProjects = [
  {
    id: 1,
    title: "Rénovation complète charpente et couverture",
    description: "Réfection totale de la charpente et pose de tuiles sur maison individuelle",
    beforeImage: "/realisations/projet1-avant.jpg",
    afterImage: "/realisations/projet1-apres.jpg",
  },
  {
    id: 2,
    title: "Remplacement couverture bac acier",
    description: "Remplacement d'une toiture vétuste par une couverture bac acier moderne",
    beforeImage: "/realisations/projet2-avant.jpg",
    afterImage: "/realisations/projet2-apres.jpg",
  },
  {
    id: 3,
    title: "Réparation sortie de toit",
    description: "Réfection complète d'une sortie de ventilation avec pose de zinc neuf avec une recherche de fuite.",
    beforeImage: "/realisations/projet3-avant.jpg",
    afterImage: "/realisations/projet3-apres.jpg",
  },
  {
    id: 4,
    title: "Habillage zinc fenêtre de toit",
    description: "Rénovation de l'habillage zinc autour d'un Velux avec finitions soignées",
    beforeImage: "/realisations/projet4-avant.jpg",
    afterImage: "/realisations/projet4-apres.jpg",
  },
]

const videoProjects = [
  {
    id: 1,
    title: "Chantier charpente en cours",
    description: "Timelapse de la construction d'une charpente traditionnelle",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video1-0AstXku566r5kp2cQTMNhsTw1HmxiW.mp4",
  },
  {
    id: 2,
    title: "Fabrication maison ossature bois",
    description: "Réalisation d’une maison à ossature bois avec pose de tuiles, illustrant notre savoir-faire en construction.",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video2-noBFXAzMPoeMHuwqPRB4ZB9EdE45tn.mp4",
  },
]

const galleryProjects = [
  {
    id: 1,
    title: "Zinguerie",
    description: "Travaux de zinguerie : pose de gouttières, descentes et habillages en zinc",
    images: [
      "/realisations/galerie1-photo1.jpg",
      "/realisations/galerie1-photo2.jpg",
      "/realisations/galerie1-photo3.jpg",
      "/realisations/galerie1-photo4.jpg",
    ],
  },
  {
    id: 2,
    title: "Couverture",
    description: "Nos réalisations de couverture : pose de tuiles, ardoises et bac acier sur différents chantiers",
    images: [
      "/realisations/galerie2-photo1.png",
      "/realisations/galerie2-photo2.png",
      "/realisations/galerie2-photo3.jpg",
      "/realisations/galerie2-photo4.jpg",
      "/realisations/galerie2-photo5.jpg",
      "/realisations/galerie2-photo6.jpg",
    ],
  },
  {
    id: 3,
    title: "Charpente",
    description: "Construction et renovation de charpentes traditionnelles et fermettes industrielles",
    images: [
      "/realisations/galerie3-photo1.jpg",
      "/realisations/galerie3-photo2.jpg",
      "/realisations/galerie3-photo3.jpg",
      "/realisations/galerie3-photo4.jpg",
    ],
  },
]

// ============ PAGE COMPONENT ============
export default function RealisationsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nos Réalisations</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Découvrez quelques-unes de nos réalisations en charpente, couverture et zinguerie
            </p>
          </div>
        </section>

        {/* Section Avant/Après */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3">Avant / Après</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Faites glisser le curseur pour voir la transformation de nos chantiers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beforeAfterProjects.map((project) => (
                <BeforeAfterSlider
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section Vidéos */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3">Nos Chantiers en Vidéo</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Découvrez nos équipes en action sur différents projets
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {videoProjects.map((project) => (
                <VideoPlayer
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  videoSrc={project.videoSrc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section Galeries Photos */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3">Galeries Photos</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Suivez l'évolution complète de nos chantiers en images
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {galleryProjects.map((project) => (
                <ImageCarousel
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  images={project.images}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
