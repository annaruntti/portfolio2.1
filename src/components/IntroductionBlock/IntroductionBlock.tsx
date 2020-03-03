import * as React from "react";
import "./IntroductionBlock.scss";

export default function IntroductionBlock() {
    return (
        <div className="introduction-block">
            <div className="container">
                <h1>"Minä oon Anna ja mää tykkään koodata."</h1>
                <p className="ingress">Olen Anna Tiala, 30-vuotias intohimoinen koodari ja myös UX- ja UI-desigiin, saavutettavuuteen ja graafiseen designiin hurahtanut oululainen nainen.</p>
                <p>Tämä porfolio on edelleen hyvin keskeneräinen, mutta kehitän sitä eteenpäin aina kun ehdin. Tarkoitukseni on koota tänne esille eri projektejani, joita olen vapaa-aikana tehnyt, sekä kertoa niiden taustoista. Olen tehnyt vapaa-ajalla koodausprojektieni lisäksi runsaasti mm. graafisia töitä ja halusin tehdä niille kootun julkaisupaikan.</p>
                <p>English version of my portfolio coming soon!</p>
            </div>
        </div>
    )
}