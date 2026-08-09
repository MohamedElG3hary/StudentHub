import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../Components/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Students from "../Pages/Students";
import AddStudent from "../Pages/AddStudent";
import StudentDetails from "../Pages/StudentDetails";
import NotFound from "../Pages/NotFound";

function App() {
  const [studentData, setStudentData] = useState([ ]);

  function addStudent(newStudent) {
    const studentToAdd = {
      ...newStudent,
      id: crypto.randomUUID(),
      age: Number(newStudent.age),
      gpa: Number(newStudent.gpa),
      showDetails: true,
    };

    setStudentData((currentStudents) => [
      ...currentStudents,
      studentToAdd,
    ]);
  }

  function ageIncrease(studentId) {
    setStudentData((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              age: student.age + 1,
            }
          : student
      )
    );
  }

  function toggleDetails(studentId) {
    setStudentData((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              showDetails: !student.showDetails,
            }
          : student
      )
    );
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route
          path="students"
          element={
            <Students
              studentData={studentData}
              ageIncrease={ageIncrease}
              toggleDetails={toggleDetails}
            />
          }
        />

        <Route
          path="add-student"
          element={<AddStudent addStudent={addStudent} />}
        />

        <Route
          path="students/:studentId"
          element={
            <StudentDetails studentData={studentData} />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;