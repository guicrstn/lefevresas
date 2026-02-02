import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Legales",
  description:
    "Mentions legales du site LEFEVRE Couverture. Informations sur la societe SAS LEFEVRE, editeur du site, hebergement et propriete intellectuelle.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://lefevresas.fr/mentions-legales",
  },
}

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
