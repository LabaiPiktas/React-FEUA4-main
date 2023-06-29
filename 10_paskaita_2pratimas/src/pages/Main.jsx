import React from "react";
import "./Main.css";
import HeroImage from "./HeroImage";

const Main = () => {
  return (
    <div>
      <div className="hero">
        <HeroImage/>
        <h1 className="hero-text">Home Page</h1>
        <p className="hero-text-p">
          Sveiki.Šiame puslapyje galima matyti jūsų lankytojų informaciją.
        </p>
      </div>
    </div>
  );
};

export default Main;
