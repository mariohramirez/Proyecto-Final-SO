import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '.';
import NavBar from "./component/NavBar/NavBar";
import Masthead from "./component/Masthead/Masthead";
import PortfolioSection from "./component/Portfolio/PortfolioSection";
import Footer from "./component/Footer/Footer";

function App() {
  const [emulationStatus, setEmulationStatus] = useState("");
  const [selectedArch, setSelectedArch] = useState("x86_64");

  return (
    <>
    <div>
      <header>
        <NavBar />
        <Masthead />
        <PortfolioSection />
      </header>
    </div>
    <Footer />
    </>
  );
}

export default App;
