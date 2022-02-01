
import React from 'react';
import { BrowserRouter as Router, 
 Route, Routes } from 'react-router-dom';


import Home from "./pages/Home";
import Slide from "./pages/Slide";

export default function Navigation() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/Slide/:id" element={<Slide />}>
          </Route>
        </Routes>
    </Router>
  );
}
