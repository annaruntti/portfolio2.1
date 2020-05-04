import * as React from "react";
import HeaderImage from "../../images/at-logo-white.png";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

export default function Header() {
  return (
    <React.Fragment>
      <Navigation />
      <header>
        <div className="container">
          <div className="header-text-area">
            <div className="flex-row">
              <div className="image-cropper">
                <img
                  className="header-image"
                  src={HeaderImage}
                  alt="Me and my dogs"
                />
              </div>
              <h1 className="header-title-name">Anna Tiala</h1>
            </div>
            <h1 className="header-title">Portfolio</h1>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
