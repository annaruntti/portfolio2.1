import * as React from "react";
import HeaderImage from "../../images/anna.jpg";
import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="flex-row">
                    <div className="flex-left">
                        <div className="image-cropper">
                            <img className="header-image" src={HeaderImage} alt="" />
                        </div>
                    </div>
                    <div className="flex-right">
                        <h1 className="header-title">Anna Tiala</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
