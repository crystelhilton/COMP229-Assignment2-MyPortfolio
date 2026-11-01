import { Link } from 'react-router-dom'
import logo from '../assets/crystel-hilton-logo.png'

function Home() {
  return (
    <main className="home-page">

      {/* Introduces me and the purpose of my portfolio */}
      <section className="home-hero">
        <div className="home-hero-inner">

          <div className="home-hero-content">
            <p className="home-eyebrow">
              DIGITAL HEALTH • ENGINEERING TECHNOLOGY
            </p>

            <h1>
              Connecting healthcare experience with
              <span> technology.</span>
            </h1>

            <p className="home-introduction">
              I am Crystel Hilton. My background brings together healthcare,
              quality assurance, research, and technology. I am building on
              that experience through software development, databases, programming,
              and health information systems.
            </p>

            <p className="home-mission">
              My goal is to contribute to digital health solutions that are
              reliable, accessible, and designed with the people who use them
              in mind.
            </p>

            <div className="home-actions">
              <Link to="/projects" className="primary-btn">
                Explore My Work
              </Link>

              <Link to="/about" className="secondary-btn">
                About Me
              </Link>
            </div>
          </div>

          {/* Displays my personal logo */}
          <div className="home-brand-visual">
            <div className="logo-glow"></div>

            <img
              src={logo}
              alt="Crystel Hilton Digital Health Technology and Data logo"
              className="hero-logo"
            />
          </div>

        </div>
      </section>


      {/* Displays my main professional and technical areas */}
      <section className="focus-section">
        <div className="section-container">

          <div className="focus-heading">
            <p className="section-label">PROFESSIONAL FOCUS</p>

            <h2>
              Where healthcare, information, quality, and technology meet.
            </h2>

            <p>
              My professional and technical background allows me to approach
              digital health from more than one perspective.
            </p>
          </div>

          <div className="focus-grid">

            <article className="focus-card">
              <span className="focus-number">01</span>

              <div className="focus-icon" aria-hidden="true">
                &lt;/&gt;
              </div>

              <h3>Software & Web</h3>

              <p>
                Developing applications and web experiences using technologies
                including C#, Python, JavaScript, HTML, CSS, and React.
              </p>
            </article>


            <article className="focus-card featured-card">
              <span className="focus-number">02</span>

              <div className="focus-icon" aria-hidden="true">
                +
              </div>

              <h3>Digital Health</h3>

              <p>
                Combining healthcare experience with an understanding of
                technology, information systems, workflows, and patient-centred
                digital solutions.
              </p>
            </article>


            <article className="focus-card">
              <span className="focus-number">03</span>

              <div className="focus-icon" aria-hidden="true">
                DB
              </div>

              <h3>Data & Databases</h3>

              <p>
                Working with SQL, Oracle Database, data organization,
                analysis, and information-focused problem solving.
              </p>
            </article>


            <article className="focus-card">
              <span className="focus-number">04</span>

              <div className="focus-icon" aria-hidden="true">
                ✓
              </div>

              <h3>Quality & Research</h3>

              <p>
                Bringing experience in quality assurance, testing,
                documentation, research, and systematic problem solving.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* Explains how my previous experience connects to technology */}
      <section className="story-section">
        <div className="section-container story-grid">

          <div className="story-title">
            <p className="section-label">MY APPROACH</p>

            <h2>
              Healthcare experience.
              <br />
              Technology thinking.
            </h2>
          </div>

          <div className="story-content">
            <p>
              My experience in healthcare, laboratory operations, quality
              assurance, and research has taught me the importance of
              accuracy, reliability, documentation, and clear communication.
            </p>

            <p>
              Today, I bring that same mindset to software, databases,
              data, and digital health—building technical skills while
              keeping the needs of real users at the centre of the work.
            </p>

            <Link to="/about" className="story-link">
              More About My Background
              <span aria-hidden="true"> →</span>
            </Link>
          </div>

        </div>
      </section>


      {/* Provides a link to view my projects */}
      <section className="projects-callout">
        <div className="section-container projects-callout-inner">

          <div>
            <p className="light-label">SELECTED WORK</p>

            <h2>
              See how I turn learning and experience into practical work.
            </h2>
          </div>

          <Link to="/projects" className="light-button">
            View Projects
          </Link>

        </div>
      </section>

    </main>
  )
}

export default Home