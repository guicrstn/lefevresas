import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialite",
  description:
    "Politique de confidentialite et protection des donnees personnelles du site LEFEVRE Couverture. RGPD et droits des utilisateurs.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://lefevresas.fr/politique-confidentialite",
  },
}

export default function PolitiqueConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
