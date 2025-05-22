import { useEffect, useState } from "react";
import { getAllBikes } from "../api";
import { Ebike } from "../types/Ebike";
import BikeCard from "../components/BikeCard";

const Home = () => {
  const [bikes, setBikes] = useState<Ebike[]>([]);

  useEffect(() => {
    getAllBikes()
      .then((res) => setBikes(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default Home;
