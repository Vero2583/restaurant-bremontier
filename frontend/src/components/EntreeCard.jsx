import React from 'react'

function EntreeCard(entree) {
    console.log('entre depuis comopent', entree)
  
    return (
    <div>
      <h3>{entree.nom}</h3>
      <span>{entree.prix}</span>
    </div>
  )
}

export default EntreeCard
