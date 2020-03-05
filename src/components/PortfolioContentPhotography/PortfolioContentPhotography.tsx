import * as React from "react";
import PregnancyImage from "../../images/pregnancy.jpg";
import AgilityImage from "../../images/agility.jpg";
import ManImage from "../../images/dad.jpg";
import CatImage from "../../images/cat.jpg";
import KokkolaImage from "../../images/kokkola.jpg";
import TwoDogsImage from "../../images/twodogs.jpg";
import SicilyImage from "../../images/sisilia.jpeg";
import "./PortfolioContentPhotography.scss";

export default function PortfolioContentPhotography() {
    return (
        <div className="show-content-photos">
            <div className="row">  
                <div className="imagebox"><img src={TwoDogsImage} alt="Two dogs" /></div>
                <div className="imagebox"><img src={SicilyImage} alt="Man in Sicily" /></div>
            </div>
            <div className="row">
                <div className="imagebox"><img src={PregnancyImage} alt="Pregnant woman" /></div>
                <div className="imagebox"><img src={KokkolaImage} alt="Birds in Kokkola" /></div>
                <div className="imagebox"><img src={AgilityImage} alt="Dog and agility" /></div>
            </div>
            <div className="row">
                <div className="imagebox"><img src={ManImage} alt="Man and sheeps" /></div>
                <div className="imagebox"><img src={CatImage} alt="Cat in Creek" /></div>
            </div>
        </div>
    )
}