import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Routers
import Routers from './Routers/Routers'

function App() {
  return (
    <Router>
      {
        <Routers/>
      }
    </Router>
  );
}

export default App;