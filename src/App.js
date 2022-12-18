import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Product from "./Components/Main/Product/Product";
import UserLogin from "./Components/Main/Login-Signup/Login";
import UserSignUp from "./Components/Main/Login-Signup/UserSignUp";
import ProductNavigation from "./Components/Navigation/ProductNavigation";
import Cart from "./Components/Main/Cart/Cart";
import Order from "./Components/Main/Cart/Order";
import MyOrder from "./Components/Main/PlaceYourOrder/placeYourOrder";
import AdminLogin from "./Components/Main/Admin/AdminLogin";
import AdminHome from "./Components/Main/Admin/AdminHome";
import AddProducts from "./Components/Main/Admin/AddProducts";

function App() {
  return (
    <div className="App">
      {/* Component Name */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userregistration" element={<UserSignUp />} />
          <Route path="/productpage" element={<Product />} />
          <Route
            path="/productnavigation"
            element={<ProductNavigation />}
          ></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<MyOrder />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminAddProducts" element={<AddProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
