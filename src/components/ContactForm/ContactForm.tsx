import * as React from "react";
import "./ContactForm.scss";

export default function ContactForm() {
  return (
    // <form ref="postForm" onSubmit={this.onFormSubmit}>
    <form className="contact-form">
      <label>Nimi</label>
      <input
        id="name"
        name="name"
        // ref="name"
        type="text"
        // value={this.state.nimi}
        // onChange={this.handleNameChange}
      />
      <label>Sähköpostiosoite</label>
      <input
        id="email"
        name="email"
        // ref="email"
        type="email"
        // value={this.state.nimi}
        // onChange={this.handleNameChange}
      />
      <label>Viestisi</label>
      <textarea
        id="message"
        name="message"
        // ref="message"
        // value={this.state.nimi}
        // onChange={this.handleNameChange}
      />
      <div className="btn-area">
        <button className="submit-btn" type="submit" value="Submit">
          Lähetä
        </button>
      </div>
    </form>
  );
}
