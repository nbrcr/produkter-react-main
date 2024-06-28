/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductCard from "./ProductCard";

const Favorites = ({ favorites, toggleFavorite, isFavorite }) => {
  return (
    <div className="gallery favGallery">
      {favorites.map((favorite) => (
        <ProductCard
          key={favorite.id}
          product={favorite}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      ))}
    </div>
  );
};

export default Favorites;
