import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="nav">
          <NavLink style={{ padding: "1rem", color: "#faf3e0" }} to="/mention">
            Mention legal
          </NavLink>
          <NavLink style={{ padding: "1rem", color: "#faf3e0" }} to="/login">
            Connexion
          </NavLink>
        </div>
        <div className="footer-info">
          <h3>Nos coordonnées</h3>
          <ul className="contact">
            <li>📍 110 rue des hauts fourneaux, 40210 Labouheyere</li>
            <li>✉️ audelarrieu040@gmail.com</li>
            <li>📞 05.58.07.01.13</li>
            <li>
              🕘 Ouvert du Lundi au Dimanche <br /> de 9h30 à 14h et de 19h00 à
              21h00 <br /> Fermé dimanche soir et lundi soir
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
