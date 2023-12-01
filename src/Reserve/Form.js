import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation Check
    if (
      !selectedPeople ||
      !selectedTime ||
      !selectedDate ||
      !selectedOccasion
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Validation Success
    const reservationInfo = `\nYour reservation completed!\n\nPeople: ${selectedPeople}\nDate: ${selectedDate.toLocaleDateString()}\nHour: ${selectedTime}\nOccasion: ${selectedOccasion}.\n\nFor changes, please contact us on 21 0999 9999`;
    window.alert(reservationInfo);
  };

  return (
    <div className="card">
      <form className="reservation-form" onSubmit={handleSubmit}>
        <select
          value={selectedPeople}
          onChange={(e) => setSelectedPeople(e.target.value)}
          required
        >
          <option value="" disabled>
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
          required
        />

        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        >
          <option value="" disabled>
            Hour
          </option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
          <option value="23:00">23:00</option>
        </select>

        <select
          value={selectedOccasion}
          onChange={(e) => setSelectedOccasion(e.target.value)}
          required
        >
          <option value="" disabled>
            Occasion
          </option>
          <option value="Meeting">Meeting</option>
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
