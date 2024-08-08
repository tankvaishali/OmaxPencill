import React from "react";
import HOC from "./HOC";
import LogoRun from "./LogoRun";
import "../assets/css/News.css"
import NewsContent from "./NewsContent";

function NewsPage() {
  return (
    <>

      <div className=" container pt-5 mt-5 w-75 mx-auto">
        <div
          className=" text-center mainomax_tittle  fcolor mx-auto text-capitalize"
          data-aos-duration="1800"
          data-aos="fade-up"
        >
          A pencil writes <span className="scolor">  the first</span>  chapter of every <span className="scolor">great story</span>
          {" "}
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
      <NewsContent />



      <LogoRun />

    </>
  );
}

export default HOC(NewsPage);
