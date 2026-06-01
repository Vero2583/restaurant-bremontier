import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import EntreeCard from './EntreeCard.jsx'


function Entrees() {

    const [entrees, setEntrees]= useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(null)
    

    useEffect(() => {
          const fetchEntrees = async () => {
        try {
        const { data } = await api.get("/entrees");
        setEntrees(data);
      } catch (error) {
        setError("Impossible de charger les entrees", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntrees()      
  }, [])

  if(loading) return <p>Chargement...</p>;
  if(error) return <p>{error}</p>

  return (

    <div>
      <h2>Les entrees qui sont sur la carte </h2>
    <div>
      { entrees.map((entrees) => {
        <EntreeCard key= {entrees.id} entree={entrees} />
      })}
    </div>
    </div>
  )
}

export default Entrees
