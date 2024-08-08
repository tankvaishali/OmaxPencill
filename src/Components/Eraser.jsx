import React from 'react'
import HOC from './HOC'
import { Link } from 'react-router-dom'

function Eraser() {
  let Eraserdata = [
    {
      img: require("../assets/image/Eraser-300x300.jpg"),
      name: "Eraser",
      desc: "zxcvbnm asdfghj zxcvbnm sdfghjk",
      aos: "fade-right"
    },
    {
      img: require("../assets/image/Eraser-300x300.jpg"),
      name: "Doms",
      desc: "zxcvbnm asdfghj zxcvbnm sdfghjk c,skd nknkkw"
      ,
      aos: "fade-down"
    },
    {
      img: require("../assets/image/Eraser-300x300.jpg"),
      name: "ERASER bnm",
      desc: "zxcvbnm asdfghj zxcvbnm sdfghjk xcvbnm ",
      aos: "fade-up"
    },
    {
      img: require("../assets/image/Eraser-300x300.jpg"),
      name: "ERASER bnm",
      desc: "zxcvbnm asdfghj zxcvbnm sdfghjk xcvbnm ",
      aos: "fade-left"
    },

  ]
  return (

    <>
      <div className='container overflow-hidden'>

        <div className='omax_tittle text-center my-3 fcolor widthmanage mx-auto text-capitalize' data-aos="fade-up" data-aos-duration="1800">ERASER</div>
        <div className='text-secondary text-center ' data-aos="zoom-in" data-aos-duration="1800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima ab ducimus architecto quae sint quas molestias esse eos non atque!</div>

        <div className='row p-0 m-0 g-4 pb-5 overflow-hidden'>
          <div className='col-12 col-lg-6' data-aos="fade-right" data-aos-duration="1800">
            <div className='h-100 '>
              <img src={require("../assets/image/Eraser-300x300.jpg")} alt="" className='img-fluid object-fit-cover w-100 h-100' />
            </div>
          </div>
          <div className='col-12 col-lg-6 ' data-aos="fade-left" data-aos-duration="1800">
            <div className='h-100  p-4'>
              <div className='sec_color fs-3 fw-bold py-2 text-capitalize'>Dezha Super Glow TRi-Color Eraser Jar PK 30</div>
              <div className='info_color fw-medium pt-3 text-capitalize'>+ Product Details</div>
              <hr></hr>
              <div className='sec_color fw-medium py-2 text-capitalize'>product Name : <span className='text-secondary'>Eraser</span></div>
              <div className='sec_color  fw-medium py-2'>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ipsa.</div>

              <div className='btn_hover text-center  mt-4'>
                <Link to={"/ContactusPage"} className='btnedit p-3  fw-medium w-100 border-0 rounded-3 text-center text-white mt-auto'>Request A Call </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='omax_tittle text-center my-3 fcolor' data-aos="zoom-in" data-aos-duration="1800">Products</div>
      <div className="container">
        <div className='row m-0 p-0 g-5 mb-5'>
          {
            Eraserdata.map((x, i) => {
              return (
                <>
                  <div className='col-12 col-md-6 col-lg-3 my-2 my-lg-5 overflow-hidden' >
                    <div className='h-100  product_cards' data-aos={x.aos} data-aos-duration="1800">
                      <div className='text-center hover_image shadow' >
                        <img src={x.img} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                      </div>
                      <div className='text-center p-3 mt-3 pt-0 '>
                        <div className=' fw-bold procard_tittle fs-5 '>{x.name}</div>
                        <div className='text-secondary py-2'>{x.desc}</div>
                      </div>

                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default HOC(Eraser)