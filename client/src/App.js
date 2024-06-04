import React, { useState } from "react";

function App() {
  const [emulationStatus, setEmulationStatus] = useState("");
  const [selectedArch, setSelectedArch] = useState("x86_64");

  const handleEmulate = () => {
    fetch(`http://localhost:5000/emulate/${selectedArch}`)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setEmulationStatus(data);
      })
      .catch(error => {
        console.error('Error:', error);
        setEmulationStatus('Error al iniciar la emulación');
      });
  };

  const handleStop = () => {
    fetch('http://localhost:5000/stop')
      .then(response => response.text())
      .then(data => {
        console.log(data);
        setEmulationStatus(data);
      })
      .catch(error => {
        console.error('Error:', error);
        setEmulationStatus('Error al detener la emulación');
      });
  };

  return (
    <html
  key="1"
  lang="en"
>
  <head>
    <meta charSet="utf-8" />
    <meta
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
      name="viewport"
    />
    <meta
      content=""
      name="description"
    />
    <meta
      content=""
      name="author"
    />
    <title>
      Freelancer - Start Bootstrap Theme
    </title>
    <link
      href="assets/favicon.ico"
      rel="icon"
      type="image/x-icon"
    />
    <script
      crossOrigin="anonymous"
      src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="css/styles.css"
      rel="stylesheet"
    />
  </head>
  <body id="page-top">
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container d-flex align-items-center flex-column">
        <a
          className="navbar-brand"
          href="#page-top"
        >
          Emulacion de arquitecturas
        </a>
      </div>
    </nav>
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <h1 className="masthead-heading text-uppercase mb-0">
          Arquitecturas a elegir
        </h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <i className="fas fa-star" />
          </div>
          <div className="divider-custom-line" />
        </div>
      </div>
    </header>
    <section
      className="page-section portfolio"
      id="portfolio"
    >
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Arquitecturas
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <i className="fas fa-star" />
          </div>
          <div className="divider-custom-line" />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-target="#portfolioModal1"
              data-bs-toggle="modal"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                alt="..."
                className="img-fluid"
                src="assets/img/portfolio/Alecive-Flatwoken-Apps-Android.512.png"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-target="#portfolioModal2"
              data-bs-toggle="modal"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                alt="..."
                className="img-fluid"
                src="assets/img/portfolio/loc-os-linux-seeklogo.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">
              About Freelancer
            </h4>
            <p className="lead mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created by
              <a href="http://startbootstrap.com">
                Start Bootstrap
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
    <div
      aria-hidden="true"
      aria-labelledby="portfolioModal1"
      className="portfolio-modal modal fade"
      id="portfolioModal1"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="modal"
              type="button"
            />
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    Android x86
                  </h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon">
                      <i className="fas fa-star" />
                    </div>
                    <div className="divider-custom-line" />
                  </div>
                  <img
                    alt="..."
                    className="img-fluid rounded mb-5"
                    src="assets/img/portfolio/Alecive-Flatwoken-Apps-Android.512.png"
                  />
                  <p className="mb-4">
                    <button className="btn btn-secondary">
                      Emular
                    </button>
                  </p>
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <i className="fas fa-xmark fa-fw" />
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      aria-hidden="true"
      aria-labelledby="portfolioModal2"
      className="portfolio-modal modal fade"
      id="portfolioModal2"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="modal"
              type="button"
            />
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    LOC-OS LINUX
                  </h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon">
                      <i className="fas fa-star" />
                    </div>
                    <div className="divider-custom-line" />
                  </div>
                  <img
                    alt="..."
                    className="img-fluid rounded mb-5"
                    src="assets/img/portfolio/loc-os-linux-seeklogo.svg"
                  />
                  <p className="mb-4">
                    <button className="btn btn-secondary">
                      Emular
                    </button>
                  </p>
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    <i className="fas fa-xmark fa-fw" />
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    <script src="js/scripts.js" />
    <script src="https://cdn.startbootstrap.com/sb-forms-latest.js" />
  </body>
</html>

  );
}

export default App;
