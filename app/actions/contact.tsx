"use server"

import nodemailer from "nodemailer"

export type ContactFormState = {
  success: boolean
  message: string
} | null

const serviceLabels: Record<string, string> = {
  charpente: "Charpente",
  couverture: "Couverture",
  zinguerie: "Zinguerie",
  "fenetre-toit": "Fenêtre de toit",
  entretien: "Entretien de toiture",
  "recherche-fuite": "Recherche de fuite",
  devis: "Demande de devis général",
  autre: "Autre",
}

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

  // Vérifier que les variables d'environnement sont configurées
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD
  const recipientEmail = process.env.RECIPIENT_EMAIL || "contact@lefevresas.fr"

  if (!smtpUser || !smtpPassword) {
    console.error("Variables d'environnement SMTP_USER ou SMTP_PASSWORD non configurées")
    return {
      success: false,
      message: "Une erreur de configuration est survenue. Veuillez nous contacter par téléphone au 06 51 43 64 95.",
    }
  }

  try {
    // Créer le transporteur Nodemailer avec OVH SMTP
    const transporter = nodemailer.createTransport({
      host: "ssl0.ovh.net",
      port: 465,
      secure: true, // SSL
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    const serviceLabel = serviceLabels[service] || service

    // Contenu de l'email
    const mailOptions = {
      from: `"Site LEFEVRE" <noreply@lefevresas.fr>`,
      to: recipientEmail,
      replyTo: `${prenom} ${nom} <noreply@lefevresas.fr>`,
      subject: `[Site Web] Nouvelle demande - ${serviceLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Nouvelle demande de contact</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Informations du client</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Nom :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${nom}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Prénom :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${prenom}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Téléphone :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <a href="tel:${telephone}" style="color: #1e3a5f; text-decoration: none;">${telephone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Type de prestation :</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <span style="background-color: #1e3a5f; color: white; padding: 4px 12px; border-radius: 4px; font-size: 14px;">${serviceLabel}</span>
                </td>
              </tr>
            </table>
            
            <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Message</h2>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">
${message}
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; text-align: center;">
              <p>Ce message a été envoyé depuis le formulaire de contact du site web LEFEVRE.</p>
              <p>Date : ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>
            </div>
          </div>
        </div>
      `,
      text: `
Nouvelle demande de contact - Site LEFEVRE

INFORMATIONS DU CLIENT
----------------------
Nom : ${nom}
Prénom : ${prenom}
Téléphone : ${telephone}
Type de prestation : ${serviceLabel}

MESSAGE
-------
${message}

---
Ce message a été envoyé depuis le formulaire de contact du site web LEFEVRE.
Date : ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}
      `,
    }

    // Envoyer l'email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ou nous contacter par téléphone au 06 51 43 64 95.",
    }
  }
}
