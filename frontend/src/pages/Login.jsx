import api from "../api/axios";
import Form from "../components/Form";
import { useAuth } from "../hook/UseAuth";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const fields = [
    {
      id: "form-login-email",
      name: "email",
      label: "Email",
      type: "email",
      validation: { required: "Requis" },
    },
    {
      id: "form-login-password",
      name: "password",
      label: "Password",
      type: "password",
      validation: { required: "Requis" },
    },
  ];

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/login", data);
      localStorage.setItem("token", res.data.token);
      setUser(jwtDecode(res.data.token));
      navigate("/dashboard");
    } catch (err) {
      alert("Identifiants incorrects", err);
    }
  };

  return (
    <div className="form-login">
      <h2>Connexion</h2>
      <Form inputs={fields} onSubmit={onSubmit} submitLabel="Login" />
    </div>
  );
};

export default Login;
