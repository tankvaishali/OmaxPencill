import React from "react";

const itemData = [
  {
    img: require("../assets/image/Hillcrest-12-color-Pencils-1-300x300.jpg"),
    class: "d-sm-block",
    text: "asdfgthyuilkjhbvc",
  },
  {
    img: require("../assets/image/Dezha-12-Half-Size-Color-Pencil-TREY-PACK-2-300x300_BUg8LE7.jpg"),
    class: "d-sm-block",
    text: "asdfgthyuilkjhbvc",
  },
  {
    img: require("../assets/image/sharpner-300x300.jpg"),
    class: "d-md-block d-none",
    text: "asdfgthyuilkjhbvc",
  },
];

function HomeAbout() {
  return (
    <>
      <div className="my-5">
        <div className="container w-100 mainBack">
          <div className="row align-items-center justify-content-center ">
            <div className="col-sm-10 col-11 mgtop pt-5 p-3 " data-aos="zoom-in" data-aos-duration="1800">
              <div
                className="col-md-9 col-12 bg-light shadow px-md-5 px-3  MainBackBorder aboutus_hoverline"
                style={{
                  paddingTop: "20px",
                  paddingBottom: "160px",
                  outline: "3px solid white",
                  outlineOffset: "15px",
                  color: "var(--primarycolor--)",
                  fontFamily: "var(--fontpri--)",
                }}
              >
                <div className="omax_tittle fcolor text-capitalize">About <span className="scolor">Us</span></div>
                <h3 className="line_hovereffect py-1 text-capitalize">The best Stationary Products Making Company</h3>
                <p className="text-secondary pt-2 " style={{ textAlign: 'justify' }}>
                  Omax Industries, takes pride in operating from a spacious
                  factory area of 56,000 square feet. With a strong
                  establishment in 2011, we have successfully navigated the
                  industry for over 12 years, leveraging our experience and
                  expertise to deliver exceptional manufacturing solutions.
                </p>
              </div>
            </div>
            <div className="col-sm-10 col-12" data-aos="zoom-in" data-aos-duration="1500">
              <div className="container text-center">
                <div className="upposition ms-md-4 ms-0">
                  <div className="row justify-content-center">
                    {itemData.map((item, index) => {
                      return (
                        <div
                          className={`col-md-4 col-sm-6 mt-md-0 mt-3 ${item.class}`}
                        >
                          <img
                            src={item.img}
                            alt=""
                            className="img-fluid"
                            style={{ boxShadow: "0px 0px 8px 4px rgba(119, 180, 254, 0.742)" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
