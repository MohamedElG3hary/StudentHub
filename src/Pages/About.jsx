import "../Styles/pages.css";

function About() {
  return (
    <section className="about-page page-container">
      <div className="page-heading">
        <span>About Us</span>

        <h1>About StudentHub</h1>

        <p>
          StudentHub is a simple student management platform
          that helps users organize and access student
          information in one place.
        </p>
      </div>

      <div className="about-items">
        <article>
          <h2>Student Management</h2>

          <p>
            Easily add new students and manage important
            information such as name, age, faculty, GPA,
            and profile image.
          </p>
        </article>

        <article>
          <h2>Simple Experience</h2>

          <p>
            StudentHub provides a simple and clear interface
            that makes viewing and updating student
            information quick and easy.
          </p>
        </article>

        <article>
          <h2>Student Profiles</h2>

          <p>
            Browse all registered students and open a
            dedicated page to view the complete details
            of each student.
          </p>
        </article>
      </div>

      <div className="about-mission">
        <h2>Our Mission</h2>

        <p>
          Our mission is to provide a simple and organized
          platform for managing student records while making
          information easy to find and update.
        </p>
      </div>
    </section>
  );
}

export default About;