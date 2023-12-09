// Cars.js

import "./Cars.css"; // Import the CSS file for styling
import { useEffect, useState } from "react";
import CarList from "./carList";
import { Spinner } from "react-bootstrap";
import { getCars, deleteCar } from "../../services/carServices";
import CarForm from "./CarForm";

const Cars = () => {
  const [cars, setCars] = useState([]); // State variable to store the list of cars
  const [loading, setLoading] = useState(false); // State variable to track loading status

  // Function to fetch the list of cars from the server
  const fetchCars = async () => {
    try {
      setLoading(true);
      const fetchedCars = await getCars();
      setCars(fetchedCars);
    } catch (error) {
      console.error("Error fetching cars:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars(); // Fetch cars when the component mounts
  }, []);

  // Function to handle the deletion of a car
  const handleDelete = async (carId) => {
    try {
      await deleteCar(carId);
      // Update the cars list by removing the deleted car
      setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  // Function to handle the update of a car
  const handleUpdate = (updatedCar) => {
    // Update the cars list by replacing the old car with the updated one
    setCars((prevCars) =>
      prevCars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
    );
  };

  // Function to handle the addition of a new car
  const handleAddCar = (newCar) => {
    // Update the cars list by adding the new car
    setCars((prevCars) => [...prevCars, newCar]);
  };

  return (
    <div className="cars">
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <>
          {/* Render the CarForm component for adding new cars */}
          <CarForm onAddCar={handleAddCar} />
          {/* Render the CarList component to display the list of cars */}
          <CarList
            cars={cars}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        </>
      )}
    </div>
  );
};

export default Cars; // Export the Cars component for use in other parts of the application
