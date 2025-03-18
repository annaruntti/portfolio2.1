import React from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import ProfileImage from "../../images/profile.jpg";
import Skills from "../Skills/Skills";
import CvContentWork from "../CvContentWork/CvContentWork";
import CvContentEducation from "../CvContentEducation/CvContentEducation";
import CvContentResponsibilities from "../CvContentResponsibilities/CvContentResponsibilities";
import CvContentHobbies from "../CvContentHobbies/CvContentHobbies";
import "./CvArea.scss";

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

const CvAreaBlock: React.FC<BlockProps> = ({
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

const CvArea: React.FC<Props> = () => {
  return (
    <div className="cv-area">
      <div className="container">
        <div className="flex-row">
          <div className="flex-item-left">
            <div className="image-cropper">
              <img className="header-image" src={ProfileImage} alt="Me" />
            </div>
            <h2 className="h1 profile-title">Anna Tiala</h2>
            <h3>CV 21.02.2024</h3>
            <hr />
            <ul className="contact-list">
              <li>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/annaruntti/"
                >
                  Linkedin
                </a>
              </li>

              <li>
                <a className="link" href="https://github.com/annaruntti">
                  Github
                </a>
              </li>
              <li>
                <a className="link" href="mailto:anruntti@gmail.com">
                  Sähköposti
                </a>
              </li>
              <li>
                <b>Oulu, Suomi</b>
              </li>
            </ul>
            <Skills />
          </div>
          <div className="flex-item-right">
            <CvAreaBlock title="Työkokemus" open={true}>
              <CvContentWork />
            </CvAreaBlock>
            <CvAreaBlock title="Koulutus">
              <CvContentEducation />
            </CvAreaBlock>
            <CvAreaBlock title="Vastuutehtävät">
              <CvContentResponsibilities />
            </CvAreaBlock>
            <CvAreaBlock title="Harrastukset">
              <CvContentHobbies />
            </CvAreaBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvArea;
