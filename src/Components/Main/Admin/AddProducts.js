import React from 'react'
import AdminHomeNavigation from '../../Navigation/AdminHomeNavigation'
import { useState } from 'react'
import axios from 'axios';

export default function AddProducts() {

    const [productName, setproductName] = useState("");
    const [productPric, setproductPrice] = useState(0);
    const [prodQuantity, setprodQuan] = useState(1);
    const [image, setimage] = useState("");
        function prodname(event){
            setproductName(event.target.value)
        }
        function productPrice(event){
            setproductPrice(event.target.value)
        }
        function prodQuan(event){
            setprodQuan(event.target.value)
        }

        function imageval(event){
            setimage(event.target.value)
        }

        function add(e){
            e.preventDefault()
           let ele={
                "name": productName,
                    "price": productPric,
                    "quantity": prodQuantity,
                    "imageUrl": image
            }

            axios.post("http://localhost:9100/products/add",ele)
            .then((res)=>{
                if(res.data==="Product Added to DB."){
                    alert("Product id Added ...!")
                }
            })


            document.getElementById("prodname").value=""
            document.getElementById("prodpri").value=""
            document.getElementById("prodquan").value=""
            document.getElementById("text").value=""
        }


  return (
    <>
    <AdminHomeNavigation/>

    <form style={{marginTop:"100px"}}>
  <div class="form-group">
    <label >PRODUCT NAME</label>
    <input type="text" class="form-control" id="prodname" placeholder="Apple/Onion" onChange={prodname} required/>
  </div>
  <div class="form-group">
    <label >Product Price Per peice</label>
    <input type="number" class="form-control" id="prodpri"  placeholder="30/50" onChange={productPrice} required/>
  </div>
  <div class="form-group">
    <label >Quantity for the Product</label>
    <input type="number" class="form-control" id="prodquan"  placeholder="1/2/3" onChange={prodQuan} required/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Image Address</label>
    <textarea class="form-control"  id="text" rows="3" onChange={imageval} required></textarea>
  </div>

  <button className='addcart' style={{marginTop:"20px"}} onClick={(e)=>add(e)}>Add Product</button>
</form>

    </>
  )
}


// {
//     "name": "Onlion",
//     "price": 30.0,
//     "quantity": 1,
//     "imageUrl": "https://www.macmillandictionary.com/external/slideshow/full/135967_full.jpg"
// }