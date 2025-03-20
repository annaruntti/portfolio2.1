import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PregnancyImage from "../../images/pregnancy.jpg";
import AgilityImage from "../../images/agility.jpg";
import ManImage from "../../images/dad.jpg";
import CatImage from "../../images/cat.jpg";
import KokkolaImage from "../../images/kokkola.jpg";
import TwoDogsImage from "../../images/twodogs.jpg";
import SicilyImage from "../../images/sisilia.jpeg";
import "./PortfolioContentPhotography.scss";

export default function PortfolioContentPhotography() {
  return (
    <div className="show-content-photos">
      <div className="row">
        <div className="imagebox">
          <LazyLoadImage
            src={TwoDogsImage}
            alt="Two dogs"
            effect="blur"
            width="100%"
            height="auto"
          />
        </div>
        <div className="imagebox">
          <LazyLoadImage
            src={SicilyImage}
            alt="Man in Sicily"
            effect="blur"
            width="100%"
            height="auto"
          />
        </div>
      </div>
      <div className="row">
        <div className="imagebox">
          <LazyLoadImage
            src={PregnancyImage}
            alt="Pregnant woman"
            effect="blur"
            width="100%"
            height="auto"
          />
        </div>
        <div className="imagebox">
          <LazyLoadImage
            src={KokkolaImage}
            alt="Birds in Kokkola"
            effect="blur"
            width="100%"
            height="auto"
          />
        </div>
        <div className="imagebox">
          <LazyLoadImage
            src={AgilityImage}
            alt="Agility dog"
            effect="blur"
            width="100%"
            height="auto"
          />
        </div>
      </div>
      <div className="row">
        <div className="imagebox">
          <LazyLoadImage
            src={ManImage}
            alt="Man and sheeps"
            effect="blur"
            width="100%"
            height="auto"
          />
        </div>
        <div className="imagebox">
          <LazyLoadImage
            src={CatImage}
            alt="Cat in Greek"
            effect="blur"
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
}
