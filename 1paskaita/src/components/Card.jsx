import React from "react";
import PropTypes from "prop-types";

function Card({ imageUrl, title, subtitle }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Card;
