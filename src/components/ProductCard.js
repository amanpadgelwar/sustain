import React from "react";
import { Link } from "react-router-dom";


export function ProductCard({
  id,
  details,
  noDetail,categoryName,description
}) {
  return (
    <li
      style={{
        padding: "1rem",
        listStyle: "none",
        margin: "1rem",
        border: "1px solid #efefef"
      }}
    >
      <div style={{ fontSize: "large" }}>
        {categoryName} {description}
      </div>
      
      {noDetail && <Link to={`/product/${id}`}> View Details </Link>}
      {!noDetail && <p> {details} </p>}
    </li>
  );
}
