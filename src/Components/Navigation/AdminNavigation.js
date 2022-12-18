
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useNavigate } from "react-router-dom";



function AdminNavigate() {
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
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5} }onClick={()=>navigate("/")} >HOME</Nav.Link>
              <NavDropdown style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}} title="LOGIN" id="navbarScrollingDropdown">
                <NavDropdown.Item style={{backgroundColor:"", width:140,height:40, borderRadius:8,marginRight:5}}  onClick={()=>navigate("/userlogin")}>
                  USER LOGIN
                </NavDropdown.Item>
                <NavDropdown.Item style={{backgroundColor:"", width:140,height:40, borderRadius:8,marginRight:5}}  onClick={()=>navigate("/admin")}>
                  ADMIN LOGIN
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link style={{backgroundColor:"white", width:140,height:40, borderRadius:5,marginRight:5}}  onClick={()=>navigate("/userregistration")}>SIGN-UP</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                
              />
              <Button  variant="outline-success" on>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


     

      

    </>
  );
}

export default AdminNavigate;
