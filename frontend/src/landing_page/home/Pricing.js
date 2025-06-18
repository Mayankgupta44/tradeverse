import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-primary fw-semibold">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-md-6">
          <div className="row justify-content-end text-center">
            <div className="col-5 p-3 border me-3">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-5 p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p className="mb-5">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
