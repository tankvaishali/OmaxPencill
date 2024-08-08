import React from 'react'
import "../assets/css/About.css"
import AboutTeam from './AboutTeam'
import HOC from './HOC'
import { Link } from 'react-router-dom'
import LogoRun from './LogoRun'
import AboutUs from './AboutUs'
import AboutBrand from './AboutBrand'

function About() {
  return (
    <>
      <div className="container pt-5 mt-5 w-75 mx-auto">
        <div
          className=" text-center mainomax_tittle fcolor mx-auto text-capitalize"
          data-aos-duration="1800"
          data-aos="fade-up"
        >
          our story is
          <span className="scolor">crafting</span> excellence <span className='scolor'>every day</span>
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
      <AboutUs />
      <AboutTeam />
      <AboutBrand />
      <div className=" container py-3">
        <div className="row m-0 p-0 my-5">
          <div className="col-12 col-lg-4 p-4 ">
            <div className="">
              <div
                className="omax_tittle fcolor text-capitalize"
                data-aos-duration="1800"
                data-aos="zoom-in"
              >
                Our <span className='scolor'>success</span>
              </div>
              <p className="py-2 text-secondary" data-aos-duration="1800" data-aos="zoom-in">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                voluptatem, laudantium consequatur fugiat omnis neque? Quam
                beatae dolores, illum ex impedit fugiat voluptas. Repudiandae,
                perspiciatis ipsa suscipit culpa beatae fugit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Doloremque cumque
                soluta praesentium inventore, molestias iusto ipsum eos nihil
                officiis neque unde id nulla. Iste odit pariatur nihil dolorum
                soluta omnis.
              </p>
              <div
                class="btn_hover "
                data-aos-duration="1500"
                data-aos="zoom-in"
              >
                <Link to={"/GalleryPage"} class="btnedit fw-medium fs-5 p-2 px-3 fs-6">
                  {" "}
                  View Our Success{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 p-4 d-flex align-content-center  justify-content-center ">
            <div className="d-block d-lg-flex justify-content-center justify-content-lg-between  flex-wrap">
              <div data-aos-duration="1800" data-aos="fade-up">
                <div className="m-2 news_imagesize news_successimage">
                  <img
                    src={require("../assets/image/img4.jpg")}
                    alt=""
                    className="img-fluid rounded-5 h-100 w-100 object-fit-cover"
                  />
                </div>
              </div>
              <div data-aos-duration="1800" data-aos="fade-down">
                <div className="m-2 news_imagesize">
                  <img
                    src={require("../assets/image/Free-Distribution-of-Dezha-products-in-school.jpg")}
                    alt=""
                    className="img-fluid rounded-5 h-100 w-100 object-fit-cover"
                  />
                </div>
              </div>
              <div data-aos-duration="1800" data-aos="fade-up">
                <div className="m-2 news_imagesize news_successimage">
                  <img
                    src={require("../assets/image/img1.jpg")}
                    alt=""
                    className="img-fluid rounded-5 h-100 w-100 object-fit-cover"
                  />
                </div>
              </div>
              <div data-aos-duration="1800" data-aos="fade-down">
                <div className="m-2 news_imagesize">
                  <img
                    src={require("../assets/image/Free-Distribution-of-Dezha-products-in-school-2.jpg")}
                    alt=""
                    className="img-fluid rounded-5 h-100 w-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoRun />
    </>
  )
}

export default HOC(About)