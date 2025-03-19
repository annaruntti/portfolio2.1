import * as React from "react";
import "./Skills.scss";

export default function Skills() {
  return (
    <section className="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="visually-hidden">
        Taidot ja teknologiat
      </h2>

      <section
        className="technical-skills"
        aria-labelledby="technical-skills-title"
      >
        <h3 id="technical-skills-title">Teknologiat</h3>

        <div className="skills-row">
          <div className="skills-column">
            <article className="skill-category">
              <h4>Front-End</h4>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML5/(S)CSS</li>
              </ul>
            </article>

            <article className="skill-category">
              <h4>Mobiilikehitys</h4>
              <ul>
                <li>React Native</li>
              </ul>
            </article>
          </div>

          <div className="skills-column">
            <article className="skill-category">
              <h4>Back-End</h4>
              <ul>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>Java (ei tuoreessa muistissa)</li>
                <li>Clojure (alkeet)</li>
                <li>PHP (alkeet)</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="skills-row">
          <div className="skills-column">
            <article className="skill-category">
              <h4>Frameworkit ja kirjastot</h4>
              <ul>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>Express.js</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>Material-UI</li>
                <li>Chakra UI</li>
                <li>Tailwind CSS</li>
                <li>Duet Design System</li>
              </ul>
            </article>
          </div>

          <div className="skills-column">
            <article className="skill-category">
              <h4>Alustat ja sisällönhallinta</h4>
              <ul>
                <li>Contentful</li>
                <li>Adobe Commerce (entinen Magento)</li>
                <li>Wordpress</li>
                <li>LianaCMS, entinen Sivuviidakko</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="skills-row">
          <div className="skills-column">
            <article className="skill-category">
              <h4>Tietokannat</h4>
              <ul>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </article>
          </div>

          <div className="skills-column">
            <article className="skill-category">
              <h4>Pilvipalvelut</h4>
              <ul>
                <li>AWS</li>
                <li>Google Cloud</li>
                <li>Azure</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="skills-row">
          <div className="skills-column">
            <article className="skill-category">
              <h4>DevOps</h4>
              <ul>
                <li>Docker</li>
                <li>Jenkis</li>
                <li>CI/CD</li>
              </ul>
            </article>
          </div>

          <div className="skills-column">
            <article className="skill-category">
              <h4>AI-työkalut</h4>
              <ul>
                <li>Github Copilot</li>
                <li>Cursor</li>
                <li>ChatGPT</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="skills-row">
          <div className="skills-column">
            <article className="skill-category">
              <h4>Design työkalut</h4>
              <ul>
                <li>Figma</li>
                <li>Sketch</li>
                <li>InVision</li>
                <li>Zeplin</li>
                <li>Adobe Photoshop</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="other-skills" aria-labelledby="other-skills-title">
        <h3 id="other-skills-title">Muut taidot</h3>

        <div className="skills-row">
          <div className="skills-column">
            <article className="skill-category">
              <h4>Projektityöskentely</h4>
              <ul>
                <li>Git</li>
                <li>Trello</li>
                <li>Jira</li>
                <li>Scrum</li>
              </ul>
            </article>
          </div>

          <div className="skills-column">
            <article className="skill-category">
              <h4>Taiteet</h4>
              <ul>
                <li>Digitaalinen valokuvaus</li>
                <li>Kuvankäsittely (Lightroom)</li>
                <li>Graafinen suunnittelu</li>
                <li>Piirtäminen/maalaus</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}
