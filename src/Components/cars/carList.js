// CarList.js

import { Col, Container, Row } from "react-bootstrap";
import CarCard from "./CarCard";

const CarList = ({ cars, onDelete, onUpdate }) => {
  return (
    <Container className="car-list">
      {/* Use Container from react-bootstrap for layout styling */}
      <Row>
        {/* Use Row from react-bootstrap for horizontal alignment */}
        {cars.map((car) => (
          /* Map through the list of cars and render a CarCard component for each */
          <Col key={car.id} lg={4} md={6}>
            {/* Use Col from react-bootstrap to define the layout of each CarCard */}
            <CarCard car={car} onDelete={onDelete} onUpdate={onUpdate} />
            {/* Render the CarCard component and pass car data, onDelete, and onUpdate as props */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarList; // Export the CarList component for use in other parts of the application
