import React from "react";
import { useAuth } from "../hook/UseAuth";

const LogoutBtn = () => {
  const { logout } = useAuth();
  
  const redirect = () => {
    logout() 
    window.location.replace("/")
  }

  return (
    <button   onClick={redirect}>
      Logout
    </button>

  );
};

export default LogoutBtn;