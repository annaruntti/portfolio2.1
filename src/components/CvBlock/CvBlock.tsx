import CvImage from "../../images/work.png";
import { Link } from "react-router-dom";
import IntroductionBlock from "../IntroductionBlock/IntroductionBlock";
import "./CvBlock.scss";

export default function CvBlock() {
  return (
    <div className="cv-block">
      <div className="container">
        <IntroductionBlock />
        <div className="flex-row">
          <div className="flex-left">
            <h3 className="h2 cv-title">Ansioluetteloni</h3>
            <p className="large-text">
              Käy lukemassa ansioluetteloni!
              <br />
              Ansioluettelossani on listattu työkokemukseni, koulutukseni,
              taitoni ja harrastukseni.
            </p>
            <Link to={"/cv"} className="cv-btn">
              Ansioluetteloon
            </Link>
          </div>
          <div className="flex-right">
            <div className="image-area">
              <img className="cv-image" src={CvImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
