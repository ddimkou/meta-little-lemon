import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ availableTimes, dispatch, updateTimes }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    dispatch({ type: "UPDATE_AVAILABLE_TIMES", payload: date });
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

    // Format date "dd/MM/yyyy"
    const formattedDate = selectedDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    // Validation Success
    const reservationInfo = `\nYour reservation completed!\n\nPeople: ${selectedPeople}\nDate: ${formattedDate}\nHour: ${selectedTime}\nOccasion: ${selectedOccasion}.\n\nFor changes, please contact us on 21 0999 9999`;
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
          {Array.isArray(availableTimes) ? (
            availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No available times
            </option>
          )}
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

export default BookingForm;
