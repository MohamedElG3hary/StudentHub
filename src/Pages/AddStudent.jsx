import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/pages.css";

const emptyStudent = {
  name: "",
  age: "",
  faculty: "",
  gpa: "",
  image: "",
};

function AddStudent({ addStudent }) {
  const [newStudent, setNewStudent] = useState(emptyStudent);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setNewStudent((currentStudent) => ({
      ...currentStudent,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const age = Number(newStudent.age);
    const gpa = Number(newStudent.gpa);

    if (
      !newStudent.name.trim() ||
      !newStudent.age ||
      !newStudent.faculty.trim() ||
      !newStudent.gpa ||
      !newStudent.image.trim()
    ) {
      setError("Please complete all fields.");
      return;
    }

    if (!Number.isFinite(age) || age <= 0) {
      setError("Please enter a valid age.");
      return;
    }

    if (!Number.isFinite(gpa) || gpa < 0 || gpa > 4) {
      setError("GPA must be between 0 and 4.");
      return;
    }

    addStudent({
      ...newStudent,
      age,
      gpa,
    });

    setNewStudent(emptyStudent);
    setError("");

    navigate("/students");
  }

  return (
    <section className="page-container">
      <form
        className="add-student-form"
        onSubmit={handleSubmit}
      >
        <div className="page-heading">
          <span>Add Student</span>
          <h1>Student Information</h1>

          <p>
            Add a new student using the form below.
          </p>
        </div>

        {error && (
          <p className="form-error">{error}</p>
        )}

        <label>
          Name

          <input
            type="text"
            name="name"
            placeholder="Student name"
            value={newStudent.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Age

          <input
            type="number"
            name="age"
            min="1"
            placeholder="Student age"
            value={newStudent.age}
            onChange={handleChange}
          />
        </label>

        <label>
          Faculty

          <input
            type="text"
            name="faculty"
            placeholder="Faculty"
            value={newStudent.faculty}
            onChange={handleChange}
          />
        </label>

        <label>
          GPA

          <input
            type="number"
            name="gpa"
            min="0"
            max="4"
            step="0.01"
            placeholder="GPA from 0 to 4"
            value={newStudent.gpa}
            onChange={handleChange}
          />
        </label>

        <label>
          Image URL

          <input
            type="url"
            name="image"
            placeholder="https://example.com/photo.jpg"
            value={newStudent.image}
            onChange={handleChange}
          />
        </label>

        
        {newStudent.image && (
          <div className="form-preview">
            <img
              src={newStudent.image}
              alt="Student preview"
              onError={(event) => {
                event.currentTarget.src = "/default-student.png";
              }}
            />
          </div>
        )}

        <button
          type="submit"
          className="submit-button"
        >
          Add Student
        </button>
      </form>
    </section>
  );
}

export default AddStudent;