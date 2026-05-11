import React from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useAuth } from "../hook/UseAuth";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav>
      <Link to="/">Accueil</Link>
      {user && (
        <>
          <p>Bonjour {user.email}</p>
          {console.log(import.meta.env.VITE_STATIC_URL)}
          <Link to="/dashboard">Dashboard</Link>
             {"|  "}
          

          <LogoutBtn />
        </>
      )}
      {!user && (
        <>
          {" | "}
          <Link to="/Register">Enregistrement</Link>
          {" | "}
          <Link to="/Login">Connexion</Link>
          {" | "}
        </>
      )}
    </nav>
  );
};

export default Navbar;
