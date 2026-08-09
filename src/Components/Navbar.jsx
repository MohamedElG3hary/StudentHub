import { NavLink } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar() {
  function getLinkClass({ isActive }) {
    return isActive
      ? "nav-link active-link"
      : "nav-link";
  }

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="logo">
          StudentHub
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={getLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={getLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/students"
            className={getLinkClass}
          >
            Students
          </NavLink>

          <NavLink
            to="/add-student"
            className={getLinkClass}
          >
            Add Student
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;