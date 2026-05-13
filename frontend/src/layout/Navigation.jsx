import { NavLink } from "react-router-dom";



const Navigation = () => {
  return (


     <nav style={{padding: "1rem", borderBottom: "1ps solid"}}>


    <NavLink style={{padding: "1rem" }} to="/" >Accueil</NavLink>
    <NavLink style={{padding: "1rem" }} to="/restaurant">Restaurant</NavLink>
    <NavLink style={{padding: "1rem" }} to="/reservations">Reservations</NavLink>
    <NavLink style={{padding: "1rem" }} to="/contact">Contact</NavLink>


    </nav>    



  )
}

export default Navigation
