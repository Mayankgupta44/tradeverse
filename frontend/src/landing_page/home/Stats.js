import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row align-items-center p-5">
        {/* Text Section */}
        <div className="col-md-6 p-3">
          <h1 className="mb-5 fs-2">Trust with confidence</h1>
          <h4 className="fs-4">Customer-first always</h4>
          <p className="text-muted">
            That's why 1.6+ crore customers trust TradeVerse  with ~ ₹6 lakh crores
            of equity investments.
          </p>
          <h4 className="fs-4">No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
          </p>
          <h4 className="fs-4">The TradeVerse  universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="fs-4">Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "120%" }}
          />
          <div>
            <a href="#" style={{textDecoration:"none"}} className="text-primary fw-semibold me-4">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" style={{textDecoration:"none"}} className="text-primary fw-semibold">
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
