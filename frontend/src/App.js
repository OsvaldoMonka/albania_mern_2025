import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Qarqet from "./pages/qarqet/Qarqet";
import Destinacionet from "./pages/destinacionet/Destinacione";
import { destinacionetPerQarqet } from "./utils/data";
import { useEffect } from "react";
import Saved from "./pages/saved/Saved";
import Mirsevini from "./pages/mirsevini/Mirsevini";

// App.js
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Mirsevini />} />
        <Route path="/qarqet" element={<Qarqet />} />
        <Route path="/qarqet/:qarkName" element={<Destinacionet />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
}
export default App;
