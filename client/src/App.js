import React from "react";
import { useEffect, useState } from "react";

function App() {

  const [backendData, setBackendData] = useState([{}]);


  return (
      <div>
        <header>
          <h1>Interfaz de Usuario</h1>
          <button onClick={handleEmulate}>Emular</button>
        </header>
      </div>

  );
}

function handleEmulate() {
  // Aquí puedes realizar una solicitud al servidor Node.js para iniciar la emulación
  fetch('/emulate')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

export default App;