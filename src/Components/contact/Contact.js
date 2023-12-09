import "./Contact.css";

import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! Feel free to reach out through the
        following contact information:
      </p>
      <ul>
        <li>Email: PremierCars@gmail.com</li>
        <li>Phone: +1 123-456-7890</li>
        <li>Address: 123 Main Street, New York, NY 10031 </li>
      </ul>
    </div>
  );
};

export default Contact;
