/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  
  return (
    <div>
      <header
        className="product-header"
        style={{ backgroundImage: `url(${product.thumbnail})` }}
      >
        <h1>{product.title}</h1>
      </header>
      <div className="product-details">
        <h2>Description</h2>
        <p>{product.description}</p>
        <h2>Price</h2>
        <p>${product.price}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ProductDetails;
