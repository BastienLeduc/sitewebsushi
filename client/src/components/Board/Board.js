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
      <Navbar bg="light" expand="lg">
        <Nav>
          <NavItem className="primary" onClick={this.disconnect}>Deconnexion</NavItem>
          <NavItem className="primary" href="/profil">Profil</NavItem>
          <NavItem className="primary" href="/menu">Menu</NavItem>
          <NavItem className="primary" href="/historiqueCommandes">Historique des commandes</NavItem>
          <NavItem className="primary" href="/contact">Conatct</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default Board;
