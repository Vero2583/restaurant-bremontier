import api from "../api/axios";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      validation: { required: "requis" },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      validation: { required: "requis" },
    },
    
  ];

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    
    try {
      await api.post("/auth/register", formData);
      //navigate("/login");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <Form inputs={fields} onSubmit={onSubmit} submitLabel={"S'inscrire"} />
    </div>
  );
};

export default Register;
