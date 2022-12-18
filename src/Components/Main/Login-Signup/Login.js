import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
// UI maker pr designer
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

import LoginNav from "../../Navigation/LoginNav";

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [backData, SetBacKData] = useState([]);

  function change() {
    navigate("/userregistration");
  }

  const setYourEmail = (e) => {
    setEmail(e.target.value);
  };

  const setYourPassword = (e) => {
    setPassword(e.target.value);
  };

  const check = (e) => {
    e.preventDefault();

    backData.map((ele) => {
      if (ele.email === email && ele.password === password) {
        let session = sessionStorage.getItem("data");
        if (session === null) {
          sessionStorage.setItem("data", ele.mobileNo);
        } else {
          sessionStorage.removeItem("data");
          sessionStorage.setItem("data", ele.mobileNo);
        }
        navigate("/productpage");
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:9100/logins")
      .then((response) => SetBacKData(response.data));
  }, []);

  return (
    <>
      <LoginNav/>
      <MDBContainer className="my-5 " >
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://i.pinimg.com/736x/6b/89/d7/6b89d7beb306cf25eadec67b73671fb0.jpg"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h4 fw-bold mb-0">VeggiesDelivery</span>
                </div>

                <h2
                  className="fw-bold my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  {" "}
                  User Login
                </h2>

                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg1"
                  type="email"
                  placeholder=" Your Email"
                  size="lg"
                  onChange={(e) => setYourEmail(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="password"
                  placeholder=" Your Password"
                  size="lg"
                  onChange={(e) => setYourPassword(e)}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="primary"
                  size="lg"
                  onClick={check}
                >
                  Login
                </MDBBtn>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Do not have an account!{" "}
                  <a onClick={change} style={{ color: "#393f81" }}>
                    SignUp
                  </a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default UserLogin;