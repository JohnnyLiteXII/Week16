// EditCarForm.js

import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom
import { Button, Form } from "react-bootstrap";
import { updateCar } from "../../services/carServices";

const EditCarForm = ({
  carId,
  initialModel,
  initialManufacturer,
  initialYear,
  initialImgUrl,
  onUpdate,
}) => {
  const history = useHistory(); // Use useHistory hook to get access to the history object

  // State variables to hold updated values
  const [updatedModel, setUpdatedModel] = useState(initialModel);
  const [updatedManufacturer, setUpdatedManufacturer] =
    useState(initialManufacturer);
  const [updatedYear, setUpdatedYear] = useState(initialYear);
  const [updatedImgUrl, setUpdatedImgUrl] = useState(initialImgUrl);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding state variable based on the input field name
    switch (name) {
      case "model":
        setUpdatedModel(value);
        break;
      case "manufacturer":
        setUpdatedManufacturer(value);
        break;
      case "year":
        setUpdatedYear(value);
        break;
      case "imgUrl":
        setUpdatedImgUrl(value);
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the updateCar service function to update the car data
      const updatedCar = await updateCar(carId, {
        model: updatedModel,
        manufacturer: updatedManufacturer,
        year: updatedYear,
        imgUrl: updatedImgUrl,
      });

      // Call the onUpdate callback to notify the parent component of the update
      onUpdate(updatedCar);

      // Redirect to the SingleCar page for the updated car
      history.push(`/cars/${carId}`);
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Group controlId="formModel">
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter updated car model"
          name="model"
          value={updatedModel}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formManufacturer">
        <Form.Label>Manufacturer</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter updated car manufacturer"
          name="manufacturer"
          value={updatedManufacturer}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formYear">
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter updated car year"
          name="year"
          value={updatedYear}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formImgUrl">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter updated car image URL"
          name="imgUrl"
          value={updatedImgUrl}
          onChange={handleInputChange}
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default EditCarForm;
