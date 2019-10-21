import * as React from "react";
import HeaderImage from "../../images/at-logo-white.png";
import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="flex-row">
                    <div className="flex-left">
                        <h1 className="header-title">Portfolio</h1>
                    </div>
                    <div className="flex-right">
                        <div className="flex-row">
                            <div className="image-cropper">
                                <img className="header-image" src={HeaderImage} alt="" />
                            </div>
                            <h1 className="header-title-name">Anna Tiala</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
