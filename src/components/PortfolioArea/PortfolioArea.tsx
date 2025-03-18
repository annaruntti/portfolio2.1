import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import PortfolioContentDesign from "../PortfolioContentDesign/PortfolioContentDesign";
import PortfolioContentWeb from "../PortfolioContentWeb/PortfolioContentWeb";
import PortfolioContentPhotography from "../PortfolioContentPhotography/PortfolioContentPhotography";
import "./PortfolioArea.scss";

const ContentDiv = styled("div")({
  display: "block",
});

const HiddenDiv = styled("div")({
  display: "none",
});

interface BlockProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}

const PortfolioAreaBlock: React.FC<BlockProps> = ({
  title,
  children,
  open = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(open);

  return (
    <div className="content-block">
      <div className="flex-title-row">
        <h3>{title}</h3>
        <div className="icon-item">
          <button
            className="show-content-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </button>
        </div>
      </div>
      {isOpen ? (
        <ContentDiv>{children}</ContentDiv>
      ) : (
        <HiddenDiv>{children}</HiddenDiv>
      )}
    </div>
  );
};

interface Props {
  class?: string;
}

const PortfolioArea: React.FC<Props> = () => {
  return (
    <div className="portfolio-area">
      <div className="container">
        <PortfolioAreaBlock title="Web-projektit" open={true}>
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
