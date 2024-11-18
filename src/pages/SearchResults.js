import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div className="main-content">
      <h1>Résultats de la Recherche</h1>
      {results.length > 0 ? (
        <div className="artisan-cards">
          {results.map((artisan) => (
            <div key={artisan.id} className="artisan-card">
              <img src={artisan.image} alt={artisan.name} className="artisan-image" />
              <h2>{artisan.name}</h2>
              <p>Note : {artisan.rating} ★</p>
              <p>Spécialité : {artisan.specialty}</p>
              <p>Localisation : {artisan.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun artisan trouvé.</p>
      )}
    </div>
  );
}

export default SearchResults;