import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router-dom";

function LoginNav() {
  const navigate = useNavigate();
 
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
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}}  onClick={()=> navigate("/")}>HOME</Nav.Link>
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}}  onClick={changeSignUp}>SIGN-UP</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default LoginNav;
