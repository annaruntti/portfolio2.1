import React, { Component, MouseEvent } from "react";
import ProfileImage from "../../images/profile.jpg";
import Skills from "../Skills/Skills";
import CvContentWork from "../CvContentWork/CvContentWork"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./CvArea.scss";

export default class CvArea extends React.Component {
    handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        alert(e.currentTarget.tagName); // alerts BUTTON
    }

    handleAnotherClick(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
        e.preventDefault();
        alert('Yeah!');
    }
    render() {
        return  <div className="cv-area">
            <div className="container">
                <div className="flex-row">
                    <div className="flex-item-left">
                        <div className="image-cropper">
                            <img className="header-image" src={ProfileImage} alt="My profile image" />
                        </div>
                        <h1 className="profile-title">Anna Tiala</h1>
                        <h3>CV 11.11.2019</h3><hr />
                        <h3 className="contact-title">Yhteystiedot</h3>
                        <p>linkedin.com/in/annaruntti/<br />
                            suomenlapinkoira.net<br />
                            anruntti@gmail.com<br />
                            +358452346943<br />
                            Haravatie 27<br />
                            90530 Oulu<br />
                            s. 6.4.1990</p>
                        <Skills />
                    </div>
                    <div className="flex-item-right">
                        <div className="flex-title-row">
                            <h3>Työkokemus</h3>
                            <div className="icon-item">
                                <button
                                    onClick={this.handleClick}
                                    className="show-content-btn">{this.props.children}<ExpandLessIcon /></button>
                            </div>
                        </div>
                        <CvContentWork/>
                        <div className="flex-title-row">
                            <h3>Koulutus</h3>
                            <div className="icon-item">
                                <button className="show-content-btn"><ExpandMoreIcon /></button>
                            </div>
                        </div>
                        <div className="show-content-studies">
                            <p><b>Tietojenkäsittelytieteiden opintoja, Oulun yliopisto, Sähkö- ja tietotekniikan tiedekunta</b><br />
                                - Pääaine: Tietojenkäsittelytieteet, 2010-2018<br />
                                - Sivuaine: Elokuva-analyysi, humanistinen tiedekunta, 2015<br />
                                - Sivuaine: Johtaminen, Oulun yliopiston kauppakorkeakoulu, 2013</p>

                            <p>Ylioppilas, 2009, Kiimingin lukio</p>
                        </div>
                        <div className="flex-title-row">
                            <h3>Vastuutehtävät</h3>
                            <div className="icon-item">
                                <button className="show-content-btn"><ExpandMoreIcon /></button>
                            </div>
                        </div>
                        <div className="show-content-responsibilities">
                            <p>TIVIA Oulu (Pohjois-Pohjanman tietojenkäsittely-yhdistys), puheenjohtaja 2019, varapuheenjohtaja 2018, puheenjohtaja 2017, varapuheenjohtaja 2016<br />
                                TIVIA Oulu (entinen Potky ry) Tivia Oulu eli aiemmalta nimeltään POTKY ry on Tietotekniikan Liiton alainen itsenäinen jäsenyhdistys, jonka nykyinen jäsenmäärä on yli 200 henkilöä. TIVIA Oulun kantavana toiminta-ajatuksena on ollut aina sen perustamisesta saakka toimia tietotekniikan parissa työskentelevien yksityisten henkilöiden ja yhteisöjen yhdyssiteenä Pohjois-Pohjanmaalla ja edistää tietotekniikan mahdollisimman tehokasta hyväksikäyttöä.
                                    Tavoitteensa toteuttamiseksi yhdistys järjestää kokouksia, koulutustilaisuuksia, seminaareja sekä tutustumismatkoja yhdistyksen jäsenten ammatillista toimintaa edistäviin organisaatioihin.</p>

                            <p>Oulun luonnontieteilijät ry, Suhdevastaava, 2016<br />
                                Oulun luonnontieteilijät ry on kattojärjestö Oulun yliopiston ainejärjestöille. Sudevastaavana tehtäviini kuului organisaation suhteista, yhteystyökumppanuuksista ja PR:sta vastaaminen.</p>

                            <p>Blanko ry, Puheenjohtaja, 2015<br />
                                Blanko on Oulun yliopiston tietojenkäsittelytieteiden ainejärjestö. Hallituksen puheenjohtajana tehtäviini kuului järjestön toiminnan johtaminen, suunnittelu ja hallinta.</p>

                            <p>Blanko ry, Suhdevastaava, 2013-2014<br />
                                Suhdevastaava on yksi Blankon hallituksen jäsenistä. Suhdevastaava vastaa järjestön yhteistyökumppanuuksista ja niiden hankkimisesta. Blankon toiminta rahoitetaan pitkälti yritysyhteystyösopimuksista saatavilla varoilla. Suhdevastaavana kehitin Blankon yhteystyökumppanuuksia vastaamaan nykyistä mallia, joka on todettu erittäin kannattavaksi niin yrityksille, Blankon taloudelle, kuin Blankon jäsenillekin.</p>
                        </div>
                        <div className="flex-title-row">
                            <h3>Harrastukset</h3>
                            <div className="icon-item">
                                <button className="show-content-btn"><ExpandMoreIcon /></button>
                            </div>
                        </div>
                        <div className="show-content-hobbies">
                            <p>Tärkeimmät harrastukseni liittyvät koiraharrastuksiini. Pyöritän pientä kotikenneliä, jossa kasvatan suomenlapinkoiria kennelnimellä Hallakedon. Koirieni kanssa harrastan agilitya, tokoa, lammaspaimennusta ja näyttelyitä. Lisäksi harrastan muita liikunnallisia harrastuksia, kuten nyrkkeilyä ja käyn kuntosalilla. Harrastan myös paljon alaani liittyvää itseni kehittämistä vapaa-ajalla. Minulla on useita websivu projekteja, joiden avulla haluan opetella uusia teknologioita. Lisäksi teen paljon graafisia töitä ja piirrän ja maalaan jonkin verran vapaa-ajalla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}