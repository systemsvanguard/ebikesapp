import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBikeById } from "../api";
import { Ebike } from "../types/Ebike";

const BikeDetail = () => {
  const { id } = useParams();
  const [bike, setBike] = useState<Ebike | null>(null);

  const USDollar = new Intl.NumberFormat('en-US', { 
    style: 'currency',    
    currency: 'USD',
  });

  useEffect(() => {
    getBikeById(Number(id))
      .then((res) => setBike(res.data))
      .catch(console.error);
  }, [id]);

  if (!bike) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <img src={`/images/${bike.picture}`} alt={bike.model} width="825" height="464" />
      <h2 className="text-primary my-2"><strong>{bike.manufacturer} {bike.model}</strong> </h2>
      <p>
        <i className="fa-solid fa-motorcycle me-2"></i>   <strong>0 - 60</strong> :  {Number(bike.zero_60).toLocaleString('en-US', {minimumFractionDigits: 1 })} seconds  <br /> 
        {/* React doesn't like the .toPrecision(2) OR the .toFixed(2) code above for numeric formating  */}
        {/* <i className="fa-solid fa-motorcycle me-2"></i>   <strong>0 - 60</strong> : {bike.zero_60.toPrecision(2)} mph  <br />  */} 
        
        <i className="fa-solid fa-jet-fighter me-2"></i>   <strong>Top Speed</strong> : {bike.topspeed} mph  <br /> 

        <i className="fa-solid fa-weight-hanging me-2"></i>   <strong>Curb Weight</strong> : {bike.curb_weight} pounds  <br /> 

        <i className="fa-solid fa-horse me-2"></i>   <strong>Horsepower</strong> : {bike.horsepower} horsepower  <br /> 

        <i className="fa-solid fa-truck-monster me-2"></i>   <strong>Torque</strong> : {bike.torque} pounds-feet    <br /> 

        <i className="fa-solid fa-dollar-sign me-2"></i>   <strong>Price </strong> : {USDollar.format(bike.price_start)}  USD$ starting price    <br /> 
        
        {/* sadly, not all the motobike models have available Wikipedia.org llinks */}
        <i className="fa-brands fa-wikipedia-w me-2"></i>   <strong>Wikipedia</strong>    
        {
          bike.wiki=='N/A' ? <span className="mx-2 text-danger fst-italic">  No Wiki link available </span> : 
          <Link to={bike.wiki} target="_blank" rel="noopener noreferrer">
            <span className="mx-2 fst-bold fst-italic">  {bike.manufacturer} {bike.model}</span> 
          </Link>
        } 
        <i className="fa-solid fa-arrow-up-right-from-square px-3"></i>   <br />

        <i className="fa-solid fa-globe me-2"></i>   <strong>Web Site</strong>  <span className="mx-2 fst-bold fst-italic">  <Link to={bike.website} target="_blank" rel="noopener noreferrer">{bike.manufacturer} {bike.model}</Link></span>  <i className="fa-solid fa-arrow-up-right-from-square px-3"></i>   <br /> 
        <i className="fa-brands fa-youtube me-2"></i>   <strong>Video</strong>  <span className="mx-2 fst-bold fst-italic">  <Link to={bike.promo_video} target="_blank" rel="noopener noreferrer">{bike.manufacturer} {bike.model}</Link></span>  <i className="fa-solid fa-arrow-up-right-from-square px-3"></i>   

      </p>
      <p>{bike.summary}</p>

      <Link to="/" className="btn btn-primary mt-3"><i className="fa-solid fa-house-chimney"></i>  Return to Home</Link><br /><br />
    </div>
  );
};

export default BikeDetail;
