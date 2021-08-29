import * as React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

export default function ContactForm() {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    console.log("löhetys");
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
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Nimi</label>
      <input id="name" name="name" type="text" />
      <label>Sähköpostiosoite</label>
      <input id="email" name="email" type="email" />
      <label>Viestin aihe</label>
      <input id="subject" name="subject" type="text" />
      <label>Viestisi</label>
      <textarea id="message" name="message" />
      <div className="btn-area">
        <button className="submit-btn" type="submit" value="Send message">
          Lähetä
        </button>
      </div>
    </form>
  );
}
