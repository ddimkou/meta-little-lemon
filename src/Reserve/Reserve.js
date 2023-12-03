import Form from "./Form";
import Map from "./Map";
import "./Reserve.css";
import RestaurantInfos from "./RestaurantInfos";

const Reserve = ({ availableTimes }) => {
  return (
    <main className="reserve">
      <Form availableTimes={availableTimes} />
      <Map />

      <RestaurantInfos />
    </main>
  );
};

export default Reserve;
