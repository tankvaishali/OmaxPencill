import React from "react";
import Slider from "react-slick";


function LogoRun() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    swipe: false, // touch swipe
    arrows: false, //nex and previous button off
    pauseOnHover: false, // Set to false to continue autoplay on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let carddata = [
    {
      img: require("../assets/image/LogoRunImage/Classmate_Logo.png"),
    },
    {
      img: require("../assets/image/LogoRunImage/Crayola-Logo-1024x640.png"),
    },
    {
      img: require("../assets/image/LogoRunImage/Faber-Castell-Logo.png"),
    },
    {
      img: require("../assets/image/LogoRunImage/apsara-logo.jpg"),
    },
    {
      img: require("../assets/image/LogoRunImage/bic .images.png"),
    },
    {
      img: require("../assets/image/LogoRunImage/images-2.jpg"),
    },
    {
      img: require("../assets/image/LogoRunImage/images-3.jpg"),
    },

  ];
  return (
    <>
      <div className="logorun_bck mb-5">
        <div className="container mb-5 pt-5">
          <div className=" text-center omax_tittle fcolor widthmanage mx-auto pt-3 text-capitalize" data-aos-duration="1800" data-aos="fade-up">
            See Why <span className="scolor"> Customers</span> Love
            <span className="scolor"> Omax Industries</span>
          </div>
          <p className="py-4  text-center text-secondary" data-aos-duration="1800" data-aos="zoom-in">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            molestias, aspernatur illo deleniti inventore autem?
          </p>

          <div className='logorun'>
            <div className=" py-3 my-1" >
              <Slider {...settings}  >
                {carddata?.map((x, i) => {
                  console.log(x);
                  return (
                    <>


                      <div className="p-2">
                        <div
                          className="p-3 p-lg-5"
                        >
                          <img
                            src={x.img}
                            alt=""
                            className="img-fluid h-100 w-100 object-fit-cover  "

                          />
                        </div>
                      </div>



                    </>
                  );
                })}
              </Slider>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogoRun