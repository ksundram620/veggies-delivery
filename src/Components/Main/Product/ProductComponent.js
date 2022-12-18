import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ProductComponent(props) {
  const [cartAdd, setCartAdd] = useState(false);
  const [buttonValue, setButtonValue] = useState("Add To Cart");
  const [productData1, setProductData1] = useState([]);

  function cartHandler(id) {
    setCartAdd(true);
    setButtonValue("Product is added");

    productData1.map((ele) => {
      if (ele.id == id) {
        ele = {
          ...ele,
          mobileNo: parseInt(sessionStorage.getItem("data")),
          totalPrice:ele.quantity*ele.price
        };
        axios
          .post("http://localhost:9100/cart/add", ele)
          .then((response) => console.log(response));
      }
    });
  }

  useEffect(() => {
    axios.get("http://localhost:9100/products").then((response) => {
      setProductData1(response.data);
    });
  }, []);

  return (
    <Card id="cart" style={{ width: "18rem" }}>
   
      <Card.Img className="carImg" variant="top"  src={props.data.imageUrl} />
   
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>PRICE: {props.data.price}</ListGroup.Item>
        <ListGroup.Item>KILO PRICE: {props.data.quantity} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button 
          className="addcart"
          disabled={cartAdd}
          onClick={() => cartHandler(props.data.id)}
        >
          {buttonValue}
        </button>
      </Card.Body>
    </Card>
  );
}

export default ProductComponent;