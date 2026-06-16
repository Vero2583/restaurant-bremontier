import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: Number(process.env.BREVO_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) console.error(" SMTP erreur :", err.message);
  else console.log(" SMTP connecté !");
});

export const sendVerificationEmail = async (email, token) => {
  await transporter.sendMail({
    from: "Authentification API  <bremontier40@gmail.com>",

    to: email,
    subject: "Confirme ton email",
    html: `<h2>Bienvenue ${email} !</h2>
           <p>Merci de t'être inscrit. Clique sur le lien ci-dessous pour vérifier ton compte :</p>
           <a href="https://restaurant-bremontier.onrender.com/api/verify?token=${token}">Vérifier mon email</a>`,
  });
};

export const sendResetPasswordEmail = async (email, token) => {
  await transporter.sendMail({
    from: '"Auth API" <bremontier40@gmail.com>',
    to: email,
    subject: "Réinitialisation mot de passe",
    html: `<p>Clique sur le lien pour réinitialiser ton mot de passe :</p>
           <a href="https://restaurant-bremontier.onrender.com/api/reset-password?token=${token}">Réinitialiser</a>`,
  });
};

// https://youtu.be/WTmqUtye3hU

export const sendContact = async (to, nom, email, message) => {
  await transporter.sendMail({
    from: "Restaurant-bremontier <bremontier40@gmail.com>",
    to: to,
    subject: "Recapitulatif de demande de contact",
    html: `voici: votre demande de contact
    nom: ${nom}
    email: ${email}
    message: ${message}
    `,
  });
};
