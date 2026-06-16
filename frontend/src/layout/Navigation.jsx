import { NavLink } from "react-router-dom";
import { useAuth } from "../hook/UseAuth.js";
import LogoutBtn from "../components/LogoutBtn"




const Navigation = () => {
  const { user } = useAuth();
  // console.log(user);

  return (
    <>
      <nav className="navbar" style={{ padding: "1rem", borderBottom: "1ps solid" }}>
        {user?.email ? (
          <LogoutBtn />
        ) : (
          <NavLink style={{ padding: "1rem", color: "#faf3e0" }} to="/login">
            Connexion
          </NavLink>
        )}

        <NavLink style={{ padding: "1rem", color: "#faf3e0" }} to="/">
          Accueil
        </NavLink>
        <NavLink style={{ padding: "1rem", color: "#faf3e0" }} to="/restaurant">
          Restaurant
        </NavLink>
        <NavLink
          style={{ padding: "1rem", color: "#faf3e0" }}
          to="/reservations"
        >
          Reservations
        </NavLink>
        <NavLink style={{ padding: "1rem", color: "#faf3e0" }} to="/contact">
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
