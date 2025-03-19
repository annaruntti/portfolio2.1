import React from "react";
import { ExpandableContent } from "../ExpandableContent/ExpandableContent";
import "./PortfolioArea.scss";

import PortfolioContentDesign from "../PortfolioContentDesign/PortfolioContentDesign";
import PortfolioContentWeb from "../PortfolioContentWeb/PortfolioContentWeb";
import PortfolioContentPhotography from "../PortfolioContentPhotography/PortfolioContentPhotography";

interface BlockProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const PortfolioAreaBlock: React.FC<BlockProps> = ({
  title,
  children,
  defaultExpanded = false,
}) => {
  return (
    <ExpandableContent title={title} defaultExpanded={defaultExpanded}>
      {children}
    </ExpandableContent>
  );
};

interface Props {
  class?: string;
}

const PortfolioArea: React.FC<Props> = () => {
  return (
    <div className="portfolio-area">
      <div className="container">
        <PortfolioAreaBlock title="Web-projektit" defaultExpanded={true}>
          <PortfolioContentWeb />
        </PortfolioAreaBlock>
        <PortfolioAreaBlock title="Design ja grafiikka">
          <PortfolioContentDesign />
        </PortfolioAreaBlock>
        <PortfolioAreaBlock title="Valokuvaus">
          <PortfolioContentPhotography />
        </PortfolioAreaBlock>
      </div>
    </div>
  );
};

export default PortfolioArea;
