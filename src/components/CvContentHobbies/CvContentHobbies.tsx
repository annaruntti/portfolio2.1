import * as React from "react";
import "./CvContentHobbies.scss";

export default function CvContentHobbies() {
  return (
    <section className="show-content-hobbies" aria-labelledby="hobbies-title">
      <h2 id="hobbies-title" className="visually-hidden">
        Harrastukset
      </h2>

      <article className="hobbies-content">
        <p>
          Tärkeimmät harrastukseni liittyvät koiraharrastukseeni. Pyöritän
          pientä kotikenneliä, jossa kasvatan suomenlapinkoiria kennelnimellä
          Hallakedon. Koirieni kanssa harrastan agilitya, tokoa,
          lammaspaimennusta ja näyttelyitä. Liikun myös paljon luonnossa ja
          pidän vaeltamisesta ja patikoimisesta. Marjastan ja sienestän myös
          paljon joka syksy. Harrastan myös paljon alaani liittyvää itseni
          kehittämistä vapaa-ajalla. Minulla on useita web-sivuprojekteja,
          joiden avulla haluan opetella uusia teknologioita. Lisäksi teen paljon
          graafisia töitä ja piirrän ja maalaan jonkin verran vapaa-ajalla.
        </p>
      </article>
    </section>
  );
}
