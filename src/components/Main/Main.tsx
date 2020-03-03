import * as React from "react";
import CvBlock from "../CvBlock/CvBlock";
import PortfolioBlock from "../PortfolioBlock/PortfolioBlock";
import ContactBlock from "../ContactBlock/ContactBlock";
import IntroductionBlock from "../IntroductionBlock/IntroductionBlock";
import "./Main.scss";

export default function Main() {
    return (
        <div className="main-view">
            <IntroductionBlock />
            <CvBlock />
            <PortfolioBlock />
            <ContactBlock />
        </div>
    )
}