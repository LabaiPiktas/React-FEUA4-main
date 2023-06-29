import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <h2> SPA centre teikiamos paslaugos</h2>
        <div className="services">
          <div className="service-card">
            <h3>Paslauga1</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sit sequi facere recusandae error non voluptatem
              repellendus obcaecati
            </p>
          </div>
          <div className="service-card">
            <h3>Paslauga1</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sit sequi facere recusandae error non voluptatem
              repellendus obcaecati
            </p>
          </div>
          <div className="service-card">
            <h3>Paslauga1</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sit sequi facere recusandae error non voluptatem
              repellendus obcaecati
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
