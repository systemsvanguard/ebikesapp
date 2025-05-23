// src/components/Footer.tsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-5">
      <div className="container text-center">
          © 2024 - {new Date().getFullYear()} <strong><span className="fs-4">World's Fastest Performance e-Bikes</span></strong> | All rights reserved.
          <br />Yet another coding practice portfolio site by Toastmaster <a href="https://ryanhunter.ca/" className="link_no_underline">Ryan Hunter</a> | GitHub handle <span style={{ color: '#008b00', fontWeight: 'bold', fontStyle: 'italic' }}><a href="https://github.com/systemsvanguard" className="link_no_underline">SystemsVanguard</a></span>.
          <br />Built using React, Typescript, JSON, Bootstrap Icons, Google Fonts, CSS, & and lots of love <span style={{ color: '#ff0000'}}>&#9829; </span>  <span style={{ color: '#00008b'}}>&#9825; </span>  <span style={{ color: '#00008b'}}>&#9829; </span> .
          <br />
      </div>
      <div className="container text-center">
        <Link className="link_no_underline mx-2" to="/">Home</Link> |  
        <Link className="link_no_underline mx-2" to="/admin">Admin</Link>  |  
        <Link className="link_no_underline mx-2" to="/about">About</Link>  |  
        <Link className="link_no_underline mx-2" to="/contact">Contact</Link>  
        <br />
      </div>
    </footer>
  );
};

export default Footer;
