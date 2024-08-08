import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { FaLuggageCart } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaRegNewspaper } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg position-sticky bg-white shadow p-1 top-0 p-0 `}
        style={{ zIndex: 1000 }}
      >
        <div className="container">
          <Link to={"/"} className="nav-link">
            <img
              src={require("../assets/image/logo_omax.png")}
              alt=""
              className="img-fluid logoset"
            />
          </Link>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}

          <button
            className="btn order-2 d-lg-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            {" "}
            <span className="navbar-toggler-icon fs-5 shadow"></span>
          </button>

          <div className="collapse navbar-collapse lgfooter" id="navbarNav">
            <ul className="navbar-nav mx-auto ps-5">
              <li className="nav-item m-1">
                <div class="sec h-100 mx-2  text-center">
                  <NavLink
                    to={"/"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div class="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/About"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div class="dropdown">
                  <div class="sec h-100 mx-2 text-center">
                    <NavLink
                      to={"/ProductPage"}
                      className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                      aria-current="page"
                      activeClassName="active"
                    >
                      Products{" "}
                      <span>
                        <IoMdArrowDropdown />
                      </span>
                    </NavLink>
                  </div>
                  <div class="dropdown-content bg-white border-3 ">
                    <Link to={"/EraserPage"} className="nav-link fw-medium p-3">
                      ERASER
                    </Link>
                    <Link
                      to={"/PolymerPage"}
                      className="nav-link fw-medium p-3"
                    >
                      POLYMER PENCIL
                    </Link>
                    <Link to={"/PaperPage"} className="nav-link fw-medium p-3">
                      PAPER PENCIL
                    </Link>
                    <Link
                      to={"/SharpnerPage"}
                      className="nav-link fw-medium p-3"
                    >
                      SHARPNER
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item m-1">
                <div class="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/GalleryPage"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    Gallery
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div class="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/NewsPage"}
                    className="nav-link headmenu maincolor fw-medium  p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    News
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div class="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/ContactusPage"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </li>
            </ul>
            <Link
              to={"tel:9727155560"}
              className="ms-5 nav-link navlinkhoverheader fw-bold text-decoration-none"
              style={{ textAlign: 'center' }}
            >
              <span className="fs-4 pe-2">
                <img
                  height={25}
                  width={25}
                  src={require("../assets/image/phone.gif")}
                  alt=""
                  className="img-fluid"
                />
              </span>{" "}
              +(91) 9727155560
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start overflow-hidden"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header ">
          <Link
            to={"/"}
            classNameName="nav-link headmenu maincolor fw-medium pe-2"
          >
            <img
              src={require("../assets/image/logo_omax.png")}
              alt=""
              className="img-fluid"
              style={{ width: "130px", height: "65px" }}
            />
          </Link>
          <button
            type="button"
            className="btn-close p-3 capbg_color rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-3 overflow-x-hidden ofcv_header ">
          <NavLink
            to={"/"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            aria-cu2rent="page"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <FaHome />
            </span>{" "}
            Home
          </NavLink>

          <NavLink
            to={"/About"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <IoPersonCircle />
            </span>{" "}
            About Us
          </NavLink>
          <div className="dropdown w-100">
            <NavLink
              to={"/productPage"}
              className="nav-link p-3 fw-medium  py-2 m-1 fs-5"
              activeClassName="active"
            >
              <span className="fs-2 pe-2">
                <FaLuggageCart />
              </span>{" "}
              Product
            </NavLink>

            <div class="dropdown-content bg-white border-3 w-100 ">
              <Link to={"/EraserPage"} className="nav-link fw-medium p-3">
                ERASER
              </Link>
              <Link to={"/PolymerPage"} className="nav-link fw-medium p-3">
                POLYMER PENCIL
              </Link>
              <Link to={"/PaperPage"} className="nav-link fw-medium p-3">
                PAPER PENCIL
              </Link>
              <Link to={"/SharpnerPage"} className="nav-link fw-medium p-3">
                SHARPNER
              </Link>
            </div>
          </div>
          <NavLink
            to={"/GalleryPage"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <GrGallery />
            </span>{" "}
            Gallery
          </NavLink>
          <NavLink
            to={"/NewsPage"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <FaRegNewspaper />
            </span>{" "}
            News
          </NavLink>
          <NavLink
            to={"/ContactusPage"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <MdWifiCalling3 />
            </span>{" "}
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
