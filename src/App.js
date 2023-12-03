import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Reserve from "./Reserve/Reserve";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

function App() {
  const [availableTimes] = useState([
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ]);
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/reserve"
            element={<Reserve availableTimes={availableTimes} />}
          />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
