// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import ProductCard from "../components/ProductCard";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import Favorites from "../components/Favorites";
// import FilterButtons from "../components/FilterButtons";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [filter] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;
    if (filter === "Under $50") {
      filtered = products.filter((product) => product.price < 50);
    } else if (filter === "Between $50 and $100") {
      filtered = products.filter(
        (product) => product.price >= 50 && product.price <= 100
      );
    } else if (filter === "Above $100") {
      filtered = products.filter((product) => product.price > 100);
    }
    setFilteredProducts(filtered);
  }, [filter, products]);

  const isFavorite = (product) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product)) {
      setFavorites(favorites.filter((fav) => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <div>

      <PageHeader />

      <SectionHeader title="Favorit Produkter" />

      <Favorites
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />

      <SectionHeader title="Produkter" />

      {/* <FilterButtons setFilter={setFilter} /> */}

      <div className="gallery">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        ))}
      </div>

      <Newsletter />
    </div>
  );
};

export default Home;
