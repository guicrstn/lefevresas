"use client"

import { useRef, useEffect } from "react"
import { Construction, Video } from "lucide-react"

interface VideoPlayerProps {
  title: string
  description: string
  videoSrc?: string
  posterImage?: string
}

export function VideoPlayer({
  title,
  description,
  videoSrc,
  posterImage,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's ok
      })
    }
  }, [videoSrc])

  return (
    <div className="rounded-xl overflow-hidden bg-card border">
      <div className="relative aspect-video">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            poster={posterImage}
            loop
            muted
            playsInline
            autoPlay
          />
        ) : (
          /* Placeholder */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
            <Video className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground font-medium">Vidéo en cours de construction</p>
            <p className="text-muted-foreground/70 text-sm mt-1">Lecture automatique sans son</p>
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
