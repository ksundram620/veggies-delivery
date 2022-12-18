
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useNavigate } from "react-router-dom";
import FirstProdimp from "../Main/FirstProduct/FirstProductImp";
import PlaceYourOrder from "../Main/PlaceYourOrder/placeYourOrder";



function Navigation() {
  const navigate = useNavigate();
  

 
 
  function change1() {
    navigate("/userlogin");
  }
  function changeSignUp() {
    navigate("/userregistration");
  }
  return (
    <>
      <Navbar className="bg-primary" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand style={{color:"white"}}>VeggiesDelivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}} >HOME</Nav.Link>
              <NavDropdown style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}} title="LOGIN" id="navbarScrollingDropdown">
                <NavDropdown.Item style={{backgroundColor:"", width:140,height:40, borderRadius:8,marginRight:5}}  onClick={change1}>
                  USER LOGIN
                </NavDropdown.Item>
                <NavDropdown.Item style={{backgroundColor:"", width:140,height:40, borderRadius:8,marginRight:5}}  onClick={()=>navigate("/admin")}>
                  ADMIN LOGIN
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}}  onClick={changeSignUp}>SIGN-UP</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* products  */}

      <FirstProdimp/>

      

    </>
  );
}

export default Navigation;
