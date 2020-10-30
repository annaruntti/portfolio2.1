import * as React from "react";
import { LazyImage } from "react-lazy-images";

// import ATLogo from "../../images/logo-pyorea.png";
// import Placeholder1 from "../../images/placeholder-small.png";
import Placeholder2 from "../../images/placeholder2-small.png";
import PuppyStartImage from "../../images/puppy-start-view.png";
import PuppyLogo from "../../images/dog-logo-sircle.png";
import AddLitterImage from "../../images/puppy-add-litter.png";
import PuppyFrontPage from "../../images/puppy-frontpage.png";
import LitterDataImage from "../../images/puppy-litter-data.png";
import AddPuppysImage from "../../images/puppy-add-litter-puppys.png";
import MarkWeightImage from "../../images/puppy-litter-data-mark-weight.png";
import OldPortfolio1 from "../../images/old-portfolio3.png";
import OldPortfolio2 from "../../images/old-portfolio.png";
import OldPortfolio3 from "../../images/old-portfolio2.png";
import OldPortfolio4 from "../../images/old-portfolio4.png";
import CoverPhoto2 from "../../images/kesajuhlat2017.jpg";
import CoverPhoto1 from "../../images/pikkujoulut.jpg";
import CoverPhoto3 from "../../images/hype-it.jpg";
import CoverPhoto4 from "../../images/kesajuhlat2016.jpg";
import CardPhoto1 from "../../images/flowers.jpg";
import CardPhoto2 from "../../images/paint.jpg";
import CardPhoto3 from "../../images/kutsu.png";
import CardPhoto4 from "../../images/ristiaiskutsu.jpeg";
import CardPhoto5 from "../../images/pikipaimenkortti.jpg";
import CardPhoto6 from "../../images/joulukortti2.jpg";
import CardPhoto7 from "../../images/pikipaimenkortti.png";
import "./PortfolioContentWeb.scss";

export default function PortfolioContentWeb() {
  return (
    <div className="show-content-design">
      <div className="project-box">
        <div className="row">
          <div className="text-introduction">
            <h4>Vanha web-portfolioni</h4>
            <p>
              Minulla oli tätä projektiani ennen myös vanha web-portfolio, jota
              aikoinaan kehitin kun vasta opettelin enemmän web-kehitystä ja
              web-designin suunnittelua. Vanha portfolioni teknologiat:
              <br />
              - JavaScript
              <br />
              - jQuery
              <br />
              - PHP
              <br />
              - HTML
              <br />
              - CSS
              <br />
              - Bootstrap
              <br />
              <br />
              Kehitin uuden web-portfolioni erityisesti, koska halusin käyttää
              nyt hieman modernimpia teknologioita ja myös ulkoasua halusin
              uudistaa moderninnamksi säilyttäen silti persoonallisen ja
              eläväisen ulkoasun.
              <br />
              Vanha portfolioni on edelleen julki vaikka en ole kehittänyt sitä
              enää vuosiin. Se löytyy{" "}
              <a href="https://anna.suomenlapinkoira.net/">
                tästä osoitteesta
              </a>{" "}
              ja koodit löytyvät{" "}
              <a href="https://github.com/annaruntti/portfolio">GitHubista</a>
            </p>
          </div>
        </div>
        <div className="image-box">
          <div className="row">
            <div className="image-wrapper">
              <img
                className="litterplan-image"
                src={OldPortfolio2}
                alt="screenshot of old protfolio"
              />
            </div>
            <div className="image-wrapper">
              <img
                className="litterplan-image"
                src={OldPortfolio3}
                alt="screenshot of old protfolio"
              />
              <img
                className="litterplan-image"
                src={OldPortfolio1}
                alt="screenshot of old protfolio"
              />
              <img
                className="litterplan-image"
                src={OldPortfolio4}
                alt="screenshot of old protfolio"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-box">
        <div className="row">
          <div className="text-introduction">
            <h4>Pentula web-applikaatio -projekti</h4>
            <p>
              Pentula on progressiivinen web-applikaatio -projekti, jonka
              aloitin keväällä 2019. Projekti on edelleen keskeneräinen, mutta
              kehitän sitä edelleen silloin tällöin kun ehdin. Pentula koostuu
              Create React Apilla luodusta front-endin appista, sekä back-end
              API:sta.
              <br />
              <br />
              Pentula on kehitetty oman kennelini tarpeisiin, jotta voin lisätä,
              seurata ja verrata eri pentueiden tietoja ja tutkia pentujen
              kasvua lisäämästäni datasta. Lisäksi omien koirieni ja
              jalostusnarttujeni tiedot pysyvät sen avulla kätevästi tallessa.
              Pentula on tarkoitus julkaista jossakin vaiheessa myös muiden
              kasvattajien käytettäväksi kunhan ehdon kehittää sitä lisää.
              <br />
              <br />
              Pentula ei ole tällä hetkellä vielä julki, mutta sitä voi
              pyörittää koneella lokaalisti. Projektin front-end app löytyy
              GitHubista{" "}
              <a href="https://github.com/annaruntti/pentula">täältä</a> ja
              back-end API{" "}
              <a href="https://github.com/annaruntti/pentula-api">täältä.</a>
              <br />
              <br />
              Pentulassa käytetyt teknologiat:
              <br />
              <br />
              <b>Front-end:</b>
              <br />
              - JavaScript
              <br />
              - React
              <br />
              - HTML
              <br />
              - SCSS
              <br />
              - Material UI
              <br />
              <br />
              <b>Back-end:</b>
              <br />
              - Node.js
              <br />
              - Express.js
              <br />
              - Knex.js
              <br />
              - PostgreSQL
              <br />
            </p>
          </div>
        </div>
        <div className="image-box">
          <div className="row">
            <div className="image-wrapper">
              <LazyImage
                src={PuppyStartImage}
                alt="Web site layout"
                placeholder={({ imageProps, ref }) => (
                  <img
                    className="intrinsic-item animated fadeIn"
                    ref={ref}
                    src={Placeholder2}
                    alt={imageProps.alt}
                  />
                )}
                actual={({ imageProps }) => (
                  <img alt={imageProps.alt} {...imageProps} />
                )}
              />
            </div>
            <div className="image-wrapper">
              <LazyImage
                src={PuppyFrontPage}
                alt="Web site layout"
                placeholder={({ imageProps, ref }) => (
                  <img
                    className="intrinsic-item animated fadeIn"
                    ref={ref}
                    src={Placeholder2}
                    alt={imageProps.alt}
                  />
                )}
                actual={({ imageProps }) => (
                  <img alt={imageProps.alt} {...imageProps} />
                )}
              />
            </div>
            <div className="image-wrapper">
              <LazyImage
                src={AddLitterImage}
                alt="Web site layout"
                placeholder={({ imageProps, ref }) => (
                  <img
                    className="intrinsic-item animated fadeIn"
                    ref={ref}
                    src={Placeholder2}
                    alt={imageProps.alt}
                  />
                )}
                actual={({ imageProps }) => (
                  <img alt={imageProps.alt} {...imageProps} />
                )}
              />
            </div>
          </div>
          <div className="row">
            <div className="image-wrapper">
              <LazyImage
                src={AddPuppysImage}
                alt="Web site layout"
                placeholder={({ imageProps, ref }) => (
                  <img
                    className="intrinsic-item animated fadeIn"
                    ref={ref}
                    src={Placeholder2}
                    alt={imageProps.alt}
                  />
                )}
                actual={({ imageProps }) => (
                  <img alt={imageProps.alt} {...imageProps} />
                )}
              />
            </div>
            <div className="image-wrapper">
              <LazyImage
                src={LitterDataImage}
                alt="Web site layout"
                placeholder={({ imageProps, ref }) => (
                  <img
                    className="intrinsic-item animated fadeIn"
                    ref={ref}
                    src={Placeholder2}
                    alt={imageProps.alt}
                  />
                )}
                actual={({ imageProps }) => (
                  <img alt={imageProps.alt} {...imageProps} />
                )}
              />
            </div>
            <div className="image-wrapper">
              <LazyImage
                src={MarkWeightImage}
                alt="Web site layout"
                placeholder={({ imageProps, ref }) => (
                  <img
                    className="intrinsic-item animated fadeIn"
                    ref={ref}
                    src={Placeholder2}
                    alt={imageProps.alt}
                  />
                )}
                actual={({ imageProps }) => (
                  <img alt={imageProps.alt} {...imageProps} />
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-box">
        <div className="row">
          <div className="text-introduction">
            <h4>Työprojektit</h4>
            <p>
              Töissä olen tehnyt lukuisille eri asiakkaille erilaisia
              web-palveluita. Asiakkaideni toimialoja ovat olleet muunmuassa:
              <br />
              - Auteollisuus (Verkkosivut autokaupalle, UI-design auton cluster,
              IVI ja mobiili)
              <br />
              - Koulutus/oppilaitokset (Oppilaitoksen tiloihin
              tilanvarausjärjestelmä ja käyttöliittymä tilankäytöntön
              seurantaan, UI-design oppilaitoksen mobiilisovellukseen.)
              <br />
              - Finanssi/vakuutusala (Kehitystyöt vakuutusyhtiön digitaaliseen
              asiointipalveluun, ajoneuvojen vakuutuksien ostosovelluksen
              käyttöliittymän uudelleen rakentaminen saavutettavaksi.)
              <br />- Henkilöstöhallinta (Palkkailmoituspalvelun front-end
              kehitys ja tiimin lead-kehittäjän rooli)
              <br />- Lukuisia muita sisäisiä ja asiakasprojekteja Siilillä ja
              Koodiviidakolla työskennellessäni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
