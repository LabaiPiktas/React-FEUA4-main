import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image2 from "./../images/spa2.png";

const Aboutus = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <h2>Apie mus</h2>
        <img src={Image2} alt="" className="aboutus-img" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sit sequi facere recusandae error non voluptatem repellendus obcaecati
          sint, eos blanditiis est, debitis odio amet, nostrum dolor. Quasi,
          fugit nam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis sit sequi facere recusandae error non voluptatem
          repellendus obcaecati sint, eos blanditiis est, debitis odio amet,
          nostrum dolor. Quasi, fugit nam.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
