function Education() {
  return (
    <main className="education-page">

      {/* Introduces my educational background */}
      <section className="education-hero">
        <div className="section-container">

          <p className="section-label">EDUCATION</p>

          <h1>
            Building a foundation across people, health,
            design, and technology.
          </h1>

          <p className="education-intro">
            My educational background brings together psychology,
            design, and digital health technology. Each area has
            contributed to how I understand people, solve problems,
            and approach the development of practical technology.
          </p>

        </div>
      </section>


      {/* Displays my current education */}
      <section className="education-main">
        <div className="section-container">

          <div className="education-entry featured-education">

            <div className="education-year">
              <span>2026</span>
              <div className="education-line"></div>
              <span>Present</span>
            </div>

            <div className="education-details">

              <p className="education-status">
                CURRENT PROGRAM
              </p>

              <h2>Digital Health Engineering Technology</h2>

              <h3>Centennial College</h3>

              <p className="education-description">
                A multidisciplinary technology program focused on
                software development, databases, systems, data, and
                digital technologies used within healthcare environments.
              </p>

              {/* Lists the main areas of my current program */}
              <div className="education-focus">

                <div>
                  <span>01</span>
                  <h4>Software Development</h4>
                  <p>
                    Programming, object-oriented development,
                    software engineering, and web applications.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <h4>Database Systems</h4>
                  <p>
                    Relational database design, SQL, Oracle Database,
                    data modelling, and database implementation.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <h4>Digital Health Systems</h4>
                  <p>
                    Healthcare technology, health information systems,
                    systems design, and technology-supported care.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <h4>Web Technologies</h4>
                  <p>
                    HTML, CSS, JavaScript, React, client-side
                    development, and modern web applications.
                  </p>
                </div>

              </div>

            </div>
          </div>


          {/* Displays my fashion and design education */}
          <div className="education-entry previous-education">

            <div className="education-marker">
              <span>DESIGN</span>
            </div>

            <div className="education-details">

              <h2>Fashion Techniques and Design</h2>

              <h3>George Brown College</h3>

              <p className="education-description">
                Developed skills in design, technical construction,
                attention to detail, problem solving, and creating
                solutions around the needs of the end user.
              </p>

            </div>

          </div>


          {/* Displays my psychology education */}
          <div className="education-entry psychology-education">

            <div className="education-marker">
              <span>PSYCHOLOGY</span>
            </div>

            <div className="education-details">

              <h2>
                Associate of Arts and Sciences — Psychology
              </h2>

              <h3>
                Dominica State College
              </h3>

              <p className="education-location">
                Roseau, Commonwealth of Dominica • 2009–2012
              </p>

              <p className="education-description">
                Developed a foundation in psychology and human
                behaviour, with additional academic studies in Biology.
                This background contributes to my interest in
                people-centred approaches to healthcare and technology.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Explains how my educational backgrounds connect */}
      <section className="education-connection">

        <div className="section-container education-connection-grid">

          <div>

            <p className="section-label">
              THE CONNECTION
            </p>

            <h2>
              Different disciplines.
              One approach to problem solving.
            </h2>

          </div>

          <div className="connection-text">

            <p>
              My background spans psychology, design, healthcare,
              and technology. Although these fields are different,
              they share an important focus: understanding problems
              and developing solutions for people.
            </p>

            <p>
              I bring that perspective into digital health by combining
              technical learning with attention to usability, accuracy,
              accessibility, and the people who ultimately interact
              with technology.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Education