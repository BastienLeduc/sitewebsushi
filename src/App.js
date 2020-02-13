import React, { Component } from 'react';
import './css/App.css';
import './css/main.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Menu from "./pages/Menu";
import Profil from "./pages/Profil";
import HistoriqueCommandes from "./pages/HistoriqueCommandes";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/* Wrapper */}
          <div id="wrapper">
            {/* Header */}
            <header id="header">
              <div className="content">
                <nav>
                  <h1>Sushi team</h1>
                  <ul>
                    <li><NavLink to="/connexion">Connexion</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/historiqueCommandes">Historique des commandes</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
                </nav>
                <Route path="/connexion" component={Connexion} />
                <Route path="/profil" component={Profil} />
                <Route path="/menu" component={Menu} />
                <Route path="/historiqueCommandes" component={HistoriqueCommandes} />
                <Route path="/contact" component={Contact} />
              </div>
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
