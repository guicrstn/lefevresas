import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Devis Gratuit Couverture Charpente",
  description:
    "Contactez LEFEVRE couvreur a Dortan pour un devis gratuit. Charpente, couverture, zinguerie. Tel: 06 51 43 64 95. Intervention rapide Oyonnax, Ain, Jura, Haut-Bugey.",
  keywords: [
    "contact couvreur dortan",
    "devis couverture oyonnax",
    "devis charpente ain",
    "couvreur telephone dortan",
    "artisan toiture contact",
    "devis gratuit toiture ain",
  ],
  openGraph: {
    title: "Contactez LEFEVRE - Devis Gratuit Couverture",
    description:
      "Demandez votre devis gratuit pour vos travaux de charpente, couverture et zinguerie. Intervention rapide dans l Ain et le Jura.",
    url: "https://lefevresas.fr/contact",
  },
  alternates: {
    canonical: "https://lefevresas.fr/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
