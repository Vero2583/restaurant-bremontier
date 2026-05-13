import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import Dahsboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
import { useAuth } from "./hook/UseAuth.js";
import Accueil from "./pages/Accueil.jsx";
import Restaurant from "./pages/Restaurant.jsx";
import Reservations from "./pages/Reservation.jsx";
import Contact from "./pages/Contact.jsx"



function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {user && (
          <>
            {/* Les routes protegées  */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dahsboard />} />

            </Route>

            {/*Fin  Les routes protegées  */}

          </>
        )}
        {!user && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/accueil" element={<Accueil />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />

          </>
        )}
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
