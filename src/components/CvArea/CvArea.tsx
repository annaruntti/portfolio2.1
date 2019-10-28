import * as React from "react";
import ProfileImage from "../../images/profile.jpg";
import "./CvArea.scss";

export default function CvArea() {
    return (
        <div className="cv-area">
            <div className="container">
                <div className="flex-row">
                    <div className="flex-item-left">
                        <div className="image-cropper">
                            <img className="header-image" src={ProfileImage} alt="" />
                        </div>
                        <h3>Yhteystiedot</h3>
                        <p>linkedin.com/in/annaruntti/<br />
                            suomenlapinkoira.net<br />
                            anruntti@gmail.com<br />
                            +358452346943<br />
                            Haravatie 27<br />
                            90530 Oulu<br />
                            s. 6.4.1990</p>
                    </div>
                    <div className="flex-item-right">
                        <h3>Koulutus</h3>
                        <p><b>Master’s studies, University of Oulu, Faculty of Information Technology and Electrical Engineering</b><br />
                            - Major in information processing science, since 2010<br />
                            - Minor in movie analysis, since 2015<br />
                            - Management studies in Oulu Business School, in 2013</p>

                        <p>Matriculation examination, 2009, Kiimingin lukio, Kiiminki</p>

                        <h3>Työkokemus</h3>

                        <p><b>Siili Solutions Oyj 04/2018 -> nykyhetki, Web developer, konsultti</b><br />
                            Työskentely konsulttina asiakasprojekteissa toimien full-stack web-kehittäjän tehtävissä. Lisäksi käytettävyys- ja käyttökokemussunnittelutehtäviä. Käytetyt teknologiat mm. React.js, Ramda.js, JavaScript, NodeJS, PostgreSQL, Java, React Native.
                        </p>

                        <p><b>Koodiviidakko Oy, 10/2017-04/2018, Front-end Developer</b><br />
                            Working on customer projects building websites using in-house CMS with technologies suchs as HTML5, SCSS, JavaScript and jQuery.</p>

                        <p><b>Koodiviidakko Oy, 10/2016-10/2017, Junior Front-end Developer</b><br />
                            Working on customer projects as a Front-end web developer in CMS-team. Building websites using HTML5, CSS, SCSS, JavaScript and JQuery. I have also worked with international customers and co-workers.</p>

                        <p><b>Koodiviidakko Oy, 09/2016-10/2016, Front-end Developer Trainee</b><br />
                            Working on customer projects as a Front-end Developer Trainee in PV&Design team. I builded newsletters and landin pages using HTML and CSS. I also designed newsletters.</p>

                        <p><b>Nokia Networks, 05/2016-08/2016, 05/2015-08/2015, 05/2014-09/2014, 06/2013-08/2013 and 06/2011-08/2011, Seasonal trainee</b><br />
                            Production work and quality control. My responsibilities were mostly electronics assembly work which was done as a team effort. I was focusing on very delicate soldering work and quality control.</p>

                        <p><b>Tulikurkku Oy, 08/2009-05/2015, Seller, cook and trustee</b><br />
                            Selling and making of food. I was working in a company that was running a restaurant. My responsibilities were making and selling food, inventory planning and ordering of goods. I was also responsible for training new personnel and working as a shift manager for several years. Since 2013 I was also chosen as the trustee of the staff.</p>

                        <h3>Vastuutehtävät</h3>
                        <p>TIVIA Oulu (Pohjois-Pohjanman tietojenkäsittely-yhdistys), puheenjohtaja 2019, varapuheenjohtaja 2018, puheenjohtaja 2017, varapuheenjohtaja 2016<br />
                            Potky ry is a local organization of the finnish information processing association which has almost 10000 members in Finland. As a vice president I represent the local organization in all the important meetings.</p>

                        <p>Oulun luonnontieteilijät ry, PR-person, 2016<br />
                            This is an umbrella organization for science students in the university of Oulu. As a PR-person I am responsible for the publlic relations of the organization. I negotiate sponsorship deals with companies and other organizations that are interested in financially backing the organization</p>

                        <p>Blanko ry, president, 2015<br />
                            Blanko ry is an organization for the information processing science students in the University of Oulu. As a president I was planning and organizing and leading the board of the organization. The president is representing the organization in various occasions, for example meetings of the Finnish Information Processing Association (TIVIA ry). The president is also working in close collaboration with the local staff of Academic Engineers and Architects in Finland (TEK). As the president I focused on improving the relations between Blanko and it’s sponsors. This works to increase the student’s knowledge about the business world and also helps to gain income for the organization.</p>

                        <p>Blanko ry, PR-person, 2013-2014<br />
                            PR-person is one of the members of the board in Blanko. The PR-person is responsible for the public relations of the organization. I was running an yearly project which aims to get new sponsors and improve the relations with the existing sponsors. I was also in close contact with other student organizations. The marketing of the organization was also my responsibility. I also ran an yearly project to get the student overalls for the new students. This also included the sponsors since the overalls are covered with their logos.</p>

                        <h3>Harrastukset</h3>
                        <p>I have a kennel so I spend a lot of time with my dogs. I compete with them in agility and obidience trial. I also like to paint and draw a lot. In addition I spend a lot of time with my website projects and I like learning and practicing new programming languages and technologies. I read a lot of blog posts and articles about usability and user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}