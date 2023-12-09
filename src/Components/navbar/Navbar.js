import "./Navbar.css"; // Import the CSS file for styling

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">My Car List</Link>
        {/* Use Link to create a navigation link to the home ("/") route */}
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {/* Link to the home ("/") route */}
        </li>
        <li>
          <Link to="/cars">Cars</Link>
          {/* Link to the cars ("/cars") route */}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          {/* Link to the contact ("/contact") route */}
        </li>
        <li>
          <Link to="/about">About</Link>
          {/* Link to the about ("/about") route */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; // Export the Navbar component for use in other parts of the application
