import * as React from "react";
import "./IntroductionBlock.scss";

interface BlockProps {
  // id: string;
}

const IntroductionBlock: React.FC<BlockProps> = () => {
  return (
    <div className="introduction-block">
      <h2 className="h1">"Minä oon Anna ja mää tykkään koodata."</h2>
      <p className="ingress">
        Olen 35-vuotias, oppimaan innokas koodari Anna ja hurahtanut pahasti
        myös käytettävyys- ja käyttökokemus-
        <br />
        suunnitteluun, saavutettavuuteen ja graafiseen suunnitteluun.
      </p>
      <p>
        Tämä porfolio on edelleen hyvin keskeneräinen, mutta kehitän sitä
        eteenpäin aina kun ehdin. Tarkoitukseni on koota tänne esille eri
        projektejani, joita olen vapaa-ajallani tehnyt, sekä kertoa niiden
        taustoista. Olen tehnyt vapaa-ajalla koodausprojektieni lisäksi
        runsaasti mm. graafisia töitä ja halusin tehdä niille kootun
        julkaisupaikan.
      </p>
      <p>English version of my portfolio coming soon!</p>
    </div>
  );
};

export default IntroductionBlock;
