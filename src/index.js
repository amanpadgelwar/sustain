import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {CartContext,CartProvider} from "./Context/CartContext"
import { DataContextProvider } from "./Context/DataContext";
import { AuthContextProvider } from "./Context/Auth";
import {AddressContextProvider} from "./Context/AddressContext";
export {CartContext}

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  
  <Router>
      <DataContextProvider>
        <AuthContextProvider>
          
            <AddressContextProvider>
              <App />
            </AddressContextProvider>
          
        </AuthContextProvider>
      </DataContextProvider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);
