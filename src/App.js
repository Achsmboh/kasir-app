import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Sukses } from "./pages";
import { NavBar } from "./component";
import { Component } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sukses" element={<Sukses />} />
        <Route path="*" element={<div>Error masse</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
