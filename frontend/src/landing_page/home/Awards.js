import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-4 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest broker"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 p-4 mt-4">
          <h1 className="mb-4">Largest Stock Broker in India</h1>
          <p className="mb-4">
            2+ million TradeVerse  clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul >
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul >
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4"
            style={{ width: "90%", height: "120%"  }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
