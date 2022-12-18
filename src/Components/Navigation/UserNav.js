
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router-dom";

function UserNav() {
  const navigate = useNavigate();
 
  function changeSignUp() {
    navigate("/userlogin");
  }
  return (
    <>
      <Navbar className="bg-primary" color="#f0f0f0" expand="lg" fixed="top">
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
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}}  onClick={changeSignUp}>SIGN-IN</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UserNav;
