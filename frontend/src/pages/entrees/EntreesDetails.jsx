import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../../api/axios";


const EntreesDetails = () => {
  const { id } = useParams();
  const [entrees, setEntrees] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntrees = async () => {
      try {
        const { data } = await api.get(`/entrees/${id}`);
        setEntrees(data);
      } catch (err) {
        if (err.response?.status === 404) {
          setError("Entree introuvable");
        } else {
          setError("Erreur lors du chargement");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEntrees();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!entrees) return null;

  return (
    <div>
      <Link to="/">← Retour</Link>

      <h2>{entrees.nom}</h2>

      {entrees.image && (
        <img
           src={`${import.meta.env.VITE_STATIC_URL}/${entrees.image}`}
          alt={entrees.title}
          style={{ maxWidth: "400px", display: "block" }}
        />
      )}

      <p>
        <strong>Prix :</strong> {entrees.prix} €
      </p>

      <p>
        <strong>appartient_carte :</strong> {entrees.appartient_carte}
      </p>

    </div>
  );
};

export default EntreesDetails;
