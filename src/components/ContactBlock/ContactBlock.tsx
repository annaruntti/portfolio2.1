import * as React from "react";
import ContactImage from "../../images/contact.png";
import "./ContactBlock.scss";

export default function ContactBlock() {
    return (
        <div className="contact-block">
            <div className="container">
                <div className="flex-row">
                    <div className="flex-left">
                        <h1 className="cv-title">Ota yhteyttä!</h1>
                        <h3>Kiinnostuitko?<br />
                            Yhteystiedot -sivulta löydät yhteystietoni, sekä yhteydenottolomakkeen, jolla voit lähettää minulle sähköpostia.</h3>
                        <button className="contact-btn">Lue lisää</button>
                    </div>
                    <div className="flex-right">
                        <div className="image-area">
                            <img className="contact-image" src={ContactImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}