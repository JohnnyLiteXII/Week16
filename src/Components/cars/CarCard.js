// CarCard.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CarCard = ({ car, onDelete, onUpdate }) => {
  // The CarCard component displays information about a car, including buttons to view details, delete, and potentially update.

  return (
    <Card className="car-card">
      {/* Display the car image */}
      <Card.Img variant="top" src={car.imgUrl} alt={car.model} />

      <Card.Body>
        {/* Display the car model as the card title */}
        <Card.Title>{car.model}</Card.Title>

        {/* Link to view details of the car */}
        <Link to={`/cars/${car.id}`}>
          <Button variant="outline-primary">View Details</Button>
        </Link>

        {/* Button to delete the car */}
        <Button variant="outline-danger" onClick={() => onDelete(car.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CarCard;
