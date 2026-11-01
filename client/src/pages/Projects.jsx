function Projects() {
  return (
    <main className="projects-page">

      {/* Introduces my selected projects */}
      <section className="projects-hero">
        <div className="section-container">

          <p className="section-label">SELECTED PROJECTS</p>

          <h1>
            Exploring health data, web development,
            and database systems.
          </h1>

          <p className="projects-intro">
            A selection of projects that demonstrate my experience with
            data visualization, client-side development, database design,
            and creating technology with practical applications.
          </p>

        </div>
      </section>


      {/* Tableau Project */}
      <section className="project-section">
        <div className="section-container">

          <div className="project-layout">

            <div className="project-number">
              01
            </div>

            <div className="project-content">

              <p className="project-category">
                HEALTH DATA • DATA VISUALIZATION
              </p>

              <h2>
                Ontario Mortality Trends, 2013–2023
              </h2>

              <p className="project-description">
                An interactive Tableau dashboard developed to explore
                mortality trends in Ontario over a ten-year period.
                The project focuses on presenting health data in a clear,
                organized, and accessible visual format.
              </p>

              {/* Technologies used in the project */}
              <div className="project-tags">
                <span>Tableau</span>
                <span>Data Analysis</span>
                <span>Data Visualization</span>
                <span>Health Data</span>
              </div>

              {/* Opens the full Tableau project */}
              <a
                href="https://public.tableau.com/views/OntarioMortalityTrends20132023CrystelHilton/OntarioMortalityDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Live Dashboard
                <span aria-hidden="true"> ↗</span>
              </a>

            </div>

          </div>


          {/* Displays the live Tableau dashboard */}
          <div className="project-visual tableau-visual">

            <iframe
              src="https://public.tableau.com/views/OntarioMortalityTrends20132023CrystelHilton/OntarioMortalityDashboard?:showVizHome=no&:embed=yes"
              title="Ontario Mortality Trends 2013 to 2023 Tableau Dashboard"
              className="tableau-iframe"
              loading="lazy"
            ></iframe>

          </div>

        </div>
      </section>


      {/* Zemi Restaurant Project */}
      <section className="project-section">
        <div className="section-container">

          <div className="project-layout">

            <div className="project-number">
              02
            </div>

            <div className="project-content">

              <p className="project-category">
                CLIENT-SIDE WEB DEVELOPMENT
              </p>

              <h2>
                Zemi Restaurant Website
              </h2>

              <p className="project-description">
                A client-side web development project created as a
                multi-page restaurant website. The project applies HTML,
                CSS, and JavaScript to organize restaurant information,
                navigation, menu content, and interactive features.
              </p>

              {/* Technologies used in the project */}
              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Web Design</span>
              </div>

              {/* Opens the live restaurant website */}
              <a
                href="http://studentweb.cencol.ca/chilton/home.html"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Live Website
                <span aria-hidden="true"> ↗</span>
              </a>

            </div>

          </div>


          {/* Browser-style preview of the Zemi website */}
          <div className="project-visual website-visual">

            <div className="browser-preview">

              <div className="browser-bar">

                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="browser-address">
                  studentweb.cencol.ca/chilton
                </div>

              </div>


              <div className="zemi-preview">

                <div className="zemi-preview-navigation">

                  <div className="zemi-wordmark">
                    ZEMI
                  </div>

                  <div className="zemi-navigation-links">
                    <span>HOME</span>
                    <span>MENU</span>
                    <span>ABOUT</span>
                    <span>CONTACT</span>
                  </div>

                </div>


                <div className="zemi-preview-content">

                  <p className="zemi-small-heading">
                    RESTAURANT
                  </p>

                  <h3>
                    Zemi
                  </h3>

                  <p>
                    A client-side restaurant website developed using
                    HTML, CSS, and JavaScript.
                  </p>

                  <a
                    href="http://studentweb.cencol.ca/chilton/home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="zemi-preview-button"
                  >
                    Visit Website
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Database Project */}
      <section className="project-section database-project">
        <div className="section-container">

          <div className="project-layout">

            <div className="project-number">
              03
            </div>

            <div className="project-content">

              <p className="project-category">
                DATABASE DESIGN • ORACLE SQL
              </p>

              <h2>
                Enterprise eCommerce Database
              </h2>

              <p className="project-description">
                A relational database designed for an eCommerce
                environment. The project models the flow of customer,
                product, order, payment, shipping, return, refund,
                wishlist, and vendor information.
              </p>

              {/* Database technologies and concepts */}
              <div className="project-tags">
                <span>Oracle SQL</span>
                <span>Database Design</span>
                <span>Data Modelling</span>
                <span>Normalization</span>
              </div>

            </div>

          </div>


          {/* Explains the main database process */}
          <div className="database-case-study">

            <p className="section-label">
              SYSTEM FLOW
            </p>

            <h3>
              From customer activity to completed order.
            </h3>

            <p>
              The database connects the major processes required
              to support an eCommerce system.
            </p>


            {/* Visualizes the main database flow */}
            <div className="database-flow">

              <div className="flow-node">
                <span>01</span>

                <div>
                  <strong>Customer</strong>
                  <small>Account & activity</small>
                </div>
              </div>


              <div className="flow-arrow" aria-hidden="true">
                →
              </div>


              <div className="flow-node">
                <span>02</span>

                <div>
                  <strong>Product</strong>
                  <small>Catalogue & category</small>
                </div>
              </div>


              <div className="flow-arrow" aria-hidden="true">
                →
              </div>


              <div className="flow-node">
                <span>03</span>

                <div>
                  <strong>Order</strong>
                  <small>Items & totals</small>
                </div>
              </div>


              <div className="flow-arrow" aria-hidden="true">
                →
              </div>


              <div className="flow-node">
                <span>04</span>

                <div>
                  <strong>Payment</strong>
                  <small>Transaction status</small>
                </div>
              </div>


              <div className="flow-arrow" aria-hidden="true">
                →
              </div>


              <div className="flow-node">
                <span>05</span>

                <div>
                  <strong>Shipment</strong>
                  <small>Order delivery</small>
                </div>
              </div>

            </div>


            {/* Shows other areas supported by the database */}
            <div className="database-capabilities">

              <article>
                <span>01</span>

                <h4>
                  Product & Vendor Data
                </h4>

                <p>
                  Organizes products, categories, vendor relationships,
                  pricing, and supply information.
                </p>
              </article>


              <article>
                <span>02</span>

                <h4>
                  Customer Activity
                </h4>

                <p>
                  Connects customer accounts with orders, wishlists,
                  payments, and other shopping activity.
                </p>
              </article>


              <article>
                <span>03</span>

                <h4>
                  Order Processing
                </h4>

                <p>
                  Connects customer orders with individual order items,
                  products, quantities, and order totals.
                </p>
              </article>


              <article>
                <span>04</span>

                <h4>
                  Payment & Shipping
                </h4>

                <p>
                  Supports payment transactions and shipment information
                  associated with customer orders.
                </p>
              </article>


              <article>
                <span>05</span>

                <h4>
                  Returns & Refunds
                </h4>

                <p>
                  Tracks returned items and refund information associated
                  with completed purchases.
                </p>
              </article>


              <article>
                <span>06</span>

                <h4>
                  Wishlist
                </h4>

                <p>
                  Allows customer accounts to maintain products that
                  may be reviewed or purchased later.
                </p>
              </article>

            </div>


            {/* Summarizes the database project outcome */}
            <div className="database-outcome">

              <p className="section-label">
                PROJECT OUTCOME
              </p>

              <p>
                The project demonstrates how relational database design
                can connect multiple areas of an eCommerce system while
                maintaining organized relationships between customers,
                products, vendors, orders, payments, shipments,
                wishlists, returns, and refunds.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Projects