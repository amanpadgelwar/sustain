import React,{useState,useEffect} from "react";
import { categories } from "../backend/db/categories";
import { ProductCard } from "../components/ProductCard";


export default function Category() {

const [categories,setCategories]=useState([]);

  const datafromServer=async()=>{

    try{
      const response= await fetch("/api/categories")
      const data = await response.json();
      setCategories(data.categories);

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
    <h1> Categories </h1>
      {
        categories.map((item)=>(
       <ul>{

        <li key={item.id}>{item.categoryName}</li>
       }</ul>
      ))
      }
</>
  
    
  );
}
