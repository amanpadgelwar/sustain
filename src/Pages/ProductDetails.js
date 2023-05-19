import React from "react";
import { Link, useParams } from "react-router-dom";
import { categories } from "../backend/db/categories";

import { ProductCard } from "../components/ProductCard";

export default function ProductDetail() {
  const { productId } = useParams();

  function getProductDetails(products, productId) {
    return products.find((product) => product.id === productId);
  }

  const product = getProductDetails(categories, productId);

  return (
    <>
      <ProductCard {...product} />
      <Link to="/Category"> See All </Link>
    </>
  );
}
