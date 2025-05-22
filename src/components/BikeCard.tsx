import { Ebike } from "../types/Ebike";
import { Link } from "react-router-dom";

interface Props {
  bike: Ebike;
}

const BikeCard = ({ bike }: Props) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100">
        <img
          src={`/images/${bike.picture}`}
          className="card-img-top rounded"
          alt={bike.model}
          style={{ width: '413px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/details/${bike.id}`}>
              {bike.manufacturer} {bike.model}
            </Link>
          </h5>
          <p className="card-text">{bike.summary.slice(0, 100)}...</p>  {/* return the 1st 25 characters ... */}
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
