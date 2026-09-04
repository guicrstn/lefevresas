import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/json-ld"
import "./globals.css"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://lefevresas.fr"),
  title: {
    default: "LEFEVRE Couverture - Couvreur, Charpente, Zinguerie | Dortan, Oyonnax, Ain (01)",
    template: "%s | LEFEVRE Couverture - Dortan",
  },
  description:
    "Couvreur professionnel a Dortan (01590) pres d Oyonnax. Expert en charpente, couverture, zinguerie, toiture neuve et renovation. Devis gratuit. Intervention Ain, Jura, Haut-Bugey.",
  keywords: [
    "couvreur dortan",
    "couvreur oyonnax",
    "couverture dortan",
    "charpente dortan",
    "zinguerie dortan",
    "couvreur ain",
    "toiture oyonnax",
    "reparation toiture dortan",
    "renovation toiture ain",
    "couvreur haut-bugey",
    "charpentier oyonnax",
    "zingueur ain",
    "fenetre de toit dortan",
    "recherche fuite toiture",
    "artisan couvreur 01",
    "entreprise couverture ain",
    "LEFEVRE couverture",
    "toiture neuve dortan",
    "entretien toiture oyonnax",
  ],
  authors: [{ name: "SAS LEFEVRE" }],
  creator: "SAS LEFEVRE",
  publisher: "SAS LEFEVRE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lefevresas.fr",
    siteName: "LEFEVRE Couverture",
    title: "LEFEVRE - Couvreur, Charpente, Zinguerie a Dortan pres Oyonnax",
    description:
      "Artisan couvreur professionnel dans l Ain. Charpente, couverture, zinguerie, toiture neuve et renovation. Devis gratuit. Dortan, Oyonnax, Haut-Bugey.",
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "LEFEVRE - Expert couverture et charpente a Dortan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEFEVRE - Couvreur, Charpente, Zinguerie | Dortan, Oyonnax",
    description:
      "Artisan couvreur professionnel dans l Ain. Charpente, couverture, zinguerie, toiture neuve et renovation.",
    images: ["/images/hero-background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lefevresas.fr",
  },
  verification: {
    // google: "votre-code-verification-google",
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <head>
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
