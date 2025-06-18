import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: (250, 250, 250) }}>
      <div className="container border-to mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              style={{ width: "60%" }}
              src="media/images/tradeverse-removebg-preview-cropped.svg"
              alt="logo"
            />
            <p className="mt-3 text-muted">
              © 2010 - 2025, TradeVerse Broking Ltd. All rights reserved.
            </p>
            <div className="col fs-5">
              <i className="fa-brands fa-x-twitter me-2"></i>
              <i className="fa-brands fa-square-facebook me-2"></i>
              <i className="fa-brands fa-instagram me-2"></i>
              <i className="fa-brands fa-linkedin-in me-2"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div className="col">
            <h3 className="fs-5">Company</h3>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              About
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Products
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Pricing
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Referral programme
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Careers
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              TradeVerse .tech
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Open source
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Press & media
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              TradeVerse Cares (CSR)
            </a>
          </div>
          <div className="col">
            <h3 className="fs-5">Support</h3>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Contact us
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Support portal
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Z-Connect blog
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              List of charges
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Downloads & resources
            </a>
          </div>

          {/* Account Links */}
          <div className="col">
            <h3 className="fs-5">Account</h3>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Open an account
            </a>
            <a
              className="text-muted d-block"
              href="#"
              style={{ textDecoration: "none" }}
            >
              Fund transfer
            </a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p className="text-muted mt-4">
            TradeVerse Broking Ltd.: Member of NSE, BSE & MCX – SEBI
            Registration no.: INZ000031633. CDSL/NSDL: Depository services
            through TradeVerse Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019. Commodity Trading through TradeVerse Commodities
            Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.:
            INZ000038238. Registered Address: TradeVerse Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P. Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p className="text-muted">
            For any complaints pertaining to securities broking, please write to
            complaints@tradeverse.com. For DP-related queries, write to
            dp@tradeverse.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI.
          </p>
          <p className="text-muted">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details: Name, PAN, Address, Mobile Number, E-mail
            ID. Benefits: Effective Communication, Speedy redressal.
          </p>
          <p className="text-muted">
            Attention investors: 1) Stock brokers can accept securities as
            margins only by pledge w.e.f Sep 1, 2020. 2) Update your contact
            info to receive OTPs directly from depository. 3) Check your
            holdings in the consolidated account statement from NSDL/CDSL every
            month.
          </p>
          <p className="text-muted">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your broker. Receive transaction
            details directly from the Exchange via SMS/email. KYC is a one-time
            process across intermediaries like brokers, DPs, mutual funds, etc.
            For IPOs, no need to issue cheques—authorize your bank directly."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
