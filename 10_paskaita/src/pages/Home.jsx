import React from 'react';
import imageSrc from './img/rhondak.jpg';
import './Home.css'; 
const Home = () => {
  return (
    <div className="home-container">
      <img className="background-image" src={imageSrc} alt="Paveikslėlis" />
      <h1 className="centered-text">Pagrindinis</h1>
    </div>
  );
};

export default Home;
