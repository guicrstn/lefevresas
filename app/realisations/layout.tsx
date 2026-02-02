import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Realisations - Charpente, Couverture, Zinguerie",
  description:
    "Decouvrez nos realisations en charpente, couverture et zinguerie a Dortan et Oyonnax. Photos avant/apres, videos de chantiers, galeries photos. Artisan couvreur dans l Ain.",
  keywords: [
    "realisations couvreur dortan",
    "photos chantier toiture oyonnax",
    "avant apres couverture ain",
    "travaux charpente haut-bugey",
    "renovation toiture photos",
    "chantier zinguerie ain",
  ],
  openGraph: {
    title: "Nos Realisations - LEFEVRE Couverture Dortan",
    description:
      "Decouvrez nos realisations en charpente, couverture et zinguerie. Photos avant/apres et videos de nos chantiers.",
    url: "https://lefevresas.fr/realisations",
  },
  alternates: {
    canonical: "https://lefevresas.fr/realisations",
  },
}

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
