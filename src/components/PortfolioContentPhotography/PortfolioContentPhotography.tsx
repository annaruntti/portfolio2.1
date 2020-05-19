import * as React from "react";
import { LazyImage } from "react-lazy-images";

import Placeholder1 from "../../images/placeholder-small.png";
import Placeholder2 from "../../images/placeholder2-small.png";
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
          <LazyImage
            src={TwoDogsImage}
            alt="Two dogs"
            placeholder={({ imageProps, ref }) => (
              <img
                className="intrinsic-item animated fadeIn"
                ref={ref}
                src={Placeholder1}
                alt={imageProps.alt}
              />
            )}
            actual={({ imageProps }) => (
              <img alt="placeholder" {...imageProps} />
            )}
          />
        </div>
        <div className="imagebox">
          <LazyImage
            src={SicilyImage}
            alt="Man in Sicily"
            placeholder={({ imageProps, ref }) => (
              <img
                className="intrinsic-item animated fadeIn"
                ref={ref}
                src={Placeholder1}
                alt={imageProps.alt}
              />
            )}
            actual={({ imageProps }) => (
              <img alt="placeholder" {...imageProps} />
            )}
          />
        </div>
      </div>
      <div className="row">
        <div className="imagebox">
          <LazyImage
            src={PregnancyImage}
            alt="Pregnant woman"
            placeholder={({ imageProps, ref }) => (
              <img
                className="intrinsic-item animated fadeIn"
                ref={ref}
                src={Placeholder2}
                alt={imageProps.alt}
              />
            )}
            actual={({ imageProps }) => (
              <img alt="placeholder" {...imageProps} />
            )}
          />
        </div>
        <div className="imagebox">
          <LazyImage
            src={KokkolaImage}
            alt="Birds in Kokkola"
            placeholder={({ imageProps, ref }) => (
              <img
                className="intrinsic-item animated fadeIn"
                ref={ref}
                src={Placeholder2}
                alt={imageProps.alt}
              />
            )}
            actual={({ imageProps }) => (
              <img alt="placeholder" {...imageProps} />
            )}
          />
        </div>
        <div className="imagebox">
          <LazyImage
            src={AgilityImage}
            alt="Agility dog"
            placeholder={({ imageProps, ref }) => (
              <img
                className="intrinsic-item animated fadeIn"
                ref={ref}
                src={Placeholder2}
                alt={imageProps.alt}
              />
            )}
            actual={({ imageProps }) => (
              <img alt="placeholder" {...imageProps} />
            )}
          />
        </div>
      </div>
      <div className="row">
        <div className="imagebox">
          <LazyImage
            src={ManImage}
            alt="Man and sheeps"
            placeholder={({ imageProps, ref }) => (
              <img
                className="intrinsic-item animated fadeIn"
                ref={ref}
                src={Placeholder1}
                alt={imageProps.alt}
              />
            )}
            actual={({ imageProps }) => (
              <img alt="placeholder" {...imageProps} />
            )}
          />
        </div>
        <div className="imagebox">
          <LazyImage
            src={CatImage}
            alt="Cat in Greek"
            placeholder={({ imageProps, ref }) => (
              <img
                className="intrinsic-item animated fadeIn"
                ref={ref}
                src={Placeholder1}
                alt={imageProps.alt}
              />
            )}
            actual={({ imageProps }) => (
              <img alt="placeholder" {...imageProps} />
            )}
          />
        </div>
      </div>
    </div>
  );
}
