import { Link } from "react-router-dom";
import "../Styles/pages.css";

function NotFound() {
  return (
    <section className="not-found page-container">
      <h1>404</h1>
      <p>The requested page was not found.</p>

      <Link to="/" className="main-button">
        Back Home
      </Link>
    </section>
  );
}

export default NotFound;