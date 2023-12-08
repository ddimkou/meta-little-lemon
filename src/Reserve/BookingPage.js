import BookingForm from "./BookingForm";
import Map from "./Map";
import "./Reserve.css";
import RestaurantInfos from "./RestaurantInfos";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <main className="reserve">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Map />

      <RestaurantInfos />
    </main>
  );
};

export default BookingPage;
