import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductNavigation from "../../Navigation/ProductNavigation";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";
 
  let date1= new Date();
  let val="";
export default function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [oldData, setoldData] = useState([]);
  let mobiledata = parseInt(sessionStorage.getItem("data"));
 

  // CartData Code : Cart Increament Code
  function pluseChange(id) {
    cartData.map((element) => {
      if (element.id === id) {
        let ele = {
          ...element,
          quantity: element.quantity + 1,
          totalPrice:(element.quantity+1)*element.price
        };
        axios
          .put(`http://localhost:9100/cart/update/${id}`, ele)
          .then((response) => {});  
      }

    });
    axios.get("http://localhost:9100/cart").then((response) => {
      sum=0;
      response.data.map((ele)=>{
        if(ele.mobileNo===mobiledata){
          sum +=ele.totalPrice;
         
        }
      })
      sessionStorage.setItem("sum",0)
      sessionStorage.setItem("sum",sum)
      setCartData(response.data)})
  }

  // CartData Code : Cart Decreament Code
  function minusChange(id) {
    cartData.map((element) => {
      if (element.id === id) {
        let ele = {
          ...element,
          quantity: element.quantity - 1,
          totalPrice:(element.quantity-1)*element.price
        };
        axios
          .put(`http://localhost:9100/cart/update/${id}`, ele)
          .then((response) => {});
      }
    });
    axios.get("http://localhost:9100/cart").then((response) => {
      sum=0;
      response.data.map((ele)=>{
        if(ele.mobileNo===mobiledata){
          sum +=ele.totalPrice;
         
        }
      })
      sessionStorage.setItem("sum",0)
      sessionStorage.setItem("sum",sum)
      setCartData(response.data)})
  }

  // Order page
  function ordernow() {
    navigate("/payment");
  }
let sum=0;
  useEffect(() => {
    axios.get("http://localhost:9100/cart").then((response) => {
      sum=0;
      response.data.map((ele)=>{
        if(ele.mobileNo===mobiledata){
          sum +=ele.totalPrice;
         
        }
      })
      sessionStorage.setItem("sum",0)
      sessionStorage.setItem("sum",sum)
      setCartData(response.data);
      axios.get("http://localhost:9100/order").then((res)=>{
        setoldData(res.data);
      })
    });
  },[],sum);

 

 

  return (
    <>
      <ProductNavigation />
      <h1 id="cartid"> YOUR CART</h1>
      <Table striped bordered hover className="tablecomponent">
        <tr className="tabledata">
          <th>PRODUCT IMAGE</th>
          <th>PRODUCT NAME</th>
          <th>PRODUCT PRICE</th>
          <th>PRODUCT QUANTITY</th>
        </tr>
        
        {cartData.map((ele) => {
          
          if (ele.mobileNo === mobiledata) {
            
            return (
              <>
              
                <tr className="tabledata">
                  <td><img width="50px" height="50px" src={ele.imageUrl}/></td>
                  <td>{ele.name}</td>
                  <td>{ele.price * ele.quantity}</td>
                  <td>{ele.quantity}</td>
                  <button
                    onClick={() => pluseChange(ele.id)}
                    className="buttonclass1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => minusChange(ele.id)}
                    className="buttonclass2"
                  >
                    -
                  </button>
                </tr>
              </>
            );
          } else {
            return null;
          }
        })}
      </Table>
        
      <h2 id="placeorderid" onClick={ordernow}>
        {" "}
        Payment!{" "}
      </h2>

      <ProductNavigation />
          <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a onClick={()=>navigate("/productpage")} className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2"  /> Continue
                        shopping
                      </a>
                    </MDBTypography>
    
                    <hr />
    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1"> old Orders</p>
                     
                      </div>
                     
                    </div>
                    
      {oldData.map((ele)=>{
          if (ele.mobileNo === mobiledata){
            
        return(
          <>
               <MDBCard className="mb-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src={ele.imageUrl}
                                fluid className="rounded-3" style={{ width: "65px" }}
                                alt="Shopping item" />
                            </div>
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                                {/* product name */}
                               {ele.name}
                              </MDBTypography>

                              <p className="small mb-0">Fresh</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography tag="h5" className="fw-normal mb-0">
                                {/* quantity */}
                                {ele.quantity}
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                                {/* price */}
                                {ele.totalPrice}
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <MDBIcon fas icon="trash-alt" />
                            </a>
                          </div>
                        </div>
                        <p>{ele.date}</p>
                        
                      </MDBCardBody>
                    </MDBCard>
          </>
        )}
      })}    
                    <MDBCard className="mb-3">
                  
                    </MDBCard>
                  </MDBCol>
    
                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Total amount
                          </MDBTypography>
                          <MDBCardImage src="https://im.indiatimes.in/content/2020/Jul/indian-currency-389006_1920_5f1547587ee6e.jpg?w=640&h=480&cc=1"
                            fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                        </div>
    
                        <p className="small">{sessionStorage.getItem("sum")}</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>
    
                     
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </>
  );
}