import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1ps solid" }}>
        <NavLink style={{ padding: "1rem", color: "#faf3e0" }} to="/login">
          Connexion
        </NavLink>
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
