import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import BookingPage from "./Reserve/BookingPage";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_AVAILABLE_TIMES":
      const newAvailableTimes = generateAvailableTimes(action.payload);
      return { ...state, availableTimes: newAvailableTimes };
    default:
      return state;
  }
};

const generateAvailableTimes = (selectedDate) => {
  return ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
};
const updateTimes = (selectedDate) => {
  return generateAvailableTimes(selectedDate);
};
const initializeTimes = () => {
  return { availableTimes: generateAvailableTimes() };
};

function App() {
  const [state, dispatch] = useReducer(timesReducer, {}, initializeTimes);

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route
            path="/reserve"
            element={
              <BookingPage
                availableTimes={state.availableTimes}
                dispatch={dispatch}
                updateTimes={updateTimes}
              />
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
