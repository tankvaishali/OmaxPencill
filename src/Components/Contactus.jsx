import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import HOC from "./HOC";
import Form from "./Form";

const data = [
  {
    title: "Email",
    description: "omaxindus@gmail.com",
    icon: <IoMdMail />,
    aos: "fade-right",
  },
  {
    title: "Location",
    description:
      "Omax industries, Block no. 233-A, plot no. 1 to 6, Krishna park industries, Near Canal road, Village Lindiad, Dist. Surat - 394110, Gujarat, India.",
    icon: <FaMapLocationDot />,
    aos: "fade-up",
  },
  {
    title: "Call Us",
    description: "+91 97271 55560",
    icon: <PiPhoneCallFill />,
    aos: "fade-left",
  },
];

function Contactus() {
  return (
    <>
      <div className=" mb-5">
        <div className=" container pt-5 mt-5 w-75 mx-auto">
          <div
            className=" text-center mainomax_tittle  fcolor mx-auto text-capitalize"
            data-aos-duration="1800"
            data-aos="fade-up"
          >
            Let's Become A Part Of{" "}
            <span className="scolor"> Omax Industries</span>
          </div>
          <div
            className="py-3 omax_pera text-center text-secondary widthmanage mx-auto"
            data-aos-duration="1800"
            data-aos="zoom-in"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            molestias, aspernatur illo deleniti inventore autem?
          </div>
        </div>
      </div>
      <div className="contact_bgcolor mb-5 overflow-hidden">
        <div className="container overflow-hidden">
          <div className="widthmanage main mx-auto">
            <div className="row m-0  g-4 ">
              {data.slice(1, 2).map((item, index) => (
                <div key={index} className="col-12 d-flex ">
                  <div
                    className=" rounded  rounded-3 shadow h-100 w-100 overflow-hidden"
                    data-aos={item.aos}
                    data-aos-duration="1800"
                  >
                    <div className="h-100 text-center py-3 py-lg-5 ">
                      <div className="fs-1 contact_icon rounded-circle text-center d-flex justify-content-center align-items-center mx-auto mb-3">
                        {item.icon}
                      </div>
                      <div className="fs-4 py-1 heading_fcolor fw-bold">
                        {item.title}
                      </div>
                      <div className="py-2 p-5 text-center w-100 text-secondary">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row m-0  g-4 mb-3 ">
              {data
                .slice(0, 1)
                .concat(data.slice(2, 3))
                .map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-lg-6 d-flex "
                  >
                    <div
                      className=" rounded shadow rounded-3 h-100 w-100 "
                      data-aos={item.aos}
                      data-aos-duration="1800"
                    >
                      <div className="h-100 text-center  py-3 py-lg-5">
                        <div className="fs-1 contact_icon rounded-circle text-center d-flex justify-content-center align-items-center mx-auto mb-3">
                          {item.icon}
                        </div>
                        <div className="fs-4 heading_fcolor fw-bold">
                          {item.title}
                        </div>
                        <div className="py-2 px-1 p-5 text-center w-100 text-secondary ">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div
          className="w-100 h-100 pt-5"
          data-aos="zoom-in"
          data-aos-duration="1800"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56734.10752454833!2d72.8125605954388!3d21.18145659395229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f83685ea5ed%3A0xd59027e2f261b53b!2z4KS44KWC4KSw4KSkIOCknOCkguCkleCljeCktuCkqA!5e1!3m2!1sen!2sin!4v1713976259639!5m2!1sen!2sin"
            height="450"
            width="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="From Google Map"
          ></iframe>
        </div>
      </div>
      <div className="py-5">
        <Form />
      </div>
    </>
  );
}

export default HOC(Contactus);
