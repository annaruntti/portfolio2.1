import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

import ProfileImage from "../../images/profile.jpg";
import Skills from "../Skills/Skills";
import CvContentWork from "../CvContentWork/CvContentWork";
import CvContentEducation from "../CvContentEducation/CvContentEducation";
import CvContentResponsibilities from "../CvContentResponsibilities/CvContentResponsibilities";
import CvContentHobbies from "../CvContentHobbies/CvContentHobbies";
import "./CvArea.scss";

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

const CvAreaBlock: React.FC<BlockProps> = ({
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
            <h3>CV 20.04.2022</h3>
            <hr />
            <p>
              linkedin.com/in/annaruntti/
              <br />
              github.com/annaruntti
              <br />
              suomenlapinkoira.net/
              <br />
              anruntti@gmail.com
              <br />
              +358452346943
              <br />
              Oulu, Suomi
              <br />
              s. 1990
              <br />
            </p>
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
