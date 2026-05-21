import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
    
    <footer className="footer">
      <div className="nav">
      <NavLink style={{padding: "1rem", color: "#faf3e0" }} to="/cookies">Cookies</NavLink>
      <NavLink style={{padding: "1rem", color: "#faf3e0" }} to="/mention">Mention legal</NavLink>
      <NavLink style={{padding: "1rem", color: "#faf3e0" }} to="/login">Connexion</NavLink>
      </div>
      <div className="footer-info">
      <h3>Nos coordonnées</h3>
      <ul className="contact">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </div>
    </footer>

   

    </>
  );
};

export default Footer;
