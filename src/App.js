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



const getActiveStyle = ({ isActive }) => ({
  margin: "1rem 0",
  fontWeight: isActive ? "1000" : "500",
  padding: isActive ? "1rem" : "0.5rem",
  color: isActive ? "red" : "",
  margin:100,
  padding: 50,

});


function App() {
  return (
    <div className="App">
    <nav>
        <NavLink style={getActiveStyle} to="/">
          Home
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/category">
          Category
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/cart">
          Cart
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/wishlist">
          WishList
        </NavLink>
        ||
        <NavLink style={getActiveStyle} to="/ProductDetails">
          Products
        </NavLink>
        <NavLink style={getActiveStyle} to="/Mockapi">
          MockAPI
        </NavLink>
      </nav>
      <header className="App-header">
       
        <h1 className="brand-title">
          Welcome to <span>Sustain!</span>
        </h1>
        
      <Routes>
        <Route path="/" element={<Home />} />
      
        <Route path="/category" element={<Category />} />
        <Route path="/Mockapi" element={<Mockapi/>} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/ProductDetails" element={<ProductDetail/>}/>

      </Routes>

      </header>
     

    </div>
  );
}

export default App;
