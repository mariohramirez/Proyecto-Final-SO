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
    <div>
      <header>
        <h1>Interfaz de Usuario</h1>
        <label>
          Seleccionar arquitectura:
          <select value={selectedArch} onChange={(e) => setSelectedArch(e.target.value)}>
            <option value="x86_64">x86_64</option>
            <option value="LOC_OS">LOC_OS</option>
            console.log(`Iniciando emulación para ${selectedArch}...`);
            {/* Añadir más opciones para otras arquitecturas */}
          </select>
        </label>
        <button onClick={handleEmulate}>Emular</button>
        <button onClick={handleStop}>Detener</button>
        <p>{emulationStatus}</p>
      </header>
    </div>
  );
}

export default App;
