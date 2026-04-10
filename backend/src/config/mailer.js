import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();



export const transporter = nodemailer.createTransport({
  host: process.env.DB_HOST,
  port: 5000,
  secure: false,
  auth: {
      user: process.env.DB_USER
 },
});

transporter.verify((err, success) => {
  if (err) console.error(' SMTP erreur :', err.message);
  else console.log(' SMTP connecté !');
});

export const sendVerificationEmail = async (email, token) => {
  await transporter.sendMail({
    from: "Authentification API  <bremontier40@gmail.com>",

    to: email,
    subject: "Confirme ton email",
    html: `<h2>Bienvenue ${email} !</h2>
           <p>Merci de t'être inscrit. Clique sur le lien ci-dessous pour vérifier ton compte :</p>
           <a href="http://localhost:5000/api/auth/verify?token=${token}">Vérifier mon email</a>`,
  });
};

export const sendResetPasswordEmail = async (email, token) => {
  await transporter.sendMail({
    from: '"Auth API" <no-reply@monapi.com>',
    to: email,
    subject: "Réinitialisation mot de passe",
    html: `<p>Clique sur le lien pour réinitialiser ton mot de passe :</p>
           <a href="http://localhost:5000/api/auth/reset-password?token=${token}">Réinitialiser</a>`,
  });
};
