import * as React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import "./ExpandableContent.scss";

interface ExpandableContentProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const ContentDiv = styled("div")({
  display: "block",
});

const HiddenDiv = styled("div")({
  display: "none",
});

export const ExpandableContent: React.FC<ExpandableContentProps> = ({
  title,
  children,
  defaultExpanded = false,
}) => {
  const [isVisible, setIsVisible] = React.useState(defaultExpanded);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="content-block">
      <div className="flex-title-row">
        <h3>{title}</h3>
        <div className="icon-item">
          <button
            className="show-content-btn"
            onClick={toggleContent}
            aria-expanded={isVisible}
            aria-controls={`content-${title.toLowerCase().replace(/\s+/g, "-")}`}
            aria-label={`${isVisible ? "Piilota" : "Näytä"} ${title} sisältö`}
          >
            {isVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </button>
        </div>
      </div>
      {isVisible ? (
        <ContentDiv id={`content-${title.toLowerCase().replace(/\s+/g, "-")}`}>
          {children}
        </ContentDiv>
      ) : (
        <HiddenDiv>{children}</HiddenDiv>
      )}
    </div>
  );
};
