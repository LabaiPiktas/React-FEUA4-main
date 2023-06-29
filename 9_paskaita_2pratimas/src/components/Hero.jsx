import React from "react";
import "../components/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Sveiki atvykę į mūsų puslapį!</h1>
        <p className="hero-about">
          Atrask nuostabius momentus ir šviesias akimirkas.
        </p>
        <p className="hero-about">
          Tik puikios kokybės produktai jums.
        </p>
        <button className="hero-button">Pradėkim</button>
      </div>
    </div>
  );
};

export default Hero;
