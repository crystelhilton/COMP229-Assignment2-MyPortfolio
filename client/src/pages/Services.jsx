function Services() {
  const services = [
    {
      number: "01",
      title: "Software & Web Development",
      description:
        "Development of structured and user-friendly software and web solutions with attention to usability, accessibility, and maintainable code.",
      skills: ["JavaScript", "React", "C#", "HTML", "CSS", "Git"]
    },
    {
      number: "02",
      title: "Database Design & SQL",
      description:
        "Design and development of relational databases, including data modelling, SQL queries, normalization, and database implementation.",
      skills: [
        "Oracle SQL",
        "Database Design",
        "Data Modelling",
        "Normalization"
      ]
    },
    {
      number: "03",
      title: "Digital Health Systems",
      description:
        "Development and analysis of healthcare-focused technology solutions with consideration for health information, workflows, accessibility, and user needs.",
      skills: [
        "Digital Health",
        "Health Information Systems",
        "Systems Design",
        "Accessibility"
      ]
    },
    {
      number: "04",
      title: "Quality Assurance & Testing",
      description:
        "Testing and reviewing digital solutions to identify issues, support quality, document findings, and improve the overall user experience.",
      skills: [
        "Quality Assurance",
        "Testing",
        "Troubleshooting",
        "Documentation"
      ]
    },
    {
      number: "05",
      title: "Data Visualization",
      description:
        "Creation of dashboards and visualizations that organize data and communicate patterns, trends, and information in a clear and understandable format.",
      skills: [
        "Tableau",
        "Dashboards",
        "Data Analysis",
        "Data Visualization"
      ]
    },
    {
      number: "06",
      title: "Research & Problem Solving",
      description:
        "Structured research and analysis to understand problems, organize information, evaluate possible solutions, and communicate findings clearly.",
      skills: [
        "Research",
        "Analysis",
        "Problem Solving",
        "Communication"
      ]
    }
  ]

  return (
    <main className="services-page">

      {/* Introduces the services I offer */}
      <section className="services-hero">
        <div className="section-container">

          <p className="section-label">SERVICES</p>

          <h1>
            Technical skills applied to
            practical solutions.
          </h1>

          <p className="services-intro">
            My areas of service reflect the technical skills I am
            developing across software, web development, databases,
            data visualization, digital health, and quality assurance.
          </p>

        </div>
      </section>


      {/* Displays my services and related technical skills */}
      <section className="services-list-section">
        <div className="section-container">

          <div className="services-grid">

            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
              >

                <div className="service-card-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div
                    className="service-line"
                    aria-hidden="true"
                  ></div>

                </div>

                <h2>{service.title}</h2>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-skills">

                  {service.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* Explains the approach I use when working on solutions */}
      <section className="services-approach">

        <div className="section-container services-approach-grid">

          <div className="approach-heading">

            <p className="section-label">
              MY APPROACH
            </p>

            <h2>
              Understand the problem.
              Build with purpose.
            </h2>

            <p>
              Whether I am working with software, data, or digital
              health systems, I use a structured approach that keeps
              both technical requirements and the user experience
              in mind.
            </p>

          </div>


          <div className="approach-steps">

            <div className="approach-step">
              <span>01</span>

              <div>
                <h3>Understand</h3>

                <p>
                  Identify the problem, requirements, users,
                  and context before developing a solution.
                </p>
              </div>
            </div>


            <div className="approach-step">
              <span>02</span>

              <div>
                <h3>Design</h3>

                <p>
                  Organize the information and plan a solution
                  that is practical, clear, and user-focused.
                </p>
              </div>
            </div>


            <div className="approach-step">
              <span>03</span>

              <div>
                <h3>Build</h3>

                <p>
                  Apply appropriate technologies and development
                  methods to implement the solution.
                </p>
              </div>
            </div>


            <div className="approach-step">
              <span>04</span>

              <div>
                <h3>Review</h3>

                <p>
                  Test, evaluate, document, and improve the
                  solution with attention to quality.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Services