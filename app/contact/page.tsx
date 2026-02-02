"use client"

import { useActionState } from "react"
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    sendContactEmail,
    null
  )

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contactez-nous</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Une question, un projet ? N'hésitez pas à nous contacter pour un devis gratuit
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        name="nom"
                        placeholder="Votre nom"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        placeholder="Votre prénom"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telephone">Numéro de téléphone *</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      placeholder="06 00 00 00 00"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Type de prestation *</Label>
                    <Select name="service" required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Sélectionnez un type de prestation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="charpente">Charpente</SelectItem>
                        <SelectItem value="couverture">Couverture</SelectItem>
                        <SelectItem value="zinguerie">Zinguerie</SelectItem>
                        <SelectItem value="fenetre-toit">Fenêtre de toit</SelectItem>
                        <SelectItem value="entretien">Entretien de toiture</SelectItem>
                        <SelectItem value="recherche-fuite">Recherche de fuite</SelectItem>
                        <SelectItem value="devis">Demande de devis général</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre projet ou votre demande..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  {state && (
                    <div
                      className={`p-4 rounded-lg ${
                        state.success
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {state.message}
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                    {isPending ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <a
                        href="tel:0651436495"
                        className="text-primary hover:underline text-lg"
                      >
                        06 51 43 64 95
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Disponible du lundi au samedi
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        4 Rue du Lioux
                        <br />
                        01590 Dortan
                      </p>
                      <a
                        href="https://maps.google.com/?q=4+Rue+du+Lioux+01590+Dortan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline mt-2 inline-block"
                      >
                        Voir sur Google Maps
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horaires</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>
                          <span className="font-medium text-foreground">Lundi - Vendredi:</span>{" "}
                          7h - 19h30
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Samedi:</span> 7h - 13h
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Dimanche:</span> Fermé
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Zone d'intervention</h3>
                      <p className="text-muted-foreground text-pretty">
                        Nous intervenons dans toute la région de Dortan et ses environs (Ain, Jura).
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Notre localisation</h2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.5!2d5.6617!3d46.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c9e0000000001%3A0x1!2s4%20Rue%20du%20Lioux%2C%2001590%20Dortan!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation LEFEVRE"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
