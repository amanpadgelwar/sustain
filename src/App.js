import "./App.css";
import logo from "./logo.png";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import WishList from "./Pages/WishList";
import Cart from "./Pages/Cart";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Mockapi from "./Mockapi";
import ProductDetail from "./Pages/ProductDetails";
import ProductListingPage from "./components/ProductListingPage";

const getActiveStyle = {
  fontWeight: "bold",
  color: "red",
  margin: "1rem 0",
  padding: "1rem",
};

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink style={getActiveStyle} to="/" end>
          Home
        </NavLink>
        {" || "}
        <NavLink style={getActiveStyle} to="/category">
          Category
        </NavLink>
        {" || "}
        <NavLink style={getActiveStyle} to="/cart">
          Cart
        </NavLink>
        {" || "}
        <NavLink style={getActiveStyle} to="/productdetails">
          All Products
        </NavLink>
        {" || "}
        <NavLink style={getActiveStyle} to="/wishlist">
          WishList
        </NavLink>
       {" || "}
        <NavLink style={getActiveStyle} to="/mockapi">
          MockAPI
        </NavLink>
      </nav>
      <header className="App-header">
        <h1 className="brand-title">
          Welcome to <span>Sustain!</span>
        </h1>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/:categoryId" element={<ProductListingPage />} />
        <Route path="/mockapi" element={<Mockapi />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
