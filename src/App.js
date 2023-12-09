/*

Copyright (c) 2023 Promineo Tech 

Author:  Juan Mejia

Week 16 - Final Coding Project (My Car List)

Coding Steps:
Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
Project must meet the following criteria:
Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
Contain at least 10 components
Allow for all CRUD operations

*/

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cars from "./Components/cars/Cars"; // Import the Cars component
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import SingleCar from "./Components/cars/singleCar/SingleCar";
import AboutPage from "./Components/about/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* Display toasts for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Navbar /> {/* Include the Navbar component at the top of the app */}
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          {/* Render the Home component when the exact path is "/" */}
          <Route exact path="/cars/:carId" render={() => <SingleCar />} />
          {/* Render the SingleCar component when the path matches "/cars/:carId" */}
          <Route path="/cars" render={() => <Cars />} />
          {/* Render the Cars component when the path includes "/cars" */}
          <Route path="/contact" render={() => <Contact />} />
          {/* Render the Contact component when the path includes "/contact" */}
          <Route path="/edit/:carId" render={() => <EditCarForm />} />
          {/* Render the EditCarForm component when the path includes "/edit/:carId" */}
          <Route path="/about" render={() => <AboutPage />} />
          {/* Render the AboutPage component when the path includes "/about" */}
        </Switch>
      </Router>
      <Footer /> {/* Include the Footer component at the bottom of the app */}
    </div>
  );
};

export default App;
