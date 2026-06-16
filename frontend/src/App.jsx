import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import Dahsboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import { useAuth } from "./hook/UseAuth.js";
import Accueil from "./pages/Accueil.jsx";
import Restaurant from "./pages/Restaurant.jsx";
import Reservations from "./pages/Reservations.jsx";
import Contact from "./pages/Contact.jsx";
import Entrees from "./components/Entrees.jsx";




function App() {
  const { user } = useAuth();
  return (
    <>
    <head>
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
     <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
     <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>
     <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin=""
    />
    </head>
    <BrowserRouter>
      <Header/>

      <main>
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Accueil />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/entrees" element={<Entrees />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

        <Footer/>

        <ToastContainer/>
         <script
      src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
      integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
      crossorigin=""
    ></script>
      </BrowserRouter>

      </>
  );
}

export default App;
