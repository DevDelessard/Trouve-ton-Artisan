import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import artisansData from '../data/artisans.json';
import iconArtisan from '../assets/favicon-32.png'; // Remplace par le bon nom de fichier




function ArtisanList() {
  const [artisans, setArtisans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setArtisans(artisansData);
  }, []);

  const filteredArtisans = artisans.filter((artisan) =>
    artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="artisan-list">
      <h1>Liste des Artisans</h1>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Rechercher par nom, spécialité ou ville" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="artisan-cards">
        {filteredArtisans.map((artisan) => (
          <Link to={`/artisans/${artisan.id}`} key={artisan.id} className="artisan-card">
            <img src={iconArtisan} alt="Icône Artisan" width="50" />
            <h2>{artisan.name}</h2>
            <p>Note : {artisan.rating} ★</p>
            <p>Spécialité : {artisan.specialty}</p>
            <p>Localisation : {artisan.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtisanList;