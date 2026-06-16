 
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Form from "../../components/Form";
import { useEffect, useState } from "react";


const CreateEntree = () => {
  const navigate = useNavigate();
  const [entrees, setEntrees] = useState([]);
 

  useEffect(() => {
    const fetchEntrees = async () => {
      try {
        const { data } = await api.get("/entrees");
        setEntrees(data);
      } catch (error) {
        console.error("Erreur chargement entree", error);
      }
    };

    fetchEntrees();
  }, []);

  // Champs gérés par Form 
  const fields = [
    {
      id:"form-entree-image_id",
      name: "image_id",
      label: "Image_id",
      type: "text",
      validation: { required: "Image requise" },
    },
    {
      id:"form-entree-nom",
      name: "nom",
      label: "nom",
      type: "text",
      validation: { required: "Nom requis" },
    },
    {
      id:"form-entree-prix",
      name: "prix",
      label: "Prix",
      type: "text",
      validation: { required: "Prix requis" },
    },
    {
      id:"form-entree-appartient_carte",
      name: "appartient_carte",
      label: "appartient_carte",
      type: "",
      validation: { required: "appartient_carte" },
    },
    
  ];

  const onSubmit = async (data) => {
    if (!entreesId) {
      alert("Veuillez sélectionner une entree");
      return;
    }

    const formData = new FormData();

    formData.append("nom", data.nom);
    formData.append("prix", data.prix);
    formData.append("appartient_carte", data.appartient_carte);
    

    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      await api.post("/entrees", formData);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Erreur serveur");
    }
  };

  return (
    <div>
      <h2>Créer une entree</h2>

      <Form
        inputs={fields}
        onSubmit={onSubmit}
        submitLabel="Créer l’entree"
      />
    </div>
  );
};

export default CreateEntree;

