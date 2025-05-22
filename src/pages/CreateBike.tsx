import { useState } from "react";
import { createBike } from "../api";
import { useNavigate } from "react-router-dom";

const CreateBike = () => {
  const [bike, setBike] = useState<any>({ manufacturer: '', model: '', summary: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBike({ ...bike, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createBike(bike).then(() => navigate("/admin"));
  };

  return (
    <div className="container mt-4">
      <h2>Create New Bike</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Manufacturer</label>
          <input className="form-control" name="manufacturer" value={bike.manufacturer} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Model</label>
          <input className="form-control" name="model" value={bike.model} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Summary</label>
          <textarea className="form-control" name="summary" value={bike.summary} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Create</button>
      </form>
    </div>
  );
};

export default CreateBike;
