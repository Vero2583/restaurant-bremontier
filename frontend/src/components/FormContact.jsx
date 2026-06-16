import React from "react";
import api from "../api/axios";
import Form from "./Form";

const FormContact = () => {
  const fields = [
    {
      id: "form-contact-nom",
      name: "nom",
      label: "Nom",
      type: "text",
      validation: { required: "Requis" },
    },
    {
      id: "form-contact-email",
      name: "email",
      label: "Email",
      type: "email",
      validation: { required: "Requis" },
    },
    {
      id: "form-contact-message",
      name: "message",
      label: "Message",
      type: "textarea",
      validation: { required: "Requis" },
      rows: 6,
    },
    {
      id: "form-contact-consent",
      name: "consent",
      label: "Autoriser le traitement des données",
      type: "checkbox",
      validation: { required: "Requis" },
    },
  ];

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/contact", data);
      const resJSON = await res.json();

      console.log(resJSON);
    } catch (err) {
      alert("Identifiants incorrects", err);
    }
  };

  return (
    <>
      <div className="contact-form">
        <Form inputs={fields} onSubmit={onSubmit} submitLabel="Envoyer" />
      </div>
    </>
  );
};

export default FormContact;
