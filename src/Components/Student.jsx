import { Link } from "react-router-dom";
import "../Styles/student.css";

function getCardStyle(gpa) {
  const numericGpa = Number(gpa);

  if (numericGpa >= 3.5) {
    return {
      "--card-color": "#2ca345",
      "--card-soft": "#f6fff7",
      "--card-border": "#bfe7c4",
      "--card-badge": "#e7f8e9",
    };
  }

  if (numericGpa >= 3) {
    return {
      "--card-color": "#f06a00",
      "--card-soft": "#fff8f1",
      "--card-border": "#ffd1aa",
      "--card-badge": "#fff0e2",
    };
  }

  if (numericGpa >= 2) {
    return {
      "--card-color": "#1463e6",
      "--card-soft": "#f3f8ff",
      "--card-border": "#b9d5ff",
      "--card-badge": "#eaf2ff",
    };
  }

  return {
    "--card-color": "#dc2626",
    "--card-soft": "#fff5f5",
    "--card-border": "#fecaca",
    "--card-badge": "#fee2e2",
  };
}

function Student({
  id,
  name,
  age,
  faculty,
  gpa,
  image,
  showDetails,
  ageIncrease,
  toggleDetails,
}) {
  const style = getCardStyle(gpa);

  return (
    <article className="student-card" style={style}>
      <div className="student-image">
      <img
        src={image}
        alt={name}
        onError={(event) => {
          urrentTarget.src = "/default-student.png";
        }}
      />
    </div>

      <div className="student-header">
        <h2>{name}</h2>

        <span className="gpa-badge">
          GPA {Number(gpa).toFixed(2)}
        </span>
      </div>

      {showDetails && (
        <div className="student-details">
          <p>
            <strong>Age:</strong>
            <span>{age}</span>
          </p>

          <p>
            <strong>Faculty:</strong>
            <span>{faculty}</span>
          </p>

          <p>
            <strong>GPA:</strong>
            <span>{Number(gpa).toFixed(2)}</span>
          </p>
        </div>
      )}

      <div className="card-actions">
        <button
          type="button"
          onClick={() => toggleDetails(id)}
        >
          {showDetails
            ? "Hide Details"
            : "Show Details"}
        </button>

        <button
          type="button"
          onClick={() => ageIncrease(id)}
        >
          Increase Age
        </button>
      </div>

      <Link
        className="show-more-link"
        to={`/students/${id}`}
      >
        Show More
      </Link>
    </article>
  );
}

export default Student;