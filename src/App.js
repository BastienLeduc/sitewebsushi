import React from 'react';
import './App.css';
import './css/main.css';

function App() {
  return (
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
              <li><a href="#">Connexion</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Commander</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
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
  );
}

export default App;
