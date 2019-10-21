import React from 'react';
import logo from './logo.svg';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
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
        </div>
        {/* <Route path="/cv" component={CV}>
            <CV />
          </Route> */}
      </div>
    </Router>
  );
}

export default App;
