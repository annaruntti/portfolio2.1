import * as React from "react";
import ContactTitleBlock from "../ContactTitleBlock/ContactTitleBlock";
import ContactForm from "../ContactForm/ContactForm";
import ProfileImage from "../../images/profile.jpg";
import "./ContactView.scss";

export default function ContactView() {
  return (
    <div className="contact-view">
      <ContactTitleBlock />
      <div className="contact-area">
        <div className="container">
          <div className="flex-row">
            <div className="flex-item-left">
              <div className="info-details">
                <div className="image-cropper">
                  <img className="header-image" src={ProfileImage} alt="Me" />
                </div>
                <div className="contat-info">
                  <h3>Yhteystiedot</h3>
                  <ul className="contact-list">
                    <li>
                      <a
                        className="link"
                        href="https://www.linkedin.com/in/annaruntti/"
                      >
                        Linkedin
                      </a>
                    </li>

                    <li>
                      <a className="link" href="https://github.com/annaruntti">
                        Github
                      </a>
                    </li>
                    <li>
                      <a className="link" href="mailto:anruntti@gmail.com">
                        Sähköposti
                      </a>
                    </li>
                    <li>
                      <b>Oulu, Suomi</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-item-right">
              <div className="contact-form-area">
                <div className="alert alert-info" role="alert">
                  <h3>Ota yhteyttä!</h3>
                  <p>Voit ottaa minuun yhteyttä oheisella lomakeella.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
