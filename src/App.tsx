import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CvView from "./components/CvView/CvView";
import PortfolioView from "./components/PortfolioView/PortfolioView";
import ContactView from "./components/ContactView/ContactView";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div id="main-content" className="main-app">
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/cv">
            <CvView />
          </Route>
          <Route exact path="/portfolio">
            <PortfolioView />
          </Route>
          <Route exact path="/yhteys">
            <ContactView />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
