import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { TiArrowForward } from "react-icons/ti";
import { Link } from "react-router-dom";

function HomeContact() {
  return (
    <div>
      <div className="container-lg overflow-hidden">
        <div className="row align-items-center justify-content-center overflow-hidden">
          <div className="col-lg-5 col-md-6 overflow-hidden" data-aos="fade-right " data-aos-duration="1800">
            <img src={require("../assets/image/pencil-case_5641298.png")} alt="" className='img-fluid animated-image pt-5' />
          </div>
          <div
            className="col-lg-7 col-md-6 fw-bold lh-lg p-4 overflow-hidden"
            data-aos="fade-left" data-aos-duration="1800"
          >
            <div className="omax_tittle fcolor homecontenthover py-3 lh-sm text-capitalize">Omax <span className="scolor">Iundustries</span></div>
            <h4 className="color pb-2 text-capitalize">
              The Best Stationary Products Making Company
            </h4>
            <div className="row align-items-center justify-content-center pt-1">
              <div className="col-md-6 col-12 lh-lg span fw-bold">
                <p>
                  <TiArrowForward className="iconbg me-3 text-light" /> Premium
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

            <div className="btn_hover mx-md-0 mx-auto my-3">
              <Link
                to={"/ContactusPage"}
                className="btnedit p-2 fw-medium w-100 border-0 rounded-3 text-center text-white mt-auto"
              >
                Contact Us to ask any Question
                <span>
                  <MdOutlineDoubleArrow />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
