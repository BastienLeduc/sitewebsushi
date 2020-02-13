import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Button } from 'react-bootstrap';
import API from "../../utils/API";
import { LinkContainer } from "react-router-bootstrap";

class Board extends Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      <HashRouter>
      <div>
        <div id="wrapper">
          <header id="header">
            <div className="App container">
              <div className="content">
                <h1>Sushi team</h1>
                <Navbar bg="light" expand="lg">
                  <Nav>
                    <NavItem className="primary" onClick={this.disconnect}>Deconnexion</NavItem>
                    <NavItem className="primary" href="/profil">Profil</NavItem>
                    <NavItem className="primary" href="/menu">Menu</NavItem>
                    <NavItem className="primary" href="/historiqueCommandes">Historique des commandes</NavItem>
                    <NavItem className="primary" href="/contact">Conatct</NavItem>
                  </Nav>
                </Navbar>
              </div>
            </div>
          </header>
          <footer id="footer">
            <p className="copyright">© Alexandra Dion / Bastien Leduc / Malo Gicquel - Ei5 SAGI Polytech Angers</p>
          </footer>
        </div>
        <div id="bg" />
      </div>
      </HashRouter>
    );
  }
}
export default Board;
