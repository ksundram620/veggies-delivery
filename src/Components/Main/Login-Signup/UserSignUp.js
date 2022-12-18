import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";
import UserNav from "../../Navigation/UserNav";

var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var min=7;
var max=13;
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
function UserSignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [userGet, setUserGet] = useState([]);

  //
  function change() {
    navigate("/userlogin");
  }
  const setYourMobileNo = (e) => {
    console.log(typeof(e.target.value));
    setMobileNo(e.target.value);
  };

  const setYourName = (e) => {
    setName(e.target.value);
  };

  const setYourEmail = (e) => {
    setEmail(e.target.value);
  };

  const setYourPassword = (e) => {
    setPassword(e.target.value);
  };

  const register = () => {






    let data = {
      email: email,
      fullName: name,
      mobileNo: mobileNo,
      password: password,
      login: {
        mobileNo: mobileNo,
        email: email,
        password: password,
        loginStatus: "false",
      },
    };
    if(mobileNo.length !==10 ){
      alert("Please Enter 10 Digit Mobile No");
    }
    else if(email.substring(email.length-10, email.length)!=="@gmail.com"){
      alert("Please Enter Email in right format");
    }
    else if(!regName.test(name)){
        alert("Please Enter only Alphabate in Name");
    }
    else if(password.length<min || password.length>max ){
        alert("PassWord Should have Minimun character of 7 and Maximun of 13")
    }
    else if(!regularExpression.test(password)){
      alert("password should contain atleast one number and one special character");
    }
    else{
      console.log(email);
      userGet.map((element) => {
        if (element.email === email && element.mobileNo === mobileNo) {
          alert("User with same EMAIL and MOBILENO is already exist.");
          sessionStorage.setItem("user", true);
          navigate("/userlogin");
          sessionStorage.removeItem("user");
        } else if (element.email === email) {
          alert("User with same EMAIL is already exist.");
          sessionStorage.setItem("user", true);
          navigate("/userlogin");
          sessionStorage.removeItem("user");
        } else if (element.mobileNo === mobileNo) {
          alert("User with same MOBILENO is already exist.");
          sessionStorage.setItem("user", true);
          navigate("/userlogin");
          sessionStorage.removeItem("user");
        }
      });
      let user = sessionStorage.getItem("user");
      if (user === null) {
        axios
          .post("http://localhost:9100/user/add", data)
          .then((response) => response)
          .then((data) => {
            if (data.data === "User Registered Successfully!!.") {
              alert("Registration Failed!");
            } else {
              alert("Registration Successful!");
              navigate("/userlogin");
            }
          });
      }
    }

 
    //
  };

  useEffect(() => {
    axios
      .get("http://localhost:9100/logins")
      .then((response) => setUserGet(response.data));
  }, []);

  return (
    <>
    <UserNav/>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://i.pinimg.com/736x/6b/89/d7/6b89d7beb306cf25eadec67b73671fb0.jpg"
                height="550px"
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
                  User SignUp
                </h2>

                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg1"
                  type="name"
                  placeholder=" Your Name"
                  size="lg"
                  required
                  onChange={(e) => setYourName(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg2"
                  type="email"
                  placeholder=" Your Email"
                  size="lg"
                  required
                  onChange={(e) => setYourEmail(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg3"
                  type="number"
                  placeholder=" Your Mobile No"
                  size="lg"
                  required
                  onChange={(e) => setYourMobileNo(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg4"
                  type="password"
                  placeholder=" Your Password"
                  size="lg"
                  required
                  onChange={(e) => setYourPassword(e)}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  onClick={register}
                  color="primary"
                  size="lg"
                >
                  SignUp
                </MDBBtn>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Already have an account!{" "}
                  <a onClick={change} style={{ color: "#393f81" }}>
                    login
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

export default UserSignUp;