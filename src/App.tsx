import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CvView from "./components/CvView/CvView";
import ContactView from "./components/ContactView/ContactView";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-app">
          <Route exact path="/" component={Main}>
            <Main />
          </Route>
          <Route exact path="/cv" component={CvView}>
            <CvView />
          </Route>
          <Route exact path="/yhteys" component={CvView}>
            <ContactView />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
