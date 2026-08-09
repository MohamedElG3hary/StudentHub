import Student from "../Components/Student";
import "../Styles/student.css";
import "../Styles/pages.css";

function Students({
  studentData,
  ageIncrease,
  toggleDetails,
}) {
  return (
    <section className="page-container">
      <div className="page-heading">
        <span>Students</span>
        <h1>Students List</h1>

        <p>
          View all students and open a separate page
          for each student's information.
        </p>
      </div>

      {studentData.length === 0 ? (
        <div className="empty-message">
          <h2>No students available</h2>
          <p>Add a new student from the form page.</p>
        </div>
      ) : (
        <div className="students-container">
          {studentData.map((student) => (
            <Student
              key={student.id}
              {...student}
              ageIncrease={ageIncrease}
              toggleDetails={toggleDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Students;