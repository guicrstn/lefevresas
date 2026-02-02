export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://lefevresas.fr/#organization",
    name: "LEFEVRE Couverture",
    alternateName: "SAS LEFEVRE",
    description:
      "Artisan couvreur professionnel specialise en charpente, couverture et zinguerie. Toiture neuve, renovation, entretien et recherche de fuite.",
    url: "https://lefevresas.fr",
    telephone: "+33651436495",
    email: "contact@lefevresas.fr",
    image: "https://lefevresas.fr/images/logo-lefevre.png",
    logo: "https://lefevresas.fr/images/logo-lefevre.png",
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4 Rue du Lioux",
      addressLocality: "Dortan",
      postalCode: "01590",
      addressRegion: "Ain",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.3167,
      longitude: 5.6667,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Dortan",
      },
      {
        "@type": "City",
        name: "Oyonnax",
      },
      {
        "@type": "City",
        name: "Bellegarde-sur-Valserine",
      },
      {
        "@type": "City",
        name: "Nantua",
      },
      {
        "@type": "City",
        name: "Saint-Claude",
      },
      {
        "@type": "AdministrativeArea",
        name: "Ain",
      },
      {
        "@type": "AdministrativeArea",
        name: "Jura",
      },
      {
        "@type": "AdministrativeArea",
        name: "Haut-Bugey",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "13:00",
      },
    ],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de couverture et charpente",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Toiture neuve et renovation",
            description: "Installation et renovation complete de toitures pour tous types de batiments",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Charpente",
            description: "Conception et installation de charpentes traditionnelles et modernes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Couverture",
            description: "Pose et reparation de tous types de couvertures de toit",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Zinguerie",
            description: "Travaux de zinguerie professionnels pour une etancheite parfaite",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fenetre de toit",
            description: "Installation de fenetres de toit pour plus de lumiere naturelle",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Entretien toiture",
            description: "Maintenance reguliere pour prolonger la duree de vie de votre toiture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Recherche de fuite",
            description: "Detection et reparation rapide de fuites pour proteger votre habitation",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LEFEVRE Couverture",
    url: "https://lefevresas.fr",
    description: "Artisan couvreur professionnel a Dortan pres d Oyonnax - Charpente, Couverture, Zinguerie",
    publisher: {
      "@type": "Organization",
      name: "SAS LEFEVRE",
      logo: {
        "@type": "ImageObject",
        url: "https://lefevresas.fr/images/logo-lefevre.png",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
