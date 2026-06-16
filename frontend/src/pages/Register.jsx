import api from "../api/axios";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const fields = [
    {
      id:"form-register-prenom",
      name: "prenom",
      label: "Prenom",
      type: "prenom",
      validation: { required: "requis" },
    },
    {
      id:"form-register-role",
      name: "role",
      label: "Role",
      type: "role",
      validation: { required: "requis" },
    },
    {
      id:"form-register-email",
      name: "email",
      label: "Email",
      type: "email",
      validation: { required: "requis" },
    },
    {
      id:"form-register-password",
      name: "password",
      label: "Password",
      type: "password",
      validation: { required: "requis" },
    },
  ];

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("prenom", data.prenom);
    formData.append("role", data.role);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      await api.post("/register", formData);
      //navigate("/login");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="form-register">
      <h2>Inscription</h2>
      <Form inputs={fields} onSubmit={onSubmit} submitLabel={"Inscription"} />
    </div>
  );
};

export default Register;
