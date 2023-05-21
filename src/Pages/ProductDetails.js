
import { Link, useParams } from "react-router-dom";
import { products } from "../backend/db/products";
import React,{useState,useEffect} from "react";

import { ProductCard } from "../components/ProductCard";

export default function ProductDetail() {
  const { productId } = useParams();
  const [products,setProducts]=useState([]);

  const datafromServer=async()=>{

    try{
      const response= await fetch("/api/products")
      const data = await response.json();
      setProducts(data.products);

    }
    catch(e){
      console.error(e)


    }
  }
  useEffect(() => {
    datafromServer();
  }, []);

  function getProductDetails(products, productId) {
    
    return (products.find((product) => (product.id === productId)));
    
  }

  const product = getProductDetails(products.data, productId);

  return (
    <>
      <ProductCard {...product} />
      <Link to="/Category"> See All </Link>
    </>
  );
}
