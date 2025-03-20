import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import PuppyStartImage from "../../images/puppy-start-view.png";
import PortfolioStart from "../../images/portfolio-mobile-start-view.png";
import PuppyLogo from "../../images/dog-logo-sircle.png";
import AnnaTialaLogo from "../../images/at-logo-sircle.png";
import AddLitterImage from "../../images/puppy-add-litter.png";
import PuppyFrontPage from "../../images/puppy-frontpage.png";
import CVMobileView from "../../images/mobile-cv-view.png";
import LitterDataImage from "../../images/puppy-litter-data.png";
import PortfolioMobileView from "../../images/mobile-portfolio-view.png";
import AddPuppysImage from "../../images/puppy-add-litter-puppys.png";
import ContactMobileView from "../../images/mobile-contact-view.png";
import CvDesktopView from "../../images/portfolio-cv-desktop.jpg";
import MarkWeightImage from "../../images/puppy-litter-data-mark-weight.png";
import LitterPlansImage from "../../images/umajarymy.jpg";
import LitterPlansImage2 from "../../images/mainos.jpg";
import LitterPlansImage3 from "../../images/mainos2.jpg";
import LinkedinCoverPhoto from "../../images/linkedin-coverphoto.jpg";
import CvPhoto from "../../images/new-cv.jpg";
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
import "./PortfolioContentDesign.scss";

const PortfolioContentDesign: React.FC = () => {
  return (
    <div className="show-content-design">
      <div className="project-box">
        <div className="row">
          <div className="logo-image">
            <img src={PuppyLogo} alt="Dog logo" />
          </div>
          <div className="text-introduction">
            <h4>Pentula web-applikaatio -projekti</h4>
            <p>
              Pentula on progressiivinen web-applikaatio -projekti, jonka
              aloitin keväällä 2019. Aloitin projektin
              käyttöliittymäsuunnittelulla. Leiskat tein Sketchilla. Piirsin
              myös projektin koira-logon Sketchilla käyttäen mallina koirani
              Viivin valokuvaa.
            </p>
          </div>
        </div>
        <div className="image-box">
          <div className="row">
            <div className="image-wrapper">
              <LazyLoadImage
                src={PuppyStartImage}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
            <div className="image-wrapper">
              <LazyLoadImage
                src={PuppyFrontPage}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
            <div className="image-wrapper">
              <LazyLoadImage
                src={AddLitterImage}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="row">
            <div className="image-wrapper">
              <LazyLoadImage
                src={AddPuppysImage}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
            <div className="image-wrapper">
              <LazyLoadImage
                src={LitterDataImage}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
            <div className="image-wrapper">
              <LazyLoadImage
                src={MarkWeightImage}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-box">
        <div className="row">
          <div className="logo-image">
            <img src={AnnaTialaLogo} alt="Anna Tiala logo" />
          </div>
          <div className="text-introduction">
            <h4>Uuden portfolion design</h4>
            <p>
              Aloitin uuden web-portfolioni suunnittelun vuonna 2019. Uuden
              portfolion ulkoasu koki projektin aikana isoja muutoksia ja muutin
              alkuperäistä suunnitelmaani useaan otteeseen. Leiskat tein
              Sketchilla. Piirsin myös käytetyt grafiikat itse Sketchilla.
            </p>
          </div>
        </div>
        <div className="image-box">
          <div className="row">
            <div className="image-wrapper">
              <LazyLoadImage
                src={PortfolioStart}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
            <div className="image-wrapper">
              <LazyLoadImage
                src={CVMobileView}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
            <div className="image-wrapper">
              <LazyLoadImage
                src={PortfolioMobileView}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="row">
            <div className="image-wrapper">
              <LazyLoadImage
                src={ContactMobileView}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
            <div className="image-wrapper">
              <LazyLoadImage
                src={CvDesktopView}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-box">
        <div className="row">
          <div className="logo-image">
            <img src={AnnaTialaLogo} alt="Anna Tiala logo" />
          </div>
          <div className="text-introduction">
            <h4>Uuden portfolion kanssa yhtenäinen design</h4>
            <p>
              Luotuani grafiikkaa ja uuden graafisen ilmeen uuteen
              web-portfoliooni, halusin samaa tyyliä myös muualle. Loin
              Skethillä Linkedin-profiiliini uuden coverphoton, sekä uudistin
              CV:ni, johon otin mukaan portfoliostani tuttuja värejä, fontteja
              ja grafiikkoja.
            </p>
          </div>
        </div>
        <div className="image-box">
          <div>
            <h5>Portfolion tyylien kanssa yhtenäinen ansioluettelo</h5>
          </div>
          <div className="row">
            <div className="image-wrapper">
              <LazyLoadImage
                src={CvPhoto}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div>
            <h5>
              Portfolion tyylien kanssa yhtenäinen "cover photo"
              Linkedin-profiiliini
            </h5>
          </div>
          <div className="row">
            <div className="image-wrapper">
              <LazyLoadImage
                src={LinkedinCoverPhoto}
                alt="Web site layout"
                effect="blur"
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-box">
        <div className="row">
          <div className="text-introduction">
            <h4>Pentuemainokset</h4>
            <p>
              Olen tehnyt oman kennelini pentuesuunnitelmista, sekä muiden
              tuttujen kasvattajien pentuesuunnitelmista mainoksia, joissa on
              ollut tietoa ja kuvia tulevan pentueen vanhemmista. Tässä joitakin
              tekemistäni mainoksista. Mainokset olen tehnyt käyttäen Adobe
              Photoshop -ohjelmaa.
            </p>
          </div>
        </div>
        <div className="image-box">
          <div className="row">
            <div className="image-wrapper">
              <img
                className="litterplan-image"
                src={LitterPlansImage}
                alt="Litterplan"
              />
            </div>
            <div className="image-wrapper">
              <img
                className="litterplan-image"
                src={LitterPlansImage3}
                alt="Litterplan"
              />
            </div>
            <div className="image-wrapper">
              <img
                className="litterplan-image"
                src={LitterPlansImage2}
                alt="Litterplan"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-box">
        <div className="row">
          <div className="text-introduction">
            <h4>Facebook-tapahtumien coverphotot</h4>
            <p>
              Olen tehnyt eri yhdistyksien käyttöön niiden Facebook-tapahtumiin
              "coverphotoja". Olen tehnyt kuviin grafiikkaa ja muokannut kuvat
              käyttäen valkovia, eri fontteja ja greaafisia elementtejä. Kuvat
              olen tehnyt Adobe Photoshopilla.
            </p>
          </div>
        </div>
        <div className="image-box">
          <div className="row">
            <div className="image-coverphoto-wrapper">
              <img
                className="coverphoto-image"
                src={CoverPhoto2}
                alt="Facebook coverphoto"
              />
            </div>
            <div className="image-coverphoto-wrapper">
              <img
                className="coverphoto-image"
                src={CoverPhoto1}
                alt="Facebook coverphoto"
              />
            </div>
          </div>
          <div className="row">
            <div className="image-coverphoto-wrapper">
              <img
                className="coverphoto-image"
                src={CoverPhoto3}
                alt="Facebook coverphoto"
              />
            </div>
            <div className="image-coverphoto-wrapper">
              <img
                className="coverphoto-image"
                src={CoverPhoto4}
                alt="Facebook coverphoto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="project-box">
        <div className="row">
          <div className="text-introduction">
            <h4>Kutsukortit ja joulukortit</h4>
            <p>
              Olen tehnyt useana vuonna joulukortteja omaan käyttööni, sekä
              pyynnöstä myös läheisteni käyttöön. Lisäksi olen tehnyt joitakin
              kutsukortteja omaan käyttööni sekä sisarelleni. Korttien teossa
              olen maalannut itse paperille joitakin osia, jonka jälkeen olen
              kuvannut ne ja editoinut Photoshopissa muut korttien osat.
            </p>
          </div>
        </div>
        <div className="image-box">
          <div className="row">
            <div className="paint-images">
              <div className="image-paint-wrapper">
                <img src={CardPhoto1} alt="Flower painting" />
              </div>
              <div className="image-paint-wrapper">
                <img src={CardPhoto2} alt="Painting for background" />
              </div>
            </div>
            <div className="image-card-wrapper">
              <img src={CardPhoto3} alt="Wedding card" />
            </div>
          </div>
          <div className="row">
            <div className="image-card-wrapper">
              <img src={CardPhoto4} alt="Baby card" />
            </div>
            <div className="paint-images">
              <div className="image-paint-wrapper">
                <img src={CardPhoto5} alt="Christmas card" />
              </div>
              <div className="image-paint-wrapper">
                <img src={CardPhoto6} alt="Christmas card" />
              </div>
              <div className="image-paint-wrapper">
                <img src={CardPhoto7} alt="Christmas card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContentDesign;
