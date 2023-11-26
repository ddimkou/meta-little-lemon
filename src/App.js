import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Reserve from "./Reserve";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
