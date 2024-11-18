import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>101 cours Charlemagne, CS 20033, 69269 LYON CEDEX 02, France</p>
        <p>+33 (0)4 26 73 40 00</p>
        <nav>
          <ul>
            <li><a href="/mentions-legales">Mentions légales</a></li>
            <li><a href="/donnees-personnelles">Données personnelles</a></li>
            <li><a href="/accessibilite">Accessibilité</a></li>
            <li><a href="/cookies">Cookies</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

