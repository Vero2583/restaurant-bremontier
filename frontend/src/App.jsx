import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Dahsboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
import { useAuth } from "./hook/UseAuth";



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

          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
