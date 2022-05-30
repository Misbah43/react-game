import "./App.css";
// import Images from './Images';
// import {useState} from "react";
// import {shuffle} from 'lodash';
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Easy } from "./Easy";
import { Medium } from "./Medium";
import { Hard } from "./Hard";

function App() {
 
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/easy" element={<Easy />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/hard" element={<Hard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
