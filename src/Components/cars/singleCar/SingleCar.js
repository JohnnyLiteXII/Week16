// SingleCar.js

import "./SingleCar.css"; // Import the CSS file for styling
import { Button, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getCarById, updateCar } from "../../../services/carServices";
import { useEffect, useState } from "react";
import EditCarForm from "../EditCarForm";

const SingleCar = () => {
  const { carId } = useParams(); // Get the id of the car from the URL

  const [loading, setLoading] = useState(false);
  const [car, setCar] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Function to fetch the details of a specific car
  const fetchCar = async () => {
    try {
      setLoading(true);
      const foundCar = await getCarById(carId);
      console.log("Found Car: ", foundCar);
      setCar(foundCar);
    } catch (error) {
      console.error("Error fetching car:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCar();
  }, [carId]);

  // Function to handle the update of car details
  const handleUpdate = async (updatedCarData) => {
    try {
      const updatedCar = await updateCar(carId, updatedCarData);
      setCar(updatedCar);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  console.log("Car data:", car);

  return (
    <div className="single-car">
      <div className="card-container">
        <div className="card-img">
          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <img src={`${car.imgUrl}`} alt={`${car.model}`} />
          )}
        </div>
        <div className="card-content">
          {/* Link to navigate back to all cars */}
          <Link to={`/cars`}>
            <Button variant="outline-primary">Back to all cars</Button>
          </Link>

          {/* Button to toggle editing mode */}
          {!isEditing && (
            <Button
              variant="outline-warning"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}

          <div className="card-header">
            {loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <>
                {/* Display car model as the header */}
                {!isEditing ? (
                  <h2>{car.model}</h2>
                ) : (
                  <EditCarForm
                    carId={carId}
                    initialModel={car.model}
                    onUpdate={handleUpdate}
                  />
                )}
              </>
            )}
          </div>
          <div className="card-description">
            <div className="card-text">
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <>
                  {/* Display car details like manufacturer, year, and model */}
                  <p>Manufacturer: {car.manufacturer}</p>
                  <p>Year: {car.year}</p>
                  <p>Model: {car.model}</p>
                </>
              )}
            </div>
          </div>
          <div className="card-footer">
            <div className="item">
              <span>Manufacturer: </span>
              {car.manufacturer}
            </div>
            <div className="item">
              <span>Year: </span>
              {car.year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
