import React, { Component } from "react";
import { Route, Switch, NavLink, BrowserRouter } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Button } from 'react-bootstrap';
import { Signup } from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import "./css/App.css";
import "./css/main.css";
import Board from "./components/Board/Board.js";
import Connexion from "./components/Login/Connexion.js";
import Menu from "./components/Menu";
import Profil from "./components/Profil";
import HistoriqueCommandes from "./components/HistoriqueCommandes";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import API from "./utils/API";

class App extends Component {
  render() {
    /*return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={Connexion} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/" component={Board} />
          </Switch>
          <PrivateRoute path="/profil" component={Profil} />
          <PrivateRoute path="/cart" component={Cart} />
          <PrivateRoute path="/menu" component={Menu} />
          <PrivateRoute path="/historiqueCommandes" component={HistoriqueCommandes} />
          <PrivateRoute path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );*/
    return (
      <BrowserRouter>
        <div>
          <div id="wrapper">
            <header id="header">
              <div className="content">
                <h1>Sushi team</h1>
                <Switch>
                  <Route exact path="/login" component={Connexion} />
                  <Route exact path="/signup" component={Signup} />
                  <PrivateRoute path="/" component={Board} />
                </Switch>
                <PrivateRoute path="/profil" component={Profil} />
                <PrivateRoute path="/cart" component={Cart} />
                <PrivateRoute path="/menu" component={Menu} />
                <PrivateRoute path="/historiqueCommandes" component={HistoriqueCommandes} />
                <PrivateRoute path="/contact" component={Contact} />
              </div>
            </header>
            <footer id="footer">
              <p className="copyright">© Alexandra Dion / Bastien Leduc / Malo Gicquel - Ei5 SAGI Polytech Angers</p>
            </footer>
          </div>
          <div id="bg" />
        </div >
      </BrowserRouter>
    );
  }
}
export default App;

/*import React, { Component } from 'react';
import './css/App.css';
import './css/main.css';
import { Route, Switch, HashRouter } from "react-router-dom";
import Connexion from "./components/Login/Connexion";
import Menu from "./components/Menu";
import Profil from "./components/Profil";
import HistoriqueCommandes from "./components/HistoriqueCommandes";
import Contact from "./components/Contact";
import { Signup } from './components/Signup/Signup';
import { PrivateRoute } from './components/PrivateRoute';
import Board from './components/Board/Board';

class App extends Component {
  render() {
    return (
        <div>
          <div id="wrapper">
            <header id="header">
              <div className="content">
                <h1>Sushi team</h1>
                <Switch>
                  <Route path="/" component={Connexion} />
                  <Route path="/signup" component={Signup} />
                  <PrivateRoute path="/board" component={Board} />
                  <PrivateRoute path="/profil" component={Profil} />
                  <PrivateRoute path="/menu" component={Menu} />
                  <PrivateRoute path="/historiqueCommandes" component={HistoriqueCommandes} />
                  <PrivateRoute path="/contact" component={Contact} />
                </Switch>
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
export default App;*/
