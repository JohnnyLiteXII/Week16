import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const AboutPage = () => {
  return (
    <div className="about">
      <h2>About Our Car List</h2>
      <p>
        Welcome to our car list! We have created this car list for the following
        reasons:
      </p>
      <ul>
        <li>Help customers explore the available car options.</li>
        <li>Provide detailed information about each car in our inventory.</li>
        <li>Facilitate easy comparison between different car models.</li>
        <li>
          Keep customers informed about the latest additions to our inventory.
        </li>
      </ul>
      <p>
        Our goal is to make the car shopping experience enjoyable and
        informative. Feel free to browse through our car list to find the
        vehicle that suits your needs.
      </p>
    </div>
  );
};

export default AboutPage;
