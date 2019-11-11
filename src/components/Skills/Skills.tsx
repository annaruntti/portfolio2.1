import * as React from "react";
import "./Skills.scss";

export default function Skills() {
    return (
        <div className="skills">
            <h3>Teknologiat</h3>
            <h4>Front-End</h4>
            <p>JavaScript<br />
                TypeScript<br />
                HTML5/(S)CSS
            </p>
            <h4>Back-End</h4>
            <p>Node.js<br />
                GraphQL<br />
                Java(ei tuoreessa muistissa)<br />
                Clojure(alkeet)<br />
                PHP(alkeet)
            </p>
            <h4>Frameworkit ja kirjastot</h4>
            <p>React<br />
                Redux<br />
                Reflux<br />
                Express.js<br />
                Ramda.js<br />
                JQuery<br />
                Bootstrap<br />
                Material-UI<br />
                Duet Design System
            </p>
            <h4>Mobiilikehitys</h4>
            <p>React Native</p>
            <h4>Tietokannat</h4>
            <p>PostgreSQL<br />
                MySQL
            </p>
            <h4>Pilvipalvelut</h4>
            <p>AWS<br />
                Google Cloud
            </p>
            <h4>DevOps</h4>
            <p>Docker</p>
            <h4>Buildaustyökalut</h4>
            <p>Gulp<br />
                Webpack
            </p>
            <h3>Design</h3>
            <h4>Design työkalut</h4>
            <p>
                Sketch<br />
                InVision<br />
                Zeplin<br />
                Adobe Photoshop
            </p>
            <h3>Muut taidot</h3>
            <h4>Projektityöskentely</h4>
            <p>
                Git<br />
                Trello<br />
                Jira<br />
                Scrum
            </p>
            <h4>Taiteet</h4>
            <p>Digitaalinen valokuvaus<br />
                Kuvankäsittely(Lightroom)<br />
                Graafinen suunnittelu<br />
                Piirtäminen/maalaus
            </p>
        </div>
    )
}