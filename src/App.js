import React from "react";
import SpaceFlight from "./SpaceFlight";
import "./App.css";

function App() {
  return (
    <div>
      <h1>SpaceX Flights</h1>
      <p>
        El que calla por vergüenza o malicia algún pecado grave que ha
        cometido...o hace su confesión sin dolor o sin propósito o sin ánimo de
        cumplir la penitencia, no sólo no se confiesa bien sino que comete un
        grave sacrilegio y queda con la obligación de volver a confesar los
        pecados que confesó y los que no confesó, más el sacrilegio que hizo.
      </p>
      <SpaceFlight />
    </div>
  );
}

export default App;
