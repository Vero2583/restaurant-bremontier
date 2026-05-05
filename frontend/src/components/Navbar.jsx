import React from "react";
import { Link } from "react-router-dom";
import LogoutBtn from "../LougoutBtn";
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
          <Link to="/register">Register</Link>
          {" | "}
          <Link to="/login">Login</Link>
          {" | "}
        </>
      )}
    </nav>
  );
};

export default Navbar;
