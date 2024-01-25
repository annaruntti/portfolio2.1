import * as React from "react";
import ContactImage from "../../images/contact.png";
import { Link } from "react-router-dom";
import "./ContactBlock.scss";

export default function ContactBlock() {
  return (
    <div className="contact-block">
      <div className="container">
        <div className="flex-row">
          <div className="flex-left">
            <h3 className="h2 cv-title">Ota yhteyttä!</h3>
            <p className="large-text">
              Kiinnostuitko?
              <br />
              Yhteystiedot -sivulta löydät yhteystietoni, sekä
              yhteydenottolomakkeen, jolla voit lähettää minulle sähköpostia.
            </p>
            <Link to={"/yhteys"} className="contact-btn">
              Yhteydenotto
            </Link>
          </div>
          <div className="flex-right">
            <div className="image-area">
              <img className="contact-image" src={ContactImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
