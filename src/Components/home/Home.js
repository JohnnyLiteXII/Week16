import "./Home.css"; // Import the CSS file for styling

import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <div className="home">
      <h1>Welcome To My Car List</h1>
      {/* Use Link to create a navigation link to the cars ("/cars") route */}
      <Link to="/cars">
        <button>Let's Go Cars</button>
      </Link>
    </div>
  );
}

export default Home; // Export the Home component for use in other parts of the application
