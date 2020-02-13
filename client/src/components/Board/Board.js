import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import API from "../../utils/API";
import { Button } from 'react-bootstrap';

class Board extends Component {
    disconnect = () => {
        API.logout();
        window.location = "/";
      };
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
                    <li><Button onClick={this.disconnect}>Deconnexion</Button></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/historiqueCommandes">Historique des commandes</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
                </nav>
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
export default Board;
