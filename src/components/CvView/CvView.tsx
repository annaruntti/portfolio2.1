import * as React from "react";
import TitleBlock from "../TitleBlock/TitleBlock";
import CvArea from "../CvArea/CvArea";
import "./CvView.scss";

export default function CvView() {
    return (
        <div className="cv-view">
            <TitleBlock />
            <CvArea />
        </div>
    )
}