import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import API from "../utils/API";
class Navbar extends Component {
    disconnect = () => {
        API.logout();
        window.location = "/";
      };
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <ul className="right">
                        <li><button onClick={this.disconnect}>Deconnexion</button></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/pannier">Pannier</Link></li>                        
                        <li><Link to="/profil">Profil</Link></li>
                        <li><Link to="/historiqueCommandes">Historique</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;