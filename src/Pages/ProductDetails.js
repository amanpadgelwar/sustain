
import { Link, useParams } from "react-router-dom";

import React,{useState,useEffect} from "react";



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

 

 

  return (
    <>
      <h1>Products</h1>
      <ul key={products.id}>
      
      {products.map((product)=>(
        <div>
        <h2>{product.name}
        <p>CategoryName:{product.categoryName}</p>
    <p>Description:{product.description}</p>
    <p>Price:{product.price}</p>
    <p>Image:{product.imageSrc}</p>
  </h2>
  </div>
      )
      )
      }


      
      
      </ul>
    </>
  );
}
