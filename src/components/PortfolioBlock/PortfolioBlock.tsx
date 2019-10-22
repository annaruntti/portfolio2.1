import * as React from "react";
import PortfolioImage from "../../images/art.png";
import "./PortfolioBlock.scss";

export default function PortfolioBlock() {
    return (
        <div className="portfolio-block">
            <div className="container">
                <div className="flex-row">
                    <div className="flex-left">
                        <h1 className="cv-title">Portfolioni</h1>
                        <h3>Käy selaamassa töitäni portfoliostani. Portfolioon on listattu mm. tekemiäni nettisivuprojekteja, web-designia, graafista designia, ottamiani valokuvia ja tekemiäni piirustuksia ja maalauksia.</h3>
                        <button className="portfolio-btn">Lue lisää</button>
                    </div>
                    <div className="flex-right">
                        <div className="image-area">
                            <img className="portfolio-image" src={PortfolioImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}