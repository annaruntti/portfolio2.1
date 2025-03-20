import "./CvContentEducation.scss";

export default function CvContentEducation() {
  return (
    <section className="show-content-studies" aria-labelledby="education-title">
      <h2 id="education-title" className="visually-hidden">
        Koulutus
      </h2>

      <article className="education-item">
        <h4>
          Tietojenkäsittelytieteiden opintoja, Oulun yliopisto, Sähkö- ja
          tietotekniikan tiedekunta
        </h4>
        <ul>
          <li>Pääaine: Tietojenkäsittelytieteet, 2010-2018</li>
          <li>Sivuaine: Elokuva-analyysi, humanistinen tiedekunta, 2015</li>
          <li>
            Sivuaine: Johtaminen, Oulun yliopiston kauppakorkeakoulu, 2013
          </li>
        </ul>
      </article>

      <article className="education-item">
        <h4>Ylioppilas, 2009, Kiimingin lukio</h4>
      </article>
    </section>
  );
}
