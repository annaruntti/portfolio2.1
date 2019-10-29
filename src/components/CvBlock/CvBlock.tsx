import * as React from "react";
import CvImage from "../../images/work.png";
import { Link } from "react-router-dom";
import "./CvBlock.scss";

export default function CvBlock() {
    return (
        <div className="cv-block">
            <div className="container">
                <div className="flex-row">
                    <div className="flex-left">
                        <h2 className="cv-title">Ansioluetteloni</h2>
                        <p className="large-text">Käy lukemassa ansioluetteloni!<br />
                            Ansioluettelossani on listattu työkokemukseni, koulutukseni, taitoni ja harrastukseni.</p>
                        <Link to={"/cv"} className="cv-btn">Lue lisää</Link>
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