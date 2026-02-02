import { Phone, MapPin, Clock, Wrench, Shield, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  const services = [
    {
      icon: Wrench,
      title: "Toiture neuf et rénovation",
      description: "Installation et rénovation complète de toitures pour tous types de bâtiments",
    },
    {
      icon: Wrench,
      title: "Charpente",
      description: "Conception et installation de charpentes traditionnelles et modernes",
    },
    {
      icon: Shield,
      title: "Couverture",
      description: "Pose et réparation de tous types de couvertures de toit",
    },
    {
      icon: Wrench,
      title: "Zinguerie",
      description: "Travaux de zinguerie professionnels pour une étanchéité parfaite",
    },
    {
      icon: Wrench,
      title: "Fenêtre de toit",
      description: "Installation de fenêtres de toit pour plus de lumière naturelle",
    },
    {
      icon: Shield,
      title: "Entretien toiture",
      description: "Maintenance régulière pour prolonger la durée de vie de votre toiture",
    },
    {
      icon: Droplets,
      title: "Recherche de fuite",
      description: "Détection et réparation rapide de fuites pour protéger votre habitation",
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center opacity-20" />
          <div className="relative container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <Image
                    src="/images/logo-lefevre.png"
                    alt="LEFEVRE Logo"
                    width={400}
                    height={300}
                    className="w-full max-w-md h-auto"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Votre expert en charpente, couverture et zinguerie
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 text-pretty">
                Depuis plusieurs années, nous mettons notre savoir-faire au service de vos projets de toiture dans la
                région de Dortan
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                06 51 43 64 95
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Une gamme complète de services pour tous vos besoins en toiture et charpente
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-pretty">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  N'hésitez pas à nous contacter pour un devis gratuit ou pour toute question
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Téléphone</h3>
                    <a href="tel:0651436495" className="text-primary hover:underline">
                      06 51 43 64 95
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Adresse</h3>
                    <p className="text-muted-foreground text-pretty">
                      4 Rue du Lioux
                      <br />
                      01590 Dortan
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Horaires</h3>
                    <p className="text-muted-foreground text-sm">
                      Lundi - Vendredi
                      <br />
                      <span className="font-medium text-foreground">7h - 19h30</span>
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Samedi
                      <br />
                      <span className="font-medium text-foreground">7h - 13h</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
