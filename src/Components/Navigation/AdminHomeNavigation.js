
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useNavigate } from "react-router-dom";

export default function AdminHomeNavigation() {

    const navigate=useNavigate();
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
              
              <NavDropdown style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}} title="LOG-OUT" id="navbarScrollingDropdown">
                <NavDropdown.Item style={{backgroundColor:"", width:140,height:40, borderRadius:8,marginRight:5}}  onClick={()=>navigate("/admin")}>
                   LOG-OUT
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}}  onClick={()=>navigate("/adminAddProducts")}>ADD PRODUCTS</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
   </>
  )
}
