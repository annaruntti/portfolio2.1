import * as React from "react";
import CvImage from "../../images/work.png";
import "./CvBlock.scss";

export default function CvBlock() {
    return (
        <div className="cv-block">
            <div className="container">
                <div className="flex-row">
                    <div className="flex-left">
                        <h1 className="cv-title">Ansioluetteloni</h1>
                        <h3>Käy lukemassa ansioluetteloni!<br />
                            Ansioluettelossani on listattu työkokemukseni, koulutukseni, taitoni ja harrastukseni.</h3>
                        <button className="cv-btn">Lue lisää</button>
                    </div>
                    <div className="flex-right">
                        <div className="image-area">
                            <img className="cv-image" src={CvImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}