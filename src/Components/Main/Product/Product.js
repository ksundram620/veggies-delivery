import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductNavigation from "../../Navigation/ProductNavigation";
import ImageChange from "./imageChange";
import ProductComponent from "./ProductComponent";



export default function Product() {
  const [productData1, setProductData1] = useState([]);
  
 
  


  
  

  // Use effect to get data.
  useEffect(() => {
    axios.get("http://localhost:9100/products").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  return (
    <>
      <ProductNavigation />
      <ImageChange/>
      <div className="productcart" style={{marginLeft:"15px"}}>
       
        {productData1.map((element) => {
          return (
            <>
              <ProductComponent key={element.id} data={element} />
            </>
          );
        })}
      </div>
    </>
  );
}