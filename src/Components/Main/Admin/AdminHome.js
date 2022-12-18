import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import AdminHomeNavigation from '../../Navigation/AdminHomeNavigation';
import Table from "react-bootstrap/Table";

export default function AdminHome() {

    const [data, setdata] = useState([]);
    const [val, setval] = useState("");

    function value(event){
        
        setval(event.target.value)
        if(event.target.value===""){
            axios.get("http://localhost:9100/order")
            .then((res)=>setdata(res.data))
        }
    }

    function serch(){
        
        let arr=[];

        data.map((ele)=>{
            if(ele.mobileNo==val){
              arr.push(ele);
            }
        })
        setdata(arr);

        if(val===""){
            axios.get("http://localhost:9100/order")
            .then((res)=>setdata(res.data))
        }
    }

    useEffect(() => {
        axios.get("http://localhost:9100/order")
        .then((res)=>setdata(res.data))
    }, []);
  return (
        <>
        <AdminHomeNavigation/>
        <div style={{marginTop:"100px"}}>
        <label>Search By Mobile Numaber : {` `}</label>
        <input style={{margin:"10px"}} type="email" onChange={value} />
        <button className='addcart' onClick={serch}>Search</button>   
        </div>
        <Table striped bordered hover className="tablecomponent">
        <tr className="tabledata">
          <th>USER</th>
          <th>PRODUCT IMAGE</th>
          <th>PRODUCT NAME</th>
          <th>PRODUCT PRICE</th>
          <th>PRODUCT QUANTITY</th>
          <th>DATE</th>
        </tr>
         {data.map((ele)=>{
            return(
                <>
                     <tr className="tabledata">
                    <td>{ele.mobileNo}</td>
                  <td><img width="50px" height="50px" src={ele.imageUrl}/></td>
                  <td>{ele.name}</td>
                  <td>{ele.price * ele.quantity}</td>
                  <td>{ele.quantity}</td>
                  <td>{ele.date}</td>
                  </tr>
                
                </>
            )
         })}
           </Table> 
        </>
  )
}
