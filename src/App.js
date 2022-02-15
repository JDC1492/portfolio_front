import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Projects from "./components/projectComponents/Projects";
// import AboutContainer from "./containers/AboutContainer";
import NavBarContainer from "./containers/NavBarContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* specifying with the 'exact' keyword since other routes share part of this URL */}
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/projects" element={<Projects />} />
          {/* <Route exact path="/about" element={<AboutContainer />} /> */}
        </Routes>
        <NavBarContainer />
      </Router>
    </div>
  );
}

export default App;
