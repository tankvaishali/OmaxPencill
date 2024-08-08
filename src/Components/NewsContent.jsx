import React from "react";
import { Link } from "react-router-dom";
import { PiPencilLineBold } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "../assets/css/News.css"

function NewsContent() {

  let carddata = [
    {
      img: require("../assets/image/girl-with-pencil-looking-away-lesson_23-2147848666.jpg"),
      data: "Rajnath Singh launches portal 'PENCIL' to eliminate child labour our pencil",
      name: "17 may 2023",
      status: "Read More ",
      href: "https://www.aninews.in/news/national/general-news/rajnath-singh-launches-portal-pencil-to-eliminate-child-labour201709262255370004/",
      aos: "fade-right"
    },


    {
      img: require("../assets/image/pexels-tim-gouw-53874.jpg"),
      data: "Odisha artist creates miniature woman on pencil nib ahead of International Women's Day",
      name: "19 may 2023",
      status: "Read More ",
      href: "https://www.aninews.in/news/national/general-news/odisha-artist-creates-miniature-woman-on-pencil-nib-ahead-of-international-womens-day20200307175258/",
      aos: "fade-left",
    },


    {
      img: require("../assets/image/pexels-pixabay-159644.jpg"),
      data: "Punjab opposes higher tax slab for pencils, GST council puts move on hold",
      name: "20 may 2023",
      status: "Read More",
      href: "https://indianexpress.com/article/cities/chandigarh/punjab-opposes-higher-tax-slab-for-pencils-gst-council-puts-move-on-hold-8330545/",
      aos: "fade-right",
    },
    {
      img: require("../assets/image/vintage-style-photo-girl-is-happily-coloring-book_1150-6166.jpg"),
      data: "Stone Sapphire India shares a Centre-stage with its 'Skoodle' Eco Pencils at Project Sustainability by Paperworld Middle East",
      name: "19 may 2023",
      status: "Read More ",
      href: "https://www.aninews.in/news/business/business/stone-sapphire-india-shares-a-centre-stage-with-its-skoodle-eco-pencils-at-project-sustainability-by-paperworld-middle-east20221201180436/",
      aos: "fade-left",
    },
  ];
  return (
    <>
      <div className=" pb-0 pb-lg-4 p-0  my-5">

        <div className="news_bck rounded-bottom-0 py-4" style={{ marginTop: "165px" }}>
          <div style={{ marginTop: "-165px" }} className="container">
            <div className="row m-0 p-0 justify-content-center overflow-hidden">
              {carddata?.map((x, i) => {
                console.log(x);
                return (
                  <>
                    <div className="col-11 col-lg-5 my-4 mx-2 z-1" data-aos={x.aos} data-aos-duration="1800">
                      <div className="h-100">
                        <div
                          className=" card news_shadow border-0 m-1 rounded-4 h-100"
                          key={i}
                        >
                          <div style={{ height: "180px" }}>
                            <img
                              src={x.img}
                              alt=""
                              className="img-fluid h-100 w-100 object-fit-cover "
                              style={{
                                borderTopLeftRadius: "16px",
                                borderTopRightRadius: "16px",
                              }}
                            />
                          </div>
                          <div className="  text-center ">
                            <div className="info_color sub_tittles fw-medium pt-1 fs-3 text-capitalize">
                              <span className="">
                                <PiPencilLineBold />
                              </span>{" "}
                              Omax Pencil
                            </div>
                            <div className="  text-secondary p-3 sub_perasize">
                              {x.data}
                            </div>
                            <div className=" mt-auto p-0 d-block d-lg-flex justify-content-between align-items-center px-0 px-lg-4 sub_tittles">
                              <div className="info_color fw-medium p-2 fs-5 mt-auto">
                                <span className="sub_tittles fs-4">
                                  <MdDateRange />
                                </span>{" "}
                                {x.name}
                              </div>
                              <div className="sub_tittles my-2 my-lg-0 mt-auto">
                                <div className="btn_hover text-center mx-auto mt-auto">
                                  <Link
                                    to={x.href}
                                    className="btnedit sec_color border-0 rounded-3 text-center text-white  fw-bold link_hovereffect p-2"
                                    href={x.href}
                                    target="blank"
                                  >
                                    {x.status}{" "}
                                    <span className=" fs-5 ">
                                      <MdOutlineDoubleArrow />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="container my-5  py-2 d-block d-lg-flex justify-content-between align-items-center overflow-hidden">
            <div className="overflow-hidden" data-aos-duration="1800" data-aos="fade-down">
              <div className="fs-1 text-white fw-bold text-capitalize">
                join us Built for Excellence
              </div>
              <div className="fs-6 text-white w-75">
                join us  our journey and become a part of our story.
              </div>
              <div className="fs-5 text-white fw-bold">
                If you have any questions ?{" "}
              </div>
            </div>
            <div
              class="btn_hover justify-content-start justify-content-lg-end my-4 border-0 overflow-hidden"
              data-aos-duration="1800"
              data-aos="fade-up"
            >
              <Link to={"/ContactusPage"} class="btnedit fw-medium fs-5 px-4 ">
                {" "}
                Contact Us{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsContent;
