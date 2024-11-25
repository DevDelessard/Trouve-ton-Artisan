import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import artisansData from '../data/artisans.json';

function ArtisanDetail() {
  const { id } = useParams();
  const artisan = artisansData.find((artisan) => artisan.id === parseInt(id));
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!artisan) {
    return <p>Artisan non trouvé</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name) validationErrors.name = "Le nom est requis";
    if (!formData.subject) validationErrors.subject = "L'objet est requis";
    if (!formData.message) validationErrors.message = "Le message est requis";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        // Vérifiez les données avant l'envoi
        console.log('Données envoyées :', formData);

        // Simuler un envoi asynchrone
        fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    alert('Message envoyé avec succès !');
                    setIsSubmitted(true);
                    setFormData({ name: '', subject: '', message: '' });
                } else {
                    alert('Erreur lors de l\'envoi de l\'email.');
                }
            })
            .catch((error) => {
                console.error('Erreur:', error);
                alert('Erreur lors de l\'envoi de l\'email.');
            });
    }
};

  return (
    <div className="main-content">
      <h1>{artisan.name}</h1>
      <p>Note : {artisan.rating} ★</p>
      <p>Spécialité : {artisan.specialty}</p>
      <p>Localisation : {artisan.location}</p>

      <section className="contact-form">
        <h2>Contactez cet artisan</h2>
        {isSubmitted && <p>Merci pour votre message !</p>}
        <form onSubmit={handleSubmit}>
          <label>Nom</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <span className="error">{errors.name}</span>}
          
          <label>Objet</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
          
          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
          {errors.message && <span className="error">{errors.message}</span>}
          
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </div>
  );
}

export default ArtisanDetail;


