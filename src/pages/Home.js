import React from 'react';
import { Link } from 'react-router-dom';
import artisansData from '../data/artisans.json';

function Home() {
  // Tri des artisans par note décroissante et sélection des 3 premiers
  const artisansDuMois = artisansData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="main-content">
      <h1>Bienvenue sur Trouve ton Artisan !</h1>

      <section className="how-to">
        <h2>Comment trouver mon artisan ?</h2>
        <ol>
          <li>Choisir la catégorie d’artisanat dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
          <li>Une réponse sera apportée sous 48h.</li>
        </ol>
      </section>

      <section className="artisans-du-mois">
        <div className='arti'>
          <h2>Artisans du Mois</h2>
        </div>
        <div className="artisan-cards">
          {artisansDuMois.map((artisan) => (
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
      </section>
    </div>
  );
}

export default Home;