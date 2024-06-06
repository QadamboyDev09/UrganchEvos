import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import UserProvider from "./context/userContext";
import Routers from "./routes/Route";
import BasketProvider from "./basketContext";
import AuthPrivader from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <UserProvider>
      <AuthPrivader>
      <Routers />
      </AuthPrivader>
    </UserProvider>
  </BasketProvider>   
);
