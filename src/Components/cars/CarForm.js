import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createCar } from "../../services/carServices";
import "./Carform.css";

const CarForm = ({ onAddCar }) => {
  const [carData, setCarData] = useState({
    model: "",
    manufacturer: "",
    year: "",
    imgUrl: "", // Added imgUrl field
    comments: [],
  });

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Input validation for the year field
    if (!/^\d{4}$/.test(carData.year)) {
      console.error("Invalid year format");
      // You can handle the error here, display a message to the user
      return;
    }

    try {
      // Call the createCar service function to add a new car
      const newCar = await createCar(carData);
      // Call the onAddCar callback to notify the parent component of the new car
      onAddCar(newCar);
      // Optionally, you can clear the form fields here
      setCarData({
        model: "",
        manufacturer: "",
        year: "",
        imgUrl: "",
        comments: [],
      });
    } catch (error) {
      console.error("Error creating car:", error);
      // Handle the error, display an error message to the user
    }
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        {/* Form group for the car model */}
        <Form.Group controlId="formModel">
          <Form.Label className="label-style">Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter car model"
            name="model"
            value={carData.model}
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* Form group for the car manufacturer */}
        <Form.Group controlId="formManufacturer">
          <Form.Label className="label-style">Manufacturer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter car manufacturer"
            name="manufacturer"
            value={carData.manufacturer}
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* Form group for the car year */}
        <Form.Group controlId="formYear">
          <Form.Label className="label-style">Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter car manufacturing year"
            name="year"
            value={carData.year}
            onChange={handleInputChange}
          />
          {/* Display an error message for invalid year format */}
          {!/^\d{4}$/.test(carData.year) && (
            <Form.Text className="text-danger">
              Year format (e.g., 2022)
            </Form.Text>
          )}
        </Form.Group>
        {/* Form group for the car image URL */}
        <Form.Group controlId="formImgUrl">
          <Form.Label className="label-style">Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter car image URL"
            name="imgUrl"
            value={carData.imgUrl}
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br>
        {/* Submit button to add the new car */}
        <Button variant="primary" type="submit">
          Add Car
        </Button>
      </Form>
      <br></br>
    </div>
  );
};

export default CarForm; // Export the CarForm component for use in other parts of the application
