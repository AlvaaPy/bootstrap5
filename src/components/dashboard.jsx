import React from "react";

function Dashboard() {
  return (
    <main>
      <section
        id="home"
        className="vh-100 d-flex align-items-center bg-light text-dark"
        data-aos="fade-up"
      >
        <div className="container-fluid text-center">
          <h1 className="display-4 fw-bold">Welcome to Dashboard</h1>
          <p className="lead">
            Manage your tasks, view your progress, and access our amazing
            features.
          </p>
          <a href="#about" className="btn btn-primary btn-lg">
            Explore More
          </a>
        </div>
      </section>

      <section
        id="about"
        className="vh-100 d-flex align-items-center bg-white text-dark"
        data-aos="fade-left"
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">About Us</h2>
              <p className="lead">
                This dashboard provides a platform to organize your tasks, plan
                projects, and achieve your goals efficiently.
              </p>
              <a href="#services" className="btn btn-outline-primary">
                Learn More
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://via.placeholder.com/400"
                alt="About Us"
                className="img-fluid rounded"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="vh-100 d-flex align-items-center bg-light text-dark"
        data-aos="fade-right"
      >
        <div className="container-fluid">
          <h2 className="fw-bold text-center mb-5">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="flip-left">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title">Task Management</h5>
                  <p className="card-text">
                    Organize and prioritize your tasks to stay on top of your
                    schedule.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="flip-up">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title">Project Planning</h5>
                  <p className="card-text">
                    Plan your projects efficiently with our robust tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="flip-right">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <h5 className="card-title">Personal Development</h5>
                  <p className="card-text">
                    Develop your skills and grow with our guided programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
