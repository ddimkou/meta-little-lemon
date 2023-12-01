import Form from "./Form";
import Map from "./Map";
import "./Reserve.css";
import RestaurantInfos from "./RestaurantInfos";

const Reserve = () => {
  return (
    <main className="reserve">
      <Form />
      <Map />

      <RestaurantInfos />
    </main>
  );
};

export default Reserve;
