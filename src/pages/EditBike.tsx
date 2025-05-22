import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBikeById, updateBike } from "../api";
import { Ebike } from "../types/Ebike";

const EditBike = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState<Ebike | null>(null);

  useEffect(() => {
    getBikeById(Number(id)).then((res) => setBike(res.data));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (bike) setBike({ ...bike, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBike(bike).then(() => navigate("/admin"));
  };

  if (!bike) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Edit Bike</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Model</label>
          <input className="form-control" name="model" value={bike.model} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Summary</label>
          <textarea className="form-control" name="summary" value={bike.summary} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default EditBike;
