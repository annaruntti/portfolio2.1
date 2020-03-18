import * as React from "react";
import { LazyImage } from "react-lazy-images";

import ATLogo from "../../images/logo-pyorea.png";
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
                    {/* <img src={TwoDogsImage} alt="Two dogs" /> */}
                    <LazyImage
                        src={TwoDogsImage}
                        alt="Two dogs"
                        placeholder={({ imageProps, ref }) => (
                            <img ref={ref} src={ATLogo} alt={imageProps.alt} />
                        )}
                        actual={({ imageProps }) => <img {...imageProps} />}
                    />
                </div>
                <div className="imagebox">
                    {/* <img src={SicilyImage} alt="Man in Sicily" /> */}
                    <LazyImage
                        src={SicilyImage}
                        alt="Man in Sicily"
                        placeholder={({ imageProps, ref }) => (
                            <img ref={ref} src={ATLogo} alt={imageProps.alt} />
                        )}
                        actual={({ imageProps }) => <img {...imageProps} />}
                    />
                </div>
            </div>
            <div className="row">
                <div className="imagebox">
                    {/* <img src={PregnancyImage} alt="Pregnant woman" /> */}
                    <LazyImage
                        src={PregnancyImage}
                        alt="Pregnant woman"
                        placeholder={({ imageProps, ref }) => (
                            <img ref={ref} src={ATLogo} alt={imageProps.alt} />
                        )}
                        actual={({ imageProps }) => <img {...imageProps} />}
                    />
                </div>
                <div className="imagebox">
                    {/* <img src={KokkolaImage} alt="Birds in Kokkola" /> */}
                    <LazyImage
                        src={KokkolaImage}
                        alt="Birds in Kokkola"
                        placeholder={({ imageProps, ref }) => (
                            <img ref={ref} src={ATLogo} alt={imageProps.alt} />
                        )}
                        actual={({ imageProps }) => <img {...imageProps} />}
                    />
                </div>
                <div className="imagebox">
                    {/* <img src={AgilityImage} alt="Agility dog" /> */}
                    <LazyImage
                        src={AgilityImage}
                        alt="Agility dog"
                        placeholder={({ imageProps, ref }) => (
                            <img ref={ref} src={ATLogo} alt={imageProps.alt} />
                        )}
                        actual={({ imageProps }) => <img {...imageProps} />}
                    />
                </div>
            </div>
            <div className="row">
                <div className="imagebox">
                    {/* <img src={ManImage} alt="Man and sheeps" /> */}
                    <LazyImage
                        src={ManImage}
                        alt="Man and sheeps"
                        placeholder={({ imageProps, ref }) => (
                            <img ref={ref} src={ATLogo} alt={imageProps.alt} />
                        )}
                        actual={({ imageProps }) => <img {...imageProps} />}
                    />
                </div>
                <div className="imagebox">
                    {/* <img src={CatImage} alt="Cat in Greek" /> */}
                    <LazyImage
                        src={CatImage}
                        alt="Cat in Greek"
                        placeholder={({ imageProps, ref }) => (
                            <img ref={ref} src={ATLogo} alt={imageProps.alt} />
                        )}
                        actual={({ imageProps }) => <img {...imageProps} />}
                    />
                </div>
            </div>
        </div>
    )
}