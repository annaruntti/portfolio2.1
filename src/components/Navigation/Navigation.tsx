import * as React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <ul className="menu">
          <li>
            <Link to={"/"}>Etusivu</Link>
          </li>
          <li>
            <Link to={"/cv"}>CV</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/yhteys"}>Yhteys</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
