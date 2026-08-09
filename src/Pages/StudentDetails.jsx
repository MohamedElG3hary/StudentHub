import { Link, useParams } from "react-router-dom";
import "../Styles/pages.css";

function StudentDetails({ studentData }) {
  const { studentId } = useParams();

  const student = studentData.find(
    (currentStudent) =>
      currentStudent.id === studentId
  );

  if (!student) {
    return (
      <section className="not-found page-container">
        <h1>Student not found</h1>

        <Link to="/students" className="main-button">
          Back to Students
        </Link>
      </section>
    );
  }

  return (
    <section className="page-container">
      <article className="student-details-page">
        <div className="details-page-image">
          <img
            src={student.image}
            alt={`${student.name} profile`}
            onError={(event) => {
            "/default-student.png";
            }}
          />
        </div>

        <div className="details-page-content">
          <span>Student Details</span>

          <h1>{student.name}</h1>

          <dl>
            <div>
              <dt>Age</dt>
              <dd>{student.age}</dd>
            </div>

            <div>
              <dt>Faculty</dt>
              <dd>{student.faculty}</dd>
            </div>

            <div>
              <dt>GPA</dt>
              <dd>{student.gpa.toFixed(2)}</dd>
            </div>
          </dl>

          <Link
            to="/students"
            className="outline-button"
          >
            Back to Students
          </Link>
        </div>
      </article>
    </section>
  );
}

export default StudentDetails;