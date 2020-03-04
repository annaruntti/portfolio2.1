import * as React from "react";
import PregnancyImage from "../../images/pregnancy.jpg";
import BirdsImage from "../../images/agility.jpg";
import AgilityImage from "../../images/agility.jpg";
import ManImage from "../../images/dad.jpg";
import CatImage from "../../images/cat.jpg";
import "./PortfolioContentPhotography.scss";

export default function PortfolioContentPhotography() {
    return (
        <div className="show-content-photos">
            <div className="row">
                <div className="imagebox"><img src={PregnancyImage} alt="Pregnant woman" /></div>
                <div className="imagebox"><img src={BirdsImage} alt="Birds on the sky" /></div>
                <div className="imagebox"><img src={AgilityImage} alt="Dog and agility" /></div>
            </div>
            <div className="row">
                <div className="imagebox"><img src={ManImage} alt="Man and sheeps" /></div>
                <div className="imagebox"><img src={CatImage} alt="Cat in Creek" /></div>
            </div>
        </div>
    )
}