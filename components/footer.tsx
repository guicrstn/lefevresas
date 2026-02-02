import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">LEFEVRE</h3>
            <p className="text-background/80 text-sm text-pretty">
              Votre expert en charpente, couverture et zinguerie depuis plusieurs années dans la région de Dortan.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:0651436495" className="hover:text-background transition-colors">
                  06 51 43 64 95
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>4 Rue du Lioux, 01590 Dortan</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5" />
                <span>Lun-Ven: 7h-19h30 | Sam: 7h-13h</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/" className="hover:text-background transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-background transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/80">
              © {new Date().getFullYear()} SAS LEFEVRE - Charpente, Couverture, Zinguerie. Tous droits réservés.
            </p>
            <div className="flex gap-4 text-sm text-background/80">
              <Link href="/mentions-legales" className="hover:text-background transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-background transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
