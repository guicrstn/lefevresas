"use server"

export type ContactFormState = {
  success: boolean
  message: string
} | null

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nom = formData.get("nom") as string
  const prenom = formData.get("prenom") as string
  const telephone = formData.get("telephone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Validation
  if (!nom || !prenom || !telephone || !service || !message) {
    return {
      success: false,
      message: "Veuillez remplir tous les champs obligatoires.",
    }
  }

  // Pour le moment, simuler l'envoi (fonctionnalité Gmail à implémenter plus tard)
  // Les données seraient envoyées vers une adresse Gmail
  console.log("Formulaire soumis:", { nom, prenom, telephone, service, message })

  return {
    success: true,
    message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
  }
}
