import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>
      <div className="row p-3 text-muted">
        <div className="col-6 p-5 text-center">
          <img
            style={{ borderRadius: "100%" }}
            width={"60%"}
            src="media/images/nithinKamath.jpg"
            alt="people"
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div
          className="col-6 text-muted"
          style={{ lineHeight: "1.4", fontSize: "1.2em", marginTop: "80px" }}
        >
          <p>
            Nithin bootstrapped and founded TradeVerse  in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradeVerse  has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
