import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Politique de Confidentialité | SAS LEFEVRE",
  description: "Politique de confidentialité et protection des données personnelles de la SAS LEFEVRE",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Politique de Confidentialité</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Protection de vos données personnelles conformément au RGPD
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La SAS LEFEVRE, soucieuse des droits des individus, notamment au regard des traitements automatisés, 
                  et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant l'ensemble 
                  de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d'actions à la 
                  disposition des individus afin qu'ils puissent au mieux exercer leurs droits.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons 
                  à consulter le site de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
                </p>
              </div>

              {/* Responsable */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Responsable du traitement</h2>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="text-foreground">
                    <strong>SAS LEFEVRE</strong><br />
                    4 Rue du Lioux<br />
                    01590 DORTAN<br />
                    SIREN : 981 800 113<br />
                    Représentée par : Baptiste LEFEVRE, Président
                  </p>
                </div>
              </div>

              {/* Données collectées */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Données personnelles collectées</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dans le cadre de l'utilisation de notre site web et notamment de notre formulaire de contact, 
                  nous sommes amenés à collecter les données personnelles suivantes :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Nom et prénom</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse email</li>
                  <li>Message et demande de prestation</li>
                </ul>
              </div>

              {/* Finalités */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Finalités du traitement</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les données personnelles collectées ont pour finalités :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Répondre à vos demandes de contact et de devis</li>
                  <li>Assurer le suivi de la relation commerciale</li>
                  <li>Vous recontacter dans le cadre de votre demande de prestation</li>
                </ul>
              </div>

              {/* Base légale */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Base légale du traitement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le traitement de vos données personnelles est fondé sur votre consentement, que vous exprimez 
                  en remplissant et en soumettant le formulaire de contact, ainsi que sur l'exécution de mesures 
                  précontractuelles prises à votre demande.
                </p>
              </div>

              {/* Destinataires */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Destinataires des données</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Les données personnelles collectées sont destinées uniquement à la SAS LEFEVRE. 
                  Elles ne sont en aucun cas cédées, vendues ou transmises à des tiers sans votre consentement 
                  préalable, sauf obligation légale.
                </p>
              </div>

              {/* Durée de conservation */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Durée de conservation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vos données personnelles sont conservées pendant une durée de 3 ans à compter du dernier contact, 
                  conformément aux recommandations de la CNIL. Passé ce délai, vos données seront supprimées ou anonymisées.
                </p>
              </div>

              {/* Droits */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Vos droits</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique 
                  et Libertés, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie</li>
                  <li><strong>Droit de rectification :</strong> demander la correction de données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données dans les conditions prévues par la loi</li>
                  <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et couramment utilisé</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des motifs légitimes</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Pour exercer ces droits, vous pouvez nous contacter par téléphone au <strong>06 51 43 64 95</strong> ou 
                  par courrier à l'adresse : SAS LEFEVRE, 4 Rue du Lioux, 01590 DORTAN.
                </p>
              </div>

              {/* Réclamation */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Droit de réclamation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, 
                  vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique 
                  et des Libertés (CNIL) : <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr/fr/plaintes</a>
                </p>
              </div>

              {/* Sécurité */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Sécurité des données</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La SAS LEFEVRE met en œuvre toutes les mesures techniques et organisationnelles appropriées 
                  afin de garantir un niveau de sécurité adapté au risque et de protéger vos données personnelles 
                  contre la destruction, la perte, l'altération ou la divulgation non autorisée.
                </p>
              </div>

              {/* Mise à jour */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Mise à jour de la politique</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La présente politique de confidentialité peut être modifiée à tout moment, notamment pour 
                  s'adapter à toute évolution réglementaire, jurisprudentielle ou technique. La date de mise 
                  à jour sera systématiquement indiquée.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
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
