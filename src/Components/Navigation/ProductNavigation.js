
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useNavigate } from "react-router-dom";
function ProductNavigation() {
  const navigate = useNavigate();
  

  function change2() {
    navigate("/cart");
  }

  function change1() {
    navigate("/");
  }
  return (
    <>
      <Navbar  className="bg-primary" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand style={{color:"white"}}>VeggiesDelivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}} onClick={()=>navigate("/productpage")}>PRODUCT</Nav.Link>
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}} onClick={change2}>MY-CART</Nav.Link>
              <NavDropdown style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}} title="LOGOUT" id="navbarScrollingDropdown">
                <NavDropdown.Item style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}}  onClick={change1}>LOGOUT</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ProductNavigation;
