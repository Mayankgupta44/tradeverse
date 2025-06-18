import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-3 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. How do I activate F&O" />
          <br />
          <a href="">Track account opening</a>
          <br />
          <a href="">Track segment activation</a>
          <br />
          <a href="">Intraday margins</a>
          <br />
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">1. Surveillance measure on scrips - May 2025</a>
            </li>
            <li>
              <a href="">2. Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
