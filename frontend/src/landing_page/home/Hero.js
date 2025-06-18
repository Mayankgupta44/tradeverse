import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img className="mb-5" src="media/images/homeHero.png" alt="Hero Image" />
        <h1 className="mt-5 mb-4">Invest in everything</h1>
        <p className="text-muted fs-5 mb-4">
          Online platform to invest in stocks, derivatives, mutual funds and
          more
        </p>
        <button
          style={{ width: "20%", height: "20%", margin: "0 auto" }}
          type="button"
          class="btn btn-primary btn-sm fs-5 mb-5 mt-2"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
