import React from "react";
import { useLocation,Routes,Route } from "react-router-dom";
import {Home,Resume,Project,Contact} from '../Pages'

function RoutesWithAnimation() {
    const location = useLocation();
  
    return (
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    );
  }

  export default RoutesWithAnimation