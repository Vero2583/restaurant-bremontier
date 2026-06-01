import React from 'react'



function Card({imgSrc, imgAlt, title, buttonTitle}) {
  return (
    <div className="card">
      <img src={imgSrc} alt={imgAlt} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
      <h3>{title}</h3>
      <button type="submit">{buttonTitle}</button>
    </div>
  )
}

export default Card;
