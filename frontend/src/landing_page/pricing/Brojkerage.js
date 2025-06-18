import React from "react";

function Brojkerage() {
  return (
    <div className="container">
      <div className="row p-5 mb-5">
        <div className="col-8">
         <a href="" style={{textDecoration:"none"}}><h3 className="text-center">Brokerage calculator</h3></a> 
          <ul className="text-muted mt-5 " style={{lineHeight:"2.2em", fontSize:"14px" }}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of 250 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              220 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or 2200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 240 per executed order instead of 220 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
        <a href="" style={{textDecoration:"none"}}><h3 className="text-center">List of Charges</h3></a> 
        </div>
      </div>
    </div>
  );
}

export default Brojkerage;
