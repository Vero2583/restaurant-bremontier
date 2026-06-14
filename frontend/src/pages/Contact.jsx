import FormContact from "../components/FormContact";
import Map from "../components/Map";

const Contact = () => {
  return (
    <section className="section-contact">
      <h2>Contact</h2>
      <div className="form-contact-wrapper">
        <FormContact />
        <div className="contact-info">
          <div className="information">
            <p>📍 110 rue des hauts fourneaux, 40210 Labouheyere</p>
            <div className="Mappy">
              <Map />
            </div>
          </div>
          <div className="information">
            <p>
              🕘 Ouvert du Lundi au Dimanche <br /> de 9h30 à 14h et de 19h00 à
              21h00 <br /> Fermé dimanche soir et lundi soir
            </p>
            <p>✉️ audelarrieu040@gmail.com</p>
          </div>
          <div className="information">
            <p>📞 05.58.07.01.13</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
