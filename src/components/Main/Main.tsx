import * as React from "react";
import CvBlock from "../CvBlock/CvBlock";
import PortfolioBlock from "../PortfolioBlock/PortfolioBlock";
import ContactBlock from "../ContactBlock/ContactBlock";
import "./Main.scss";

export default function Main() {
    return (
        <div className="main-view">
            <CvBlock />
            <PortfolioBlock />
            <ContactBlock />
        </div>
    )
}