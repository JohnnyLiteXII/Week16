/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Adjust the import path based on your project structure
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
