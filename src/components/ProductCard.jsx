/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ProductCard = ({ product, isFavorite, toggleFavorite }) => {
  return (
    <div className="gallery-item">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>
        <strong>Price: ${product.price}</strong>
      </p>
      <button onClick={() => toggleFavorite(product)}>
        {isFavorite(product) ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default ProductCard;
