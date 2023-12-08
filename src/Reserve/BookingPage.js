import { useEffect } from "react";
import BookingForm from "./BookingForm";
import Map from "./Map";
import "./Reserve.css";
import RestaurantInfos from "./RestaurantInfos";

// Exercise: API request available hours but...
// API server is not working 404.
// avoiding the error with empty fetchAPI since it doesnt return
const fetchAPI = () => {};

const BookingPage = ({ availableTimes, updateTimes, dispatch }) => {
  useEffect(() => {
    const fetchAvailableTimes = async (date) => {
      try {
        const times = await fetchAPI(date.toISOString().split("T")[0]);
        updateTimes(times);
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };

    const currentDate = new Date();
    fetchAvailableTimes(currentDate);
  }, [updateTimes]);

  return (
    <main className="reserve">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Map />
      <RestaurantInfos />
    </main>
  );
};

export default BookingPage;
