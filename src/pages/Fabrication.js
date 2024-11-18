import React from 'react';
import { Link } from 'react-router-dom';
import artisansData from '../data/artisans.json';

function Fabrication() {
  const fabricationArtisans = artisansData.filter(artisan => artisan.category === 'Fabrication');

  return (
    <div className="main-content">
      <h1>Artisans - Fabrication</h1>
      <div className="artisan-cards">
        {fabricationArtisans.map((artisan) => (
          <Link to={`/artisans/${artisan.id}`} key={artisan.id} className="artisan-link">
          <div className="artisan-card">
            <img src={artisan.image} alt={artisan.name} className="artisan-image" />
            <h2>{artisan.name}</h2>
            <p>Note : {artisan.rating} ★</p>
            <p>Spécialité : {artisan.specialty}</p>
            <p>Localisation : {artisan.location}</p>
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
}

export default Fabrication;