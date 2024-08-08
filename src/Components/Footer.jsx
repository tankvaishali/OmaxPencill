import React from "react";
import "../assets/css/Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { MdWifiCalling3 } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="footer_bg text-white mt-auto">
        <div className="container p-3">
          <div className="row m-o p-0 ">
            <div className="col-12 col-lg-4 mt-5">
              <div>
                <div className="text-center">
                  <div data-aos="zoom-in" data-aos-duration="1500">
                    <img
                      src={require("../assets/image/logo_omax.png")}
                      alt="Not Found"
                      className="mb-4"
                      height={70}
                    />
                  </div>
                  <p
                    style={{ textAlign: "justify" }}
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    We are a part of one of the leading Conglomerate of Western
                    India producing varieties of Stationery products in Surat,
                    Gujarat, India.
                  </p>
                  <div className="container-md ps-0 my-2 mt-4">
                    <div className=" justify-content-center">
                      <div className="text-center mb-4 d-flex align-content-center justify-content-start justify-content-lg-center align-items-center">
                        <div data-aos="flip-left" data-aos-duration="1500">
                          <Link
                            to={
                              "https://x.com/i/flow/login?redirect_after_login=%2FIndustries4488"
                            }
                            className="Socialicons  border border-white border-2 rounded rounded-circle ms-0 ms-lg-2 mx-1  "
                          >
                            <FaTwitter className="ring text-white rounded" />
                          </Link>
                        </div>
                        {/* <div data-aos="flip-left" data-aos-duration="1500">
                     <Link to={'/'} className='Socialicons  border border-white border-2 rounded rounded-circle  mx-1'><RiFacebookFill className='ring text-white rounded' /></Link>
                     </div> */}
                        <div data-aos="flip-left" data-aos-duration="1500">
                          <Link
                            to={"https://in.pinterest.com/omaxindus/"}
                            className="Socialicons  border border-white border-2 rounded rounded-circle  mx-1"
                          >
                            <FaPinterestP className="ring text-white rounded" />
                          </Link>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="1500">
                          <Link
                            to={"https://www.instagram.com/omaxpencil/"}
                            className="Socialicons  border border-white border-2 rounded rounded-circle  mx-1"
                          >
                            <FaInstagram className="ring text-white rounded" />
                          </Link>
                        </div>

                        <div data-aos="flip-left" data-aos-duration="1500">
                          <Link
                            to={"https://www.youtube.com/@omaxindustries2587"}
                            className="Socialicons  border border-white border-2 rounded rounded-circle  mx-1"
                          >
                            <SiYoutube className="ring text-white rounded" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 ps-0 ps-lg-5 mt-3 mt-lg-5">
              <div
                className="ps-3"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <h4 className="get_touchcolor fs-3 fw-medium py-1">
                  Quick Links
                </h4>
                <Link
                  to={"/"}
                  className="text-decoration-none footerlink_hover text-white"
                >
                  <h6 className="fs-6 ">
                    <MdOutlineDoubleArrow className="m-2" /> Home
                  </h6>
                </Link>
                <Link
                  to={"/About"}
                  className="text-decoration-none footerlink_hover text-white"
                >
                  <h6 className="fs-6 ">
                    <MdOutlineDoubleArrow className="m-2" /> About
                  </h6>
                </Link>
                <Link
                  to={"/ProductPage"}
                  className="text-decoration-none footerlink_hover text-white"
                >
                  <h6 className="fs-6 ">
                    <MdOutlineDoubleArrow className="m-2" /> Products
                  </h6>
                </Link>
                <Link
                  to={"/NewsPage"}
                  className="text-decoration-none footerlink_hover text-white"
                >
                  <h6 className="fs-6 ">
                    <MdOutlineDoubleArrow className="m-2" /> News
                  </h6>
                </Link>
                <Link
                  to={"/ContactusPage"}
                  className="text-decoration-none footerlink_hover text-white"
                >
                  <h6 className="fs-6 ">
                    <MdOutlineDoubleArrow className="m-2" /> Contact Us
                  </h6>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-5 ps-0 ps-lg-5 mt-3 mt-lg-5">
              <div className="ps-3" data-aos="zoom-in" data-aos-duration="1500">
                <div className="row justify-content-center">
                  <h4 className="get_touchcolor fs-3 fw-medium py-1">
                    Get In Touch
                  </h4>
                  <p className="d-flex py-1">
                    <TiLocation className="me-2 mt-1" />
                    <span className="col-10" style={{ textAlign: "justify" }}>
                      {" "}
                      Omax industries, Block no. 233-A, plot no. 1 to 6, Krishna
                      park industries, Near Canal road, Village Lindiad, Dist.
                      Surat - 394110, Gujarat, India.
                    </span>
                  </p>
                  <p>
                    <span className="me-2 fs-5">
                      <IoIosMail />
                    </span>{" "}
                    omaxindus@gmail.com
                  </p>
                  <p>
                    <span className="me-2 fs-5">
                      <MdWifiCalling3 />
                    </span>{" "}
                    (+91) 9727155560
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright text-center ">
            © Omax Industries 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
