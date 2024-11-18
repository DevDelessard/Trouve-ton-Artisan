import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import artisansData from '../data/artisans.json';
import logo from '../assets/Logo.png';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const searchResults = artisansData.filter(artisan =>
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    navigate('/search', { state: { results: searchResults } });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector('.main-content').classList.toggle('menu-open', !isMenuOpen);
  };

   // Fonction pour fermer le menu lorsque la taille de la fenêtre change
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Choisissez la largeur qui correspond au basculement entre mobile et desktop
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage de l'écouteur lorsque le composant est démonté
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Trouve ton Artisan" width="150" /> {/* Remplace le texte par l'image du logo */}
        </Link>
      </div>

      {/* Burger menu button visible only on mobile */}
      <button className="burger-menu" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation menu */}
      <nav className={`nav-menu ${isMenuOpen ? 'mobile-active' : ''}`}>
        <Link to="/batiment" className="nav-button" onClick={() => setIsMenuOpen(false)}>Bâtiment</Link>
        <Link to="/services" className="nav-button" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link to="/fabrication" className="nav-button" onClick={() => setIsMenuOpen(false)}>Fabrication</Link>
        <Link to="/alimentation" className="nav-button" onClick={() => setIsMenuOpen(false)}>Alimentation</Link>
      </nav>

      {/* Search form */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher un artisan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">🔍</button>
      </form>
    </header>
  );
}

export default Header;
