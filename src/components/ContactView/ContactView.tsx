import * as React from "react";
import ContactTitleBlock from "../ContactTitleBlock/ContactTitleBlock";
import ContactForm from "../ContactForm/ContactForm";
import ProfileImage from "../../images/profile.jpg";
// import CvLinkBlock from "../CvLinkBlock/CvLinkBlock";
// import PortfolioLinkBlock from "../PortfolioLinkBlock/PortfolioLinkBlock";
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
                                    <img className="header-image" src={ProfileImage} alt="My profile image" />
                                </div>
                                <div className="contat-info">
                                    <h3>Yhteystiedot</h3>
                                    <p>linkedin.com/in/annaruntti/<br />
                                        suomenlapinkoira.net<br />
                                        anruntti@gmail.com<br />
                                        +358452346943<br />
                                        Haravatie 27<br />
                                        90530 Oulu<br />
                                        s. 6.4.1990</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-item-right">
                            <div className="contact-form-area">
                                <div className="alert alert-info" role="alert">
                                    <h3>Ota yhteyttä!</h3>
                                    <p>Voit ottaa minuun yhteyttä oheisella formilla.</p>
                                    <p>Huom. päivitys 17.3.2020, yhteydenottolomake ei toimi juuri nyt, otathan yhteyttä sähköpostitse.</p>
                                </div>
                                <ContactForm />
                                {/* <CvLinkBlock /> */}
                                {/* <PortfolioLinkBlock /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}