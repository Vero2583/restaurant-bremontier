import React from 'react'

const FormContact = () => {

  return (
  <>
    <div className="contact-form">
          
          <form className="contact-htmlForm">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Votre Email"
              required
            />

            <label htmlFor="message">Messages</label>
            <textarea
              name="message"
              id="message"
              placeholder="Votre mesage "
              rows="12"
              required
            >
            </textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>



    </>
  );
};

export default FormContact
