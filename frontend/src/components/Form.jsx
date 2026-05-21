import { useForm } from "react-hook-form";

// On défini les composants du formulaire dans les props 
// Input : les champs , le onSubmit: c'est la fonction appelé lors de la sourmission)  
// et submitLabel est le titre du bouton de soumission

const Form = ({inputs, onSubmit, submitLabel}) => {
    // register: est une fonction qui permet d'enregister les champ du formulaire 
    // handleSubmit est la fonction qui gere la valdition aavant l'envoie 
    // errors est un objet qui contient les erreurs de validation pour chaque champ 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <div key={input.name} style={{ marginBottom: "10px" }}>
          <label>{input.label}</label>
          <input
            type={input.type}
            {...register(input.name, input.validation)}
          />
          {errors[input.name] && (
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors[input.name].message}
            </p>
          )}
        </div>
      ))}
      <button type="submit"> {submitLabel}</button>
    </form>
  );
};


export default Form