import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="card text-center mx-3">
      <div className="card-body">
        <h5 className="card-title">Contact-us</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link to="/" className="btn btn-warning">
          Go somewhere
        </Link>
      </div>
      <p className="text-mute text-black">
        welcome to <span className="text-bold">T-store</span>
      </p>
    </div>
  );
}

export default Footer;
