import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

import PortfolioContentPhotography from "../PortfolioContentPhotography/PortfolioContentPhotography";
import PortfolioContentDesign from "../PortfolioContentDesign/PortfolioContentDesign";
import "./PortfolioArea.scss";

const useStyles = makeStyles({
  showContent: {
    display: "block"
  },
  hideContent: {
    display: "none"
  }
});

interface BlockProps {
  title: string;
  children: React.ReactNode;
  open?: Boolean;
}

const PortfolioAreaBlock: React.FC<BlockProps> = ({
  title,
  children,
  open = false
}) => {
  const classes = useStyles({});
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
      <div className={isOpen ? classes.showContent : classes.hideContent}>
        {children}
      </div>
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
        <PortfolioAreaBlock title="Valokuvaus" open={true}>
          <PortfolioContentPhotography />
        </PortfolioAreaBlock>
        <PortfolioAreaBlock title="Design ja grafiikka">
          <PortfolioContentDesign />
        </PortfolioAreaBlock>
      </div>
    </div>
  );
};

export default PortfolioArea;
