import { useEffect, useState } from "react";
import { getAllBikes, deleteBike } from "../api";
import { Ebike } from "../types/Ebike";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [bikes, setBikes] = useState<Ebike[]>([]);
  const navigate = useNavigate();

  const loadBikes = () => {
    getAllBikes().then((res) => setBikes(res.data));
  };

  useEffect(() => {
    loadBikes();
  }, []);

  //  Refactor in Phase 2:  Use Sweet Alert Swal.fire() here, as a UI improvement 
  const handleDelete = (id: number) => {
    if (
        window.confirm("Are you sure you want to delete this e-bike?")
       ) {
      deleteBike(id).then(() => loadBikes());
    }
  };
  {/*
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this bike?")) {
      deleteBike(id).then(() => loadBikes());
    }
  };
  */}


  return (
    <div className="container mt-4">
      <h2>Admin Bike List</h2>
      <button className="btn btn-success mb-3" onClick={() => navigate("/create")}>
        <i className="fa-solid fa-plus"></i>  Create New Bike
      </button>
      <div className="table-responsive-md">
        <table className="table table-bordered table-striped table-hover table-sm">
            <thead className="table-light">
            <tr>
                <th>ID</th>
                <th>Manufacturer</th>
                <th>Model</th>
                <th>Price (Start)</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {bikes.map((bike) => (
                <tr key={bike.id}>
                <td>{bike.id}</td>
                <td>{bike.manufacturer}</td>
                <td>{bike.model}</td>
                <td>${bike.price_start.toLocaleString()}</td>
                <td>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => navigate(`/edit/${bike.id}`)}>
                    <i className="fa-solid fa-pencil"></i>  Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(bike.id)}>
                    <i className="fa-solid fa-trash"></i>  Delete
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
      <br /><br />
    </div>
  );
};

export default List;
