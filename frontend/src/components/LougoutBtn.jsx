import React from "react";
import { useAuth } from "../hook/UseAuth";

const LogoutBtn = () => {
  const { logout } = useAuth();
  return (
    <button   onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutBtn;