import * as React from "react";
import ProfileImage from "../../images/profile.jpg";
import Skills from "../Skills/Skills";
import "./CvArea.scss";

export default function CvArea() {
    return (
        <div className="cv-area">
            <div className="container">
                <div className="flex-row">
                    <div className="flex-item-left">
                        <div className="image-cropper">
                            <img className="header-image" src={ProfileImage} alt="My profile image" />
                        </div>
                        <h1 className="profile-title">Anna Tiala</h1>
                        <h3>CV 11.11.2019</h3><hr />
                        <h3>Yhteystiedot</h3>
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
                        <h3>Koulutus</h3>
                        <p><b>Tietojenkäsittelytieteiden opintoja, Oulun yliopisto, Sähkö- ja tietotekniikan tiedekunta</b><br />
                            - Pääaine: Tietojenkäsittelytieteet, 2010-2018<br />
                            - Sivuaine: Elokuva-analyysi, humanistinen tiedekunta, 2015<br />
                            - Sivuaine: Johtaminen, Oulun yliopiston kauppakorkeakoulu, 2013</p>

                        <p>Ylioppilas, 2009, Kiimingin lukio</p>

                        <h3>Työkokemus</h3>

                        <p><b>Siili Solutions Oyj 04/2018 -> nykyhetki, Web developer, konsultti</b><br />
                            Työskentely konsulttina asiakasprojekteissa toimien full-stack web-kehittäjän tehtävissä. Lisäksi käytettävyys- ja käyttökokemussunnittelutehtäviä. Käytetyt teknologiat mm. React.js, Ramda.js, JavaScript, NodeJS, PostgreSQL, Java, React Native.
                        </p>

                        <p><b>Koodiviidakko Oy, 10/2017-04/2018, Front-end Developer</b><br />
                            Työskentely asiakasprojekteissa, tehtävinä web-sivujen ja sivustojen luominen käyttäen sisäistä Sivuviidakko -nimistä CMS:ää. Käytettyinä teknologioina HTML5, SCSS, JavaScript ja JQuery</p>

                        <p><b>Koodiviidakko Oy, 10/2016-10/2017, Junior Front-end Developer</b><br />
                            Työskentely asiakasprojekteissa, tehtävinä web-sivujen ja sivustojen luominen käyttäen sisäistä Sivuviidakko -nimistä CMS:ää. Osan ajasta työskentelin kansainvälisessä tiimissä kansainvälisten asiakkuuksien ja työtovereiden kanssa. Lisäksi suunnittelin uutiskirjeiden ulkoasuja.</p>

                        <p><b>Koodiviidakko Oy, 09/2016-10/2016, Front-end Developer Trainee</b><br />
                            Työskentely asiakasprojekteissa, tehtävinä uutiskirjeiden luominen käyttäen sisäistä Postiviidakkoviidakko -nimistä työkalua. Lisäksi rakensin web-sivuja käyttäen sisäistä Sivuviidakko -nimistä CMS:ää. Käytetyt teknologiat HTML and CSS. Lisäksi suunnittelin uutiskirjeiden ulkoasuja.</p>

                        <p><b>Nokia Networks, 05/2016-08/2016, 05/2015-08/2015, 05/2014-09/2014, 06/2013-08/2013 and 06/2011-08/2011, Seasonal trainee</b><br />
                            Tuotannon työtehtävät tiimin kanssa. Eloktroniikkatyöntekijän tehtävät sekä laaduntarkastustehtävät.</p>

                        <p><b>Tulikurkku Oy, 08/2009-05/2015, Myyjä, kokki, pääluottamusmies</b><br />
                            Elintarvikkeiden myynti ja valmistustehtävät. Vastuualueitani olivat myös mm. inventaarioiden hallinta. Lisäksi toimiminen yrityksen pääluottamusmiehenä.</p>

                        <h3>Vastuutehtävät</h3>
                        <p>TIVIA Oulu (Pohjois-Pohjanman tietojenkäsittely-yhdistys), puheenjohtaja 2019, varapuheenjohtaja 2018, puheenjohtaja 2017, varapuheenjohtaja 2016<br />
                            TIVIA Oulu (entinen Potky ry) Tivia Oulu eli aiemmalta nimeltään POTKY ry on Tietotekniikan Liiton alainen itsenäinen jäsenyhdistys, jonka nykyinen jäsenmäärä on yli 200 henkilöä. TIVIA Oulun kantavana toiminta-ajatuksena on ollut aina sen perustamisesta saakka toimia tietotekniikan parissa työskentelevien yksityisten henkilöiden ja yhteisöjen yhdyssiteenä Pohjois-Pohjanmaalla ja edistää tietotekniikan mahdollisimman tehokasta hyväksikäyttöä.
                            Tavoitteensa toteuttamiseksi yhdistys järjestää kokouksia, koulutustilaisuuksia, seminaareja sekä tutustumismatkoja yhdistyksen jäsenten ammatillista toimintaa edistäviin organisaatioihin.</p>

                        <p>Oulun luonnontieteilijät ry, Suhdevastaava, 2016<br />
                            Oulun luonnontieteilijät ry on kattojärjestö Oulun yliopiston ainejärjestöille. Sudevastaavana tehtäviini kuului organisaation suhteista, yhteystyökumppanuuksista ja PR:sta vastaaminen.</p>

                        <p>Blanko ry, Puheenjohtaja, 2015<br />
                            Blanko on Oulun yliopiston tietojenkäsittelytieteiden ainejärjestö. Hallituksen puheenjohtajana tehtäviini kuului järjestön toiminnan johtaminen, suunnittelu ja hallinta.</p>

                        <p>Blanko ry, Suhdevastaava, 2013-2014<br />
                            Suhdevastaava on yksi Blankon hallituksen jäsenistä. Suhdevastaava vastaa järjestön yhteistyökumppanuuksista ja niiden hankkimisesta. Blankon toiminta rahoitetaan pitkälti yritysyhteystyösopimuksista saatavilla varoilla. Suhdevastaavana kehitin Blankon yhteystyökumppanuuksia vastaamaan nykyistä mallia, joka on todettu erittäin kannattavaksi niin yrityksille, Blankon taloudelle, kuin Blankon jäsenillekin.</p>

                        <h3>Harrastukset</h3>
                        <p>Tärkeimmät harrastukseni liittyvät koiraharrastuksiini. Pyöritän pientä kotikenneliä, jossa kasvatan suomenlapinkoiria kennelnimellä Hallakedon. Koirieni kanssa harrastan agilitya, tokoa, lammaspaimennusta ja näyttelyitä. Lisäksi harrastan muita liikunnallisia harrastuksia, kuten nyrkkeilyä ja käyn kuntosalilla. Harrastan myös paljon alaani liittyvää itseni kehittämistä vapaa-ajalla. Minulla on useita websivu projekteja, joiden avulla haluan opetella uusia teknologioita. Lisäksi teen paljon graafisia töitä ja piirrän ja maalaan jonkin verran vapaa-ajalla.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}