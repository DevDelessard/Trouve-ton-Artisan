import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArtisanList from './pages/ArtisanList';
import ArtisanDetail from './pages/ArtisanDetail';
import Services from './pages/Services';
import Batiment from './pages/Batiment';
import Fabrication from './pages/Fabrication';
import Alimentation from './pages/Alimentation';
import MentionsLegales from './pages/MentionsLegales';
import Accessibilite from './pages/Accessibilite';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';
import SearchResults from './pages/SearchResults'; // Ajout du composant de recherche

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<ArtisanList />} />
          <Route path="/artisans/:id" element={<ArtisanDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/batiment" element={<Batiment />} />
          <Route path="/fabrication" element={<Fabrication />} />
          <Route path="/alimentation" element={<Alimentation />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/search" element={<SearchResults />} /> {/* Route pour les résultats de recherche */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;