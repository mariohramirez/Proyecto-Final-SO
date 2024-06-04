import React from "react";
import '../../Theme/styles.css'; // Ruta relativa al archivo CSS

export const NavBar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container d-flex align-items-center flex-column">
        <a class="navbar-brand" href="#page-top">
          Emulacion de arquitecturas
        </a>
      </div>
    </nav>
    
  );
};

export default NavBar;
