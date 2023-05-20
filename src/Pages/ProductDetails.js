import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../backend/db/products";

import { ProductCard } from "../components/ProductCard";

export default function ProductDetail() {
  const { productId } = useParams();

  function getProductDetails(products, productId) {
    return products.find((product) => product.id === productId);
  }

  const product = getProductDetails(products.data, productId);

  return (
    <>
      <ProductCard {...product} />
      <Link to="/Category"> See All </Link>
    </>
  );
}
