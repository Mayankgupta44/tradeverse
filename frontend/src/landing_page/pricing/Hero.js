import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 text-center border-bottom mt-5 mb-5">
        <div className="col-4">
          <img width={"80%"} src="media/images/pricingEquity.svg" alt="pricing0" />
          <h3 className="fs-2">Free equity delivery</h3>
          <p className="mt-3 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img width={"80%"} src="media/images/intradayTrades.svg" alt="pricing20" />
          <h3 className="fs-2">Intraday and F&O trades</h3>
          <p className="mt-3 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img width={"80%"} src="media/images/pricingEquity.svg" alt="pricing0" />
          <h3 className="fs-2">Free direct MF</h3>
          <p className="mt-3 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
