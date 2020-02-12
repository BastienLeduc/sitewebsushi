import React, {Component} from 'react';
import './App.css';
import './css/main.css';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Connexion from "./pages/Connexion";
import Menu from "./pages/Menu";
import Commander from "./pages/Commander";
import Contact from "./pages/Contact";

class App extends Component {
  render(){
  return (
    <HashRouter>
    <div>
      {/* Wrapper */}
      <div id="wrapper">
        {/* Header */}
        <header id="header">
          <div className="logo">
            <span className="icon fa-fish" />
          </div>
          <div className="content">
            <div className="inner">
              <h1>Sushi team</h1>
              <p>Market</p>
            </div>
          </div>
          <nav>
            <ul>
              <li><NavLink to="/connexion">Connexion</NavLink></li>
              <li><NavLink to="/menu">Menu</NavLink></li>
              <li><NavLink to="/commander">Commander</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Route path="/connexion" component={Connexion}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/commander" component={Commander}/>
            <Route path="/contact" component={Contact}/>
          </nav>
        </header>       
        {/* Footer */}
        <footer id="footer">
          <p className="copyright">© Alexandra Dion / Bastien Leduc / Malo Gicquel - Ei5 SAGI Polytech Angers</p>
        </footer>
      </div>
      {/* BG */}
      <div id="bg" />
      {/* Scripts */}
    </div>
    </HashRouter>
  );
  }
}
export default App;
