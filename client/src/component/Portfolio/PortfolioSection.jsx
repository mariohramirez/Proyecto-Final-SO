import React from "react";
import "../../Theme/styles.css"; // Ruta relativa al archivo CSS
import { useState } from "react";

export const PortfolioSection = () => {

  const [emulationStatus, setEmulationStatus] = useState("");

  const handleClickAndroid = () => {
    fetch(`http://localhost:5000/emulate/x86_64`)
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

  const handleClickLocOs = () => {
    fetch(`http://localhost:5000/emulate/LOC_OS`)
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
    <>
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            Arquitecturas
          </h2>
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <i class="fas fa-star"></i>
            </div>
            <div class="divider-custom-line"></div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4 mb-5">
              <div
                onClick={handleClickAndroid}
                class="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/Alecive-Flatwoken-Apps-Android.512.png"
                  alt="..."
                />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div
              onClick={handleClickLocOs}
                class="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal2"
              >
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/loc-os-linux-seeklogo.svg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4 mb-5">
              <div
                onClick={handleStop}
                class="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#portfolioModal1"
              >
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/stop.png"
                  alt="..."
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
