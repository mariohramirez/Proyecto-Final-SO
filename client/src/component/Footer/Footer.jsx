import React from "react";
import "../../Theme/styles.css"; // Ruta relativa al archivo CSS

export const Footer = () => {
  return (
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">Created by: </h4>
            <p class="lead mb-0">
              Mario Humberto Ramirez and Andres Ramirez Aristizabal
            </p>
            <a href="https://github.com/mariohramirez/Proyecto-Final-SO">
              You can find the repository for this project here
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
