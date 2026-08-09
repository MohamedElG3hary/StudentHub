import { Link } from "react-router-dom";
import "../Styles/pages.css";

function Home() {
  return (
    <section className="home-page page-container">
      <div className="home-content">
        <span>Student Management System</span>

        <h1>Manage your students easily</h1>

        <p>
          Add students, display their cards, update their
          ages, and open a separate details page.
        </p>

        <div className="home-actions">
          <Link to="/students" className="main-button">
            View Students
          </Link>

          <Link
            to="/add-student"
            className="outline-button"
          >
            Add Student
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;