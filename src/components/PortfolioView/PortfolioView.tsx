import * as React from "react";
import PortfolioTitleBlock from "../PortfolioTitleBlock/PortfolioTitleBlock";
import PortfolioArea from "../PortfolioArea/PortfolioArea";
import "./PortfolioView.scss";

export default function PortfolioView() {
  return (
    <div className="portfolio-view">
      <PortfolioTitleBlock />
      <PortfolioArea />
    </div>
  );
}
