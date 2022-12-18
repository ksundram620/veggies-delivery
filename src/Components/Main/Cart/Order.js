import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MyOrder from "../PlaceYourOrder/placeYourOrder";
export default function Order() {
  const navigate = useNavigate();
  const [Timer, setTimer] = useState(5);

    setTimeout(() => {
        setTimer(Timer-1)
        if(Timer===-1)(
          setTimer(5)
        )
        if(Timer===0){
          navigate("/productpage")
        }
    }, 1000);

  return (
    <>
      <h1> Thank you order is been placed.!</h1>

      <h3>You Will be redirected to Product Page in <span style={{color:"red"}}>{Timer}</span> second</h3>
    

    </>
  );
}
