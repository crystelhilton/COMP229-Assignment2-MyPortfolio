import profilePicture from '../assets/crystel-hilton-profile-picture.png'

function About() {
  return (
    <main className="about-page">

      {/* Introduces me and my professional background */}
      <section className="about-hero">
        <div className="section-container about-hero-grid">

          <div className="about-photo-column">
            <div className="about-photo-frame">
              <div className="about-photo-accent"></div>

              <img
                src={profilePicture}
                alt="Crystel Hilton"
                className="about-profile-picture"
              />
            </div>
          </div>

          <div className="about-introduction">
            <p className="section-label">ABOUT ME</p>

            <h1>Crystel Hilton</h1>

            <p className="about-title">
              Digital Health Engineering Technology
            </p>

            <p className="about-lead">
              I bring together experience in healthcare, quality assurance,
              research, and technology with a growing technical foundation in
              software development, databases, data, and digital health.
            </p>

            <p>
              My professional background has taught me to value accuracy,
              clear documentation, reliability, and the experience of the
              people using a system. I now apply that perspective to my work
              in Digital Health Engineering Technology.
            </p>

            {/* Opens my professional resume */}
            <a
              href="/Crystel_Hilton_General_Professional_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              View My Resume
            </a>
          </div>

        </div>
      </section>


      {/* Shows how my professional background connects to digital health */}
      <section className="about-journey">
        <div className="section-container">

          <div className="about-section-heading">
            <p className="section-label">MY BACKGROUND</p>

            <h2>
              A professional journey from healthcare to technology.
            </h2>

            <p>
              My experience across healthcare, quality, research, and
              technology gives me a multidisciplinary perspective on
              digital health.
            </p>
          </div>

          <div className="journey-grid">

            <article className="journey-card">
              <span className="journey-number">01</span>

              <h3>Healthcare</h3>

              <p>
                Experience supporting laboratory operations, testing,
                documentation, quality control, and healthcare-related
                workflows.
              </p>
            </article>

            <div className="journey-arrow" aria-hidden="true">
              →
            </div>

            <article className="journey-card">
              <span className="journey-number">02</span>

              <h3>Quality & Research</h3>

              <p>
                Experience with quality assurance, troubleshooting,
                documentation, research support, data collection, and
                systematic problem solving.
              </p>
            </article>

            <div className="journey-arrow" aria-hidden="true">
              →
            </div>

            <article className="journey-card journey-highlight">
              <span className="journey-number">03</span>

              <h3>Digital Health</h3>

              <p>
                Developing technical knowledge in software, web development,
                databases, data, systems design, and health information
                technology.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* Highlights the skills and experience I bring */}
      <section className="about-strengths">
        <div className="section-container strengths-layout">

          <div className="strengths-heading">
            <p className="section-label">WHAT I BRING</p>

            <h2>
              Technical development supported by real-world experience.
            </h2>
          </div>

          <div className="strengths-list">

            <div className="strength-item">
              <span>01</span>

              <div>
                <h3>Healthcare Perspective</h3>

                <p>
                  An understanding of accuracy, documentation, quality,
                  workflows, and the importance of reliable information
                  in healthcare environments.
                </p>
              </div>
            </div>

            <div className="strength-item">
              <span>02</span>

              <div>
                <h3>Technical Skills</h3>

                <p>
                  Experience with C#, Python, JavaScript, React, SQL,
                  Oracle Database, HTML, CSS, Git, and GitHub.
                </p>
              </div>
            </div>

            <div className="strength-item">
              <span>03</span>

              <div>
                <h3>Quality Mindset</h3>

                <p>
                  A detail-oriented approach shaped by quality assurance,
                  testing, troubleshooting, research, and documentation.
                </p>
              </div>
            </div>

            <div className="strength-item">
              <span>04</span>

              <div>
                <h3>Human-Centred Thinking</h3>

                <p>
                  An interest in technology that is understandable,
                  accessible, reliable, and useful to the people who
                  depend on it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default About