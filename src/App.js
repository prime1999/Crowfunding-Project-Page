import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/pages/About";
import Header from "./Components/Layouts/Header";
import Mastercraft from "./Components/Layouts/Mastercraft";
import ProjectProgress from "./Components/Layouts/ProjectProgress";
import Rewards from "./Components/Layouts/Rewards";
import Footer from "./Components/Layouts/Footer";
import { CrowdFundingProvider } from "./Components/Context";

function App() {
  return (
    <CrowdFundingProvider>
      <Router>
        <Header />
        <div className="w-11/12 mx-auto lg:w-1/2">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Mastercraft />
                  <ProjectProgress />
                  <Rewards />
                </>
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CrowdFundingProvider>
  );
}

export default App;
