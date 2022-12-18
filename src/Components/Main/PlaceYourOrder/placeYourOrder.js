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
    
    var totalPrice1=0;
    export default function MyOrder() {

      const navigate = useNavigate();
      const [cartData, setCartData] = useState([]);
      
      let mobiledata = parseInt(sessionStorage.getItem("data")); 
      const date= new Date();
      function saveToMyOrder(){
        console.log("saveorderIsCalled")
        cartData.map((element)=>{
          if(element.mobileNo===mobiledata){
            

            axios.post("http://localhost:9100/order/add",{...element,date})
            .then((response)=>console.log(response))
            axios
            .delete(`http://localhost:9100/cart/delete/${element.id}`)
            .then((res) => console.log(res));
          }
        })
        navigate("/order");
      }
    
      let sum=0;
      useEffect(() => {
        axios.get("http://localhost:9100/cart").then((response) => {
          sum=0;
          response.data.map((ele)=>{
            if(ele.mobileNo===mobiledata){
              sum +=ele.totalPrice;
              console.log(sum);
            }
          })
          sessionStorage.setItem("sum",0)
          sessionStorage.setItem("sum",sum)
          setCartData(response.data);
        });
      },[]);
      useEffect(() => {
        totalPrice1=0;
        axios.get("http://localhost:9100/cart").then((response) => {
          response.data.map((ele)=>{
            if(ele.mobileNo === mobiledata){
              totalPrice1 +=ele.totalPrice;
            }
          })
        });
      },[]);
    
    

    return (
      <>    
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
                        <p className="mb-1">Shopping cart</p>
                        {/* items count */}
                        <p className="mb-0">You have {cartData.length} items in your cart</p> 
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
      {cartData.map((ele)=>{
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
                            Card details
                          </MDBTypography>
                          <MDBCardImage src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png"
                            fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                        </div>
    
                        <p className="small">Card type</p>
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
    
                        <form className="mt-4">
                          <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                            placeholder="Cardholder's Name" contrast />
    
                          <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                            minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
    
                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                            </MDBCol>
                          </MDBRow>
                        </form>
    
                        <hr />
    
                        <div className="d-flex justify-content-between">
                          {/* Totoal Price */}
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">{sessionStorage.getItem("sum")}</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          {/* shiping charge */}
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">50.00</p>
                        </div>
    
                        <div className="d-flex justify-content-between">
                          {/* pay amount */}
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">{parseInt(sessionStorage.getItem("sum"))+50}</p>
                        </div>
    
                        <MDBBtn color="info" block size="lg" onClick={saveToMyOrder}>
                          <div className="d-flex justify-content-between">
                            {/* pay amount */}
                           
                            <span >
                              Checkout
                              
                            </span>
                          </div>
                        </MDBBtn>
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
