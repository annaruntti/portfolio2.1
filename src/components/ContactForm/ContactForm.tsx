import * as React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

export default function ContactForm() {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hhewjpa",
        "template_zky08yf",
        e.currentTarget,
        "user_ro1VClz7wFbFRzSP9oXsv"
      )
      .then(
        result => {
          alert("Kiitos, viestisi on lähetetty!");
          console.log(result.text);
        },
        error => {
          alert(
            "Lähetys epäonnistui, olethan sähköpostitse yhteydessä, kiitos!"
          );
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Nimi</label>
      <input id="name" name="name" type="text" required />
      <label>Sähköpostiosoite</label>
      <input id="email" name="email" type="email" required />
      <label>Viestin aihe</label>
      <input id="subject" name="subject" type="text" required />
      <label>Viestisi</label>
      <textarea id="message" name="message" required />
      <div className="btn-area">
        <button className="submit-btn" type="submit" value="Send message">
          Lähetä
        </button>
      </div>
    </form>
  );
}
