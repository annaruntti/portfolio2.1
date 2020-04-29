import * as React from "react";
import "./IntroductionBlock.scss";

interface BlockProps {
  // id: string;
}

const IntroductionBlock: React.FC<BlockProps> = () => {
  return (
    <div className="introduction-block">
      <h1 id="main-content">"Minä oon Anna ja mää tykkään koodata."</h1>
      <p className="ingress">
        Olen 30-vuotias, oppimaan innokas koodari Anna ja hurahtanut pahasti
        myös käytettävyys- ja käyttökokemussuunnitteluun, saavutettavuuteen ja
        graafiseen suunnitteluun.
      </p>
      <p>
        Tämä porfolio on edelleen hyvin keskeneräinen, mutta kehitän sitä
        eteenpäin aina kun ehdin. Tarkoitukseni on koota tänne esille eri
        projektejani, joita olen vapaa-aikana tehnyt, sekä kertoa niiden
        taustoista. Olen tehnyt vapaa-ajalla koodausprojektieni lisäksi
        runsaasti mm. graafisia töitä ja halusin tehdä niille kootun
        julkaisupaikan.
      </p>
      <p>English version of my portfolio coming soon!</p>
    </div>
  );
};

export default IntroductionBlock;
