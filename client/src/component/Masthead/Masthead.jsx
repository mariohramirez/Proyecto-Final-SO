import React from "react";
import "../../Theme/styles.css"; // Ruta relativa al archivo CSS

export const Masthead = () => {
  return (
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <h1 class="masthead-heading text-uppercase mb-0">
          Arquitecturas a elegir
        </h1>
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
