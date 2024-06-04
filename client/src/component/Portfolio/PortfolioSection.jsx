import React from "react";
import "../../Theme/styles.css"; // Ruta relativa al archivo CSS

export const PortfolioSection = () => {
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
          <div class="col-md-6 col-lg-4 mb-5">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal3"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal4"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal5"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal6"
            >
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PortfolioSection;
