import React from 'react';
import HOC from './HOC';
import "../assets/css/product.css"
import LogoRun from './LogoRun';
import { MdOutlineDoubleArrow } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Product() {
  let prodtdata = [
    {
      img: require("../assets/image/Eraser-300x300.jpg"),
      name: "ERASER",
      path: "/EraserPage",
      aos: "fade-right"

    },
    {
      img: require("../assets/image/graphite-Pencil-300x300_dr7CU5h.jpg"),
      name: "POLYMER PENCIL",
      path: "/PolymerPage",
      aos: "fade-down"
    },

    {
      img: require("../assets/image/sharpner-300x300.jpg"),
      name: "SHARPNER",
      path: "/SharpnerPage",
      aos: "fade-up"

    },
    {
      img: require("../assets/image/clay-300x300.jpg"),
      name: "PAPER PENCIL",
      path: "/PaperPage",
      aos: "fade-left"

    },

  ]

  return (
    <>
      <div className='productpage_bgimagebck'>
        <div className='m-0 p-0 h-100 w-100 d-flex text-center align-items-center'>

          <div className=' homecontent mx-auto text-capitalize text-white text-capitalize' data-aos-duration="1800"
            data-aos="fade-up">
            Find your ideal Art companion
            <div className='fs-6 text-white fw-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aspernatur.</div>
          </div>


        </div>
      </div>
      <div className='my-5 pb-5'>
        <div className='omax_tittle text-center fcolor text-capitalize' data-aos="fade-up" data-aos-duration="1800">Our <span className='scolor'>Products</span></div>
        <div className='w-75 mx-auto text-secondary text-center' data-aos="zoom-in" data-aos-duration="1800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate magni id repellendus suscipit temporibus rem earum ab, autem provident laboriosam.</div>
        <div className='container overflow-hidden pb-0 pb-lg-2 ' >
          <div className='row m-0 p-0 g-5 '>
            {
              prodtdata.map((x, i) => {
                return (
                  <>
                    <div className='col-12 col-md-6 col-lg-3 ' >
                      <div className='h-100 shadow product_cards' data-aos={x.aos} data-aos-duration="1800">
                        <div className='text-center hover_image' >
                          <img src={x.img} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                        </div>
                        <div className='text-center p-1 p-lg-3 mt-3 pt-0  mt-auto'>
                          <div className=' fw-bold info_color fs-5'>{x.name}</div>
                          <div className='btn_hover text-center mx-auto my-3'>
                            <Link to={x.path} className='btnedit p-2 fw-medium w-100 border-0 rounded-3 text-center text-white mt-auto'>Show More <span> <MdOutlineDoubleArrow /></span></Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>


      <div>



        <div className='productpage_bg'>
          <div className='productbg_color p-3 p-lg-5'>
            <div className='row p-0 ' style={{ marginTop: "-200px" }}>
              <div className='col-12 col-lg-6'>

              </div>
              <div className='col-12 col-lg-6' data-aos="zoom-in" data-aos-duration="1800">
                <div className=' p-3 p-lg-5 text-white productpera_color ' >
                  <div className='fs-1 text-white fw-bold d-flex align-items-center pt-2'>

                    <img src={require("../assets/image/pencil-case_5641298.png")} alt="" className='img-fluid animated-image text-capitalize' style={{ width: "60px" }} /> <span className='ps-2'>WHAT WE ARE PROVIDING !</span> </div>
                  <p className='py-2 pt-3'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo pariatur, sunt, eius, accusantium nesciunt maxime sequi omnis architecto eum beatae reprehenderit ab unde repellat quae esse dolores.
                  </p>
                  <div className='d-block d-lg-flex justify-content-between align-content-center align-items-center p-1'>
                    <div className='pt-0 pt-lg-3'>
                      <p className='py-0 py-md-1'><span className='pe-2 fs-5'><IoCheckmarkDoneSharp /></span>Product Quality</p>
                      <p className='py-0 py-md-1'><span className='pe-2 fs-5'><IoCheckmarkDoneSharp /></span>Fair Pricesy</p>
                      <p className='py-0 py-md-1'><span className='pe-2 fs-5'><IoCheckmarkDoneSharp /></span>Top Manufacturer</p>
                    </div>
                    <div className='pt-0 pt-lg-3'>
                      <p className='py-0 py-md-1'><span className='pe-2 fs-5'><IoCheckmarkDoneSharp /></span>24/7 Support</p>
                      <p className='py-0 py-md-1'><span className='pe-2 fs-5'><IoCheckmarkDoneSharp /></span>Long Lasting</p>
                      <p className='py-0 py-md-1'><span className='pe-2 fs-5'><IoCheckmarkDoneSharp /></span>colors , shapes </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <LogoRun />
        </div>
      </div>
    </>
  )
}

export default HOC(Product)