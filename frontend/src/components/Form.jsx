import { useForm } from "react-hook-form";

// On défini les composants du formulaire dans les props
// Input : les champs , le onSubmit: c'est la fonction appelé lors de la sourmission)
// et submitLabel est le titre du bouton de soumission

const Form = ({ myRef, inputs, onSubmit, submitLabel }) => {
  // register: est une fonction qui permet d'enregister les champ du formulaire
  // handleSubmit est la fonction qui gere la valdition avant l'envoie
  // errors est un objet qui contient les erreurs de validation pour chaque champ
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form ref={myRef} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <div key={input.name} style={{ marginBottom: "10px" }}>
          <label htmlFor={input.id}>{input.label}</label>

          {input.type === "textarea" ? (
            <textarea
              id={input.id}
              type={input.type}
              {...register(input.name, input.validation)}
              rows={input.rows}
            />
          ) : (
            <input
              id={input.id}
              type={input.type}
              {...register(input.name, input.validation)}
            />
          )}

          {errors[input.name] && (
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors[input.name].message}
            </p>
          )}
        </div>
      ))}
      <button className="btform" type="submit"> {submitLabel}</button>
    </form>
  );
};

export default Form;
