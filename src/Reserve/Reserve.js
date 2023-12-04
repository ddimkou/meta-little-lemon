import Form from "./Form";
import Map from "./Map";
import "./Reserve.css";
import RestaurantInfos from "./RestaurantInfos";

const Reserve = ({ availableTimes, dispatch }) => {
  return (
    <main className="reserve">
      <Form availableTimes={availableTimes} dispatch={dispatch} />
      <Map />

      <RestaurantInfos />
    </main>
  );
};

export default Reserve;
