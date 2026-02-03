import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Mentions Légales | SAS LEFEVRE",
  description: "Mentions légales du site de la société LEFEVRE, spécialisée en charpente, couverture et zinguerie à Dortan (01)",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentions Légales</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              {/* Éditeur du site */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Éditeur du site</h2>
                <div className="bg-muted rounded-lg p-6">
                  <p className="mb-2"><strong>Raison sociale :</strong> SAS LEFEVRE</p>
                  <p className="mb-2"><strong>Nom commercial :</strong> LEFEVRE</p>
                  <p className="mb-2"><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
                  <p className="mb-2"><strong>Capital social :</strong> À compléter</p>
                  <p className="mb-2"><strong>Adresse du siège social :</strong> 4 Rue du Lioux, 01590 Dortan, France</p>
                  <p className="mb-2"><strong>SIREN :</strong> 981 800 113</p>
                  <p className="mb-2"><strong>SIRET :</strong> 981 800 113 00020</p>
                  <p className="mb-2"><strong>Numéro de TVA intracommunautaire :</strong> FR07981800113</p>
                  <p className="mb-2"><strong>Code APE/NAF :</strong> 4391B - Travaux de couverture par éléments</p>
                  <p className="mb-2"><strong>Date de création :</strong> 28 novembre 2023</p>
                  <p className="mb-2"><strong>Téléphone :</strong> 06 51 43 64 95</p>
                  <p className="mb-0"><strong>Email :</strong> À compléter</p>
                </div>
              </div>

              {/* Directeur de publication */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Directeur de la publication</h2>
                <div className="bg-muted rounded-lg p-6">
                  <p className="mb-2"><strong>Nom :</strong> Guillaume CRISTINI </p>
                  <p className="mb-0"><strong>Qualité :</strong> Architecte site web</p>
                  <p className="mb-0"><strong>Site web :</strong> <a href="https:https://gcinformatik.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://gcinformatik.fr/</a></p>
                </div>
              </div>

              {/* Hébergeur */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Hébergeur du site</h2>
                <div className="bg-muted rounded-lg p-6">
                  <p className="mb-2"><strong>Raison sociale :</strong> OVH </p>
                  <p className="mb-2"><strong>Adresse :</strong> 32 RUE KELLERMANN 59100 ROUBAIX</p>
                  <p className="mb-0"><strong>Site web :</strong> <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.ovhcloud.com/fr/</a></p>
                </div>
              </div>

              {/* Activité */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Activité de l'entreprise</h2>
                <p className="text-muted-foreground mb-4">
                  La société LEFEVRE exerce une activité artisanale réglementée dans le domaine des travaux de construction spécialisés, comprenant :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Travaux de couverture et toiture en tous matériaux</li>
                  <li>Travaux de charpente</li>
                  <li>Travaux de zinguerie</li>
                  <li>Travaux d'isolation</li>
                  <li>Travaux d'étanchéité</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  <strong>Convention collective applicable :</strong> Bâtiment ouvriers jusqu'à 10 Salariés (IDCC 1596)
                </p>
              </div>

              {/* Propriété intellectuelle */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Propriété intellectuelle</h2>
                <p className="text-muted-foreground">
                  L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, etc.) est la propriété exclusive de la société LEFEVRE ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable de la société LEFEVRE.
                </p>
              </div>

              {/* Responsabilité */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation de responsabilité</h2>
                <p className="text-muted-foreground mb-4">
                  La société LEFEVRE s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p className="text-muted-foreground">
                  En conséquence, la société LEFEVRE décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site, ainsi que pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site.
                </p>
              </div>

              {/* Liens hypertextes */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Liens hypertextes</h2>
                <p className="text-muted-foreground">
                  Le site peut contenir des liens hypertextes vers d'autres sites. La société LEFEVRE n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu et aux éventuels collectes et traitements de données personnelles effectués par ces sites.
                </p>
              </div>

              {/* Droit applicable */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Droit applicable</h2>
                <p className="text-muted-foreground">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
                <p className="text-muted-foreground">
                  Pour toute question relative aux présentes mentions légales ou pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Par téléphone : 06 51 43 64 95</li>
                  <li>Par courrier : SAS LEFEVRE, 4 Rue du Lioux, 01590 Dortan</li>
                </ul>
              </div>

              {/* Date de mise à jour */}
              <div className="border-t pt-6 mt-10">
                <p className="text-sm text-muted-foreground">
                  <strong>Dernière mise à jour :</strong> Janvier 2026
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
