import React from "react";
import Header from "../components/Header";
import Image1 from "./../images/spa4.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Header />
      <img className="bg-img" src={Image1} alt="" />
      <Footer />
    </main>
  );
};

export default Home;
