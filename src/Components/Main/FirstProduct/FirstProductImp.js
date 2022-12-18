import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageChange from "../Product/imageChange";

import FirstProd from "./FirstProd";

export default function FirstProdimp() {
  const [productData1, setProductData1] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9100/products").then((response) => {
      setProductData1(response.data);
    });
  }, []);
    
  return (
    <>
      <ImageChange/>
      <div className="productcart" style={{marginLeft:"15px"}}>
        {productData1.map((element) => {
        
          return (
            <>
              <FirstProd  data={element} />
            </>
          );
        })}
      </div>
    </>
  );
}