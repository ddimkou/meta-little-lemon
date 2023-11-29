import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="card">
      <form className="reservation-form">
        <select>
          <option value="" disabled selected>
            People
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7+">7+</option>
        </select>

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Date"
          className="date-picker"
        />

        <select>
          <option value="" disabled selected>
            Hour
          </option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
          <option value="23:00">23:00</option>
        </select>

        <select>
          <option value="" disabled selected>
            Occasion
          </option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>

        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
};

export default Form;
