import React, { useRef } from "react";
import api from "../api/axios";
import Form from "./Form";
import { toast } from "react-toastify";

const FormContact = () => {
  const formRef = useRef();

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
      // console.log(res);

      // réinitialiser le formulaire
      if (formRef && formRef.current) formRef.current.reset();

      // envoyer un toast
      toast.success("Votre demande de contact est bien enregistrée !");
    } catch (err) {
      alert("Identifiants incorrects", err);
    }
  };

  return (
    <>
      <div className="contact-form">
        <Form
          myRef={formRef}
          inputs={fields}
          onSubmit={onSubmit}
          submitLabel="Envoyer"
        />
      </div>
    </>
  );
};

export default FormContact;
