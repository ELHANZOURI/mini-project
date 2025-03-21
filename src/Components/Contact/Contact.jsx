import React from "react";
import "./Contact.css"

import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
  


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "ba1a0fd2-755b-455e-afe8-418c1486572a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (
      <div className="contact">
        <div className="contact-col">
          <h3>
            Envoyez-nous un message
            <img src={msg_icon} alt="" />
          </h3>
          <p>
            Ne laissez pas passer votre chance ! Inscrivez-vous dès aujourd’hui
            pour accéder à des offres d’emploi et de stage adaptées à votre
            profil, et bénéficiez de ressources exclusives pour lancer ou
            développer votre projet. Rejoignez une communauté dynamique qui vous
            aide à avancer vers votre avenir professionnel avec confiance et
            ambition !
          </p>
          <ul>
            <li>
              {" "}
              <img src={mail_icon} alt="" /> plateformedesjeunes20@gmail.com
            </li>
            <li>
              {" "}
              <img src={phone_icon} alt="" /> +212 8 08 53 01 97
            </li>
            <li>
              <img src={location_icon} alt="" />
              Hay Al Azhar Al Hanaa 1<br />Sidi Moumen / Préfécture Sidi Bernoussi - Casablanca{" "}
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Nom</label>
            <input type="text" name="Nom" placeholder="Ton Nom" required />
            <label>Prénom:</label>
            <input type="text" name="Prénom" placeholder="Prénom" required />
            <label>CIN</label>
            <input type="text" name="cin" placeholder="CIN" required />
            <label>Email</label>
            <input type="text" name="mail" placeholder="Email" required />
            <label>Phone</label>
            <input type="text" name="phone" placeholder="Phone" required />
            <label>Entrez Ton Message</label>
            <textarea name="message" rows={3} required></textarea>
            <button className="btn dark-btn" style={{marginTop:"12px"}}>
              Soumettre maintenant
              <img src={white_arrow} alt="" />
            </button>
          </form>
          <span> {result} </span>
        </div>
      </div>
    );
}

export default Contact;