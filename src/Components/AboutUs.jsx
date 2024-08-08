import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { TiArrowForward } from "react-icons/ti";

function AboutUs() {
  return (
    <div className="mt-3">
      <div
        className="container-xxl text-light aboutbgimg"
        style={{ borderRadius: "50% 50% 0% 0%" }}
      >
        <div className="row justify-content-center align-items-center">
          <div
            className="col-lg-5 mt-5 bg-light pt-5 mb-5 px-5 border-0 rounded-5"
            data-aos="fade-up"
          >
            <div className="omax_tittle fcolor rounded-1 widthmanage text-capitalize">
              About <span className="scolor "> Us</span>
            </div>
            <p
              className="lh-lg rounded-1 text-secondary"
              style={{ textAlign: "justify" }}
            >
              Omax Industries, takes pride in operating from a spacious factory
              area of 56,000 square feet. With a strong establishment in 2011,
              we have successfully navigated the industry for over 12 years,
              leveraging our experience and expertise to deliver exceptional
              manufacturing solutions.
            </p>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 col-12 lh-lg span fw-bold">
                <p>
                  <TiArrowForward className="iconbg me-3 text-light" />
                  Product Quality
                </p>
              </div>
              <div className="col-md-6 col-12 lh-lg span fw-bold">
                <p>
                  <TiArrowForward className="iconbg me-3 text-light" /> 24/7
                  Support
                </p>
              </div>
              <div className="col-md-6 col-12 lh-lg span fw-bold">
                <p>
                  <TiArrowForward className="iconbg me-3 text-light" /> Top
                  Manufacturer
                </p>
              </div>
              <div className="col-md-6 col-12 lh-lg span fw-bold">
                <p>
                  <TiArrowForward className="iconbg me-3 text-light" /> Fair
                  Prices
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mb-5" data-aos="fade-up">
            <Player
              autoplay
              loop
              src={
                "https://lottie.host/91085534-17ab-478b-b675-4abfc853588d/K9TXMpv64r.json"
              }
              className="lottie"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
