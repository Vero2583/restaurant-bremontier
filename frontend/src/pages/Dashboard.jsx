import React from 'react'
import  Form  from '../components/Form'



const Dahsboard = () => {

  // TODO:
  // mettre un évènement onChange sur chaque input radio
  // faire en sorte que chaque formulaire sauf celui qui est coché soit en display none
  // le formulaire à afficher, lui enlever le style display none

  return (
    <section className="dashboard" >

      <h2>Dashboard</h2>

      <div>
        <label for="mealTypeEntreeRadio">Entrée</label>
        <input id="mealTypeEntreeRadio" type="radio" name="mealType" value="entree"/>

        <label for="mealTypePlatRadio">Plat</label>
        <input id="mealTypePlatRadio" type="radio" name="mealType" value="plat"/>

        <label for="mealTypeDessertRadio">Dessert</label>
        <input id="mealTypeDessertRadio" type="radio" name="mealType" value="dessert" />

        <label for="mealTypeBoissonRadio">Boisson</label>
        <input id="mealTypeBoissonRadio" type="radio" name="mealType" value="boisson" />
      </div>

      <div id="mealTypeEntree">
        <h2>Formulaire de création d'entrée</h2>
        <Form
          inputs={[
            {
              name: "nom",
              label: "Nom",
              type: "text",
              validation: true,
            },
             {
              name: "prix",
              label: "Prix",
              type: "text",
              validation: true,
            },
             {
              name: "appartient_carte",
              label: "Appartient_carte",
              type: "text",
              validation: true,
            }
          ]}
          onSubmit={() => {}}
          submitLabel={"Créer une entrée"}
        />
      </div>

      <div id="mealTypePlat" style={{display: "none"}}>
        <h2>Formulaire de création d'un plat</h2>
        <Form
          inputs={[
            {
              name: "nom",
              label: "Nom",
              type: "text",
              validation: true,
            },
            {
              name: "prix",
              label: "Prix",
              type: "text",
              validation: true,
            },
             {
              name: "appartient_carte",
              label: "Appartient_carte",
              type: "text",
              validation: true,
            }
          ]}
          onSubmit={() => {}}
          submitLabel={"Créer un plat"}
        />
      </div>

      <div id="mealTypeDessert" style={{display: "none"}}>
        <h2>Formulaire de création de dessert</h2>
        <Form
          inputs={[
            {
              name: "name",
              label: "Nom",
              type: "text",
              validation: true,
            },
            {
              name: "prix",
              label: "Prix",
              type: "text",
              validation: true,
            },
             {
              name: "appartient_carte",
              label: "Appartient_carte",
              type: "text",
              validation: true,
            }
          ]}
          onSubmit={() => {}}
          submitLabel={"Créer un dessert"}
        />
      </div>
      <div id="mealTypeBoisson" style={{display: "none"}}>
        <h2>Formulaire de création de boisson</h2>
        <Form
          inputs={[
            {
              name: "name",
              label: "Nom",
              type: "text",
              validation: true,
            },
            {
              name: "prix",
              label: "Prix",
              type: "text",
              validation: true,
            },
             {
              name: "contient_alccol",
              label: "Contient_alcool",
              type: "text",
              validation: true,
            }
          ]}
          onSubmit={() => {}}
          submitLabel={"Créer une boisson"}
        />
      </div>
    </section>
  )
}

export default Dahsboard