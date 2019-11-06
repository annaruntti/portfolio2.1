import * as React from "react";
import "./ContactForm.scss";

export default function ContactForm() {
    return (
        // <form ref="postForm" onSubmit={this.onFormSubmit}>
        <form className="contact-form">
            <label>
                Nimi
                    <input
                    id="name"
                    name="name"
                    // ref="name"
                    type="text"
                // value={this.state.nimi}
                // onChange={this.handleNameChange}
                />
            </label>
            <label>
                Sähköpostiosoite
                    <input
                    id="email"
                    name="email"
                    // ref="email"
                    type="email"
                // value={this.state.nimi}
                // onChange={this.handleNameChange}
                />
            </label>
            <label>
                Viestisi
                    <textarea
                    id="message"
                    name="message"
                // ref="message"
                // value={this.state.nimi}
                // onChange={this.handleNameChange}
                />
            </label>
            <div className="btn-area">
                <button
                    className="submit-btn"
                    type="submit"
                    value="Submit">
                    Lähetä
                </button>
            </div>
        </form>
    );
};