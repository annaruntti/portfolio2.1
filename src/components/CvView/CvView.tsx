import * as React from "react";
import TitleBlock from "../TitleBlock/TitleBlock";
import CvArea from "../CvArea/CvArea";
// import PortfolioLinkBlock from "../PortfolioLinkBlock/PortfolioLinkBlock";
// import ContactLinkBlock from "../ContactLinkBlock/ContactLinkBlock";
import "./CvView.scss";

export default function CvView() {
    return (
        <div className="cv-view">
            <TitleBlock />
            <CvArea />
            {/* <PortfolioLinkBlock /> */}
            {/* <ContactLinkBlock /> */}
        </div>
    )
}