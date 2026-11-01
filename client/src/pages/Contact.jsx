import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Contact() {
  const navigate = useNavigate()

  // Stores the information entered in the form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: ""
  })

  // Updates the form when the user types
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Captures the form and returns to the home page
  const handleSubmit = (event) => {
    event.preventDefault()

    console.log("Contact form:", formData)

    navigate("/")
  }

  return (
    <main className="contact-page">

      {/* Contact heading */}
      <section className="contact-hero">
        <div className="section-container">

          <p className="section-label">CONTACT</p>

          <h1>Let's connect.</h1>

          <p className="contact-intro">
            Interested in connecting about technology, digital health,
            data, or professional opportunities? Feel free to reach out
            using the contact information or form below.
          </p>

        </div>
      </section>


      {/* Contact information and form */}
      <section className="contact-section">
        <div className="section-container contact-grid">

          {/* My contact information */}
          <aside className="contact-information">

            <p className="section-label">
              CONTACT INFORMATION
            </p>

            <h2>Get in touch.</h2>

            <p className="contact-information-intro">
              I'm open to connecting about professional opportunities,
              projects, technology, and digital health.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <span className="contact-detail-number">01</span>

                <div>
                  <p>Name</p>
                  <span>Crystel Hilton</span>
                </div>
              </div>


              <div className="contact-detail">
                <span className="contact-detail-number">02</span>

                <div>
                  <p>Email</p>

                  <a href="mailto:crystelhilton@gmail.com">
                    crystelhilton@gmail.com
                  </a>
                </div>
              </div>


              <div className="contact-detail">
                <span className="contact-detail-number">03</span>

                <div>
                  <p>Location</p>
                  <span>Toronto, Ontario, Canada</span>
                </div>
              </div>

            </div>

            <div className="contact-note">
              <span aria-hidden="true">+</span>

              <p>
                Currently building experience across digital health,
                software development, databases, data visualization,
                and health information technology.
              </p>
            </div>

          </aside>


          {/* Contact form */}
          <div className="contact-form-container">

            <div className="contact-form-heading">

              <p className="section-label">
                SEND A MESSAGE
              </p>

              <h2>Have something in mind?</h2>

              <p>
                Complete the form below and provide your
                preferred contact information.
              </p>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                  />
                </div>

              </div>


              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="contactNumber">
                    Contact Number
                  </label>

                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Phone number"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                  />
                </div>

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="7"
                  required
                ></textarea>

              </div>


              <div className="form-submit-area">

                <button
                  type="submit"
                  className="contact-submit"
                >
                  Send Message
                  <span aria-hidden="true">→</span>
                </button>

                <p>
                  Required fields must be completed before submitting.
                </p>

              </div>

            </form>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact