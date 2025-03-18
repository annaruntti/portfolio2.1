import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CvView from "./components/CvView/CvView";
import PortfolioView from "./components/PortfolioView/PortfolioView";
import ContactView from "./components/ContactView/ContactView";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main id="main-content" className="main-app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cv" element={<CvView />} />
          <Route path="/portfolio" element={<PortfolioView />} />
          <Route path="/yhteys" element={<ContactView />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
