import { Link } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <nav>
      <div className="container">
        <a className="to-content-link" href="#main-content">
          Siirry sisältöön
        </a>
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
    </nav>
  );
}
