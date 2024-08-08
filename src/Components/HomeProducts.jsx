import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";

const Data = [
  {

    text: "EARASER",
    text2: "Dezha Super Glow Tri-Color Eraser Jar PK 30",
    class: "bg1",
    dataaos: "fade-right",
    to: "/EraserPage",
  },
  {

    text: "POLYMER PENCIL",
    text2: "Dezha Super Glow Tri-Color Eraser Jar PK 30",
    class: "bg2",
    dataaos: "fade-down",
    to: "/PolymerPage",
  },

  {

    text: "PAPER PENCIL",
    text2: "Dezha Super Glow Tri-Color Eraser Jar PK 30",
    class: "bg3",
    dataaos: "fade-up",
    to: "/PaperPage",
  },
  {

    text: "SHARPNER",
    text2: "Dezha Super Glow Tri-Color Eraser Jar PK 30",
    class: "bg4",
    dataaos: "fade-left",
    to: "/SharpnerPage",
  },
];
function HomeProducts() {
  return (
    <>
      <div className="container-fluid w-100 mgtop pt-5">
        <div className="omax_tittle fcolor text-center text-capitalize" data-aos="fade-up"
          data-aos-duration="1800">Our <span className="scolor">Products</span></div>

        <div className="d-flex align-content-center justify-content-center flex-wrap overflow-hidden">
          {Data.map((item, i) => (
            <div
              className={`mx-2 my-3 my-lg-5 border overflow-hidden ${item.class}`}
              style={{ height: "300px", width: "250px" }}
              key={i}
              data-aos={item.dataaos}
              data-aos-duration="1800"
            >
              <Link to={item.to} className="text-decoration-none ">
                <div className="text-center">
                  <div
                    className="overlay-wrapper"
                    style={{
                      position: "relative",
                      height: "300px",
                      width: "250px",
                    }}
                  >
                    <div
                      className="overlay d-flex align-items-end justify-content-center"
                      style={{ height: "300px" }}
                    >
                      <div>
                        <p className="text-light p-1 fw-semibold fs-6">
                          {item.text2}
                        </p>

                        <div className="btn_hover text-center mx-auto my-3 border-0">
                          <Link
                            to={item.to}
                            className="btnedit p-2 fw-medium w-100 border-0 rounded-0  mt-auto fs-6 px-4"
                          >
                            Show More{" "}
                            <span>
                              {" "}
                              <MdOutlineDoubleArrow />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeProducts;
