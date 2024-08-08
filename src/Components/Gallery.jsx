import React from "react";
import '../assets/css/GallerPage.css';
import GalleryPhotos from "./GalleryPhotos";
import HOC from "./HOC";


function Gallery() {
  return (
    <>
      <div className=" container pt-5 mt-5 w-75 mx-auto">
        <div className=" text-center mainomax_tittle  fcolor mx-auto text-capitalize" data-aos-duration="1800" data-aos="fade-up">
          Stories told through <span className="scolor"> art</span> , one pencil <span className="scolor">at a time</span>
        </div>
        <div className="py-4 omax_pera text-center text-secondary widthmanage mx-auto" data-aos-duration="1800" data-aos="zoom-in">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestias, aspernatur illo deleniti inventore autem?
        </div>
      </div>
      <div className="mt-3">
        <GalleryPhotos />
      </div>
    </>
  );
}

export default HOC(Gallery);
