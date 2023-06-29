import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./Button.css";
import "./Product.css";

const Product = ({
  image,
  title,
  price,
  description,
  availability,
  category,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="content-container">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p>{description}</p>
        <p>{availability}</p>
        <div className="quantity-container">
          <div className="quantity-controls">
            <button onClick={decreaseQuantity}>-</button>
            <p> {quantity} </p>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <Button
            title="Add to Cart"
            variant="contained"
            className="add-to-cart-button"
          />
        </div>
        <p>{category}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;
