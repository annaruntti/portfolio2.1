import * as React from "react";
import PuppyStartImage from "../../images/puppy-start-view.png";
import PuppyLogo from "../../images/dog-logo-sircle.png";
import AddLitterImage from "../../images/puppy-add-litter.png";
import PuppyFrontPage from "../../images/puppy-frontpage.png";
import LitterDataImage from "../../images/puppy-litter-data.png";
import AddPuppysImage from "../../images/puppy-add-litter-puppys.png";
import MarkWeightImage from "../../images/puppy-litter-data-mark-weight.png";
import LitterPlansImage from "../../images/umajarymy.jpg"
import LitterPlansImage2 from "../../images/mainos.jpg"
import LitterPlansImage3 from "../../images/mainos2.jpg"
import "./PortfolioContentDesign.scss";

export default function PortfolioContentDesign() {
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
                            Pentula on progressiivinen web-applikaatio -projekti, jonka aloitin keväällä 2019. Aloitin projektin käyttöliittymäsuunnittelulla. Leiskat tein Sketchilla. Piirsin myös projektin koira-logon Sketchilla käyttäen mallina koirani Viivin valokuvaa.
                        </p>
                    </div>
                </div>
                <div className="image-box">
                    <div className="row">
                        <div className="image-wrapper">
                            <img src={PuppyStartImage} alt="Web site layout" />
                        </div>
                        <div className="image-wrapper">
                            <img src={PuppyFrontPage} alt="Web site layout" />
                        </div>
                        <div className="image-wrapper">
                            <img src={AddLitterImage} alt="Web site layout" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="image-wrapper">
                            <img src={AddPuppysImage} alt="Web site layout" />
                        </div>
                        <div className="image-wrapper">
                            <img src={LitterDataImage} alt="Web site layout" />
                        </div>
                        <div className="image-wrapper">
                            <img src={MarkWeightImage} alt="Web site layout" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <div className="row">
                    <div className="text-introduction">
                        <h4>Pentuemainokset</h4>
                        <p>
                            Olen tehnyt oman kennelini pentuesuunnitelmista, sekä muiden tuttujen kasvattajien pentuesuunnitelmista mainoksia, joissa on ollut tietoa ja kuvia tulevan pentueen vanhemmista. Tässä joitakin tekemistäni mainoksista. Mainokset olen tehnyt käyttäen Adobe Photoshop -ohjelmaa.
                        </p>
                    </div>
                </div>
                <div className="image-box">
                    <div className="row">
                        <div className="image-wrapper">
                            <img className="litterplan-image" src={LitterPlansImage} alt="Web site layout" />
                        </div>
                        <div className="image-wrapper">
                            <img className="litterplan-image" src={LitterPlansImage3} alt="Web site layout" />
                        </div>
                        <div className="image-wrapper">
                            <img className="litterplan-image" src={LitterPlansImage2} alt="Web site layout" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}