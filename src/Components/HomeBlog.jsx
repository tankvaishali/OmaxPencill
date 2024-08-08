import * as React from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Data = [
  {
    img: require("../assets/image/Free-Distribution-of-Dezha-products-in-school.jpg"),
    text: "Know More How paper pencils are made",
    link: "https://patents.google.com/patent/CN102303469A/en",
    dataaos: "flip-left",
  },
  {
    img: require("../assets/image/Free-Distribution-of-Dezha-products-in-school-2.jpg"),
    text: "Know More How polymer pencils are made",
    link: "https://en.wikipedia.org/wiki/Pencil",
    dataaos: "flip-up",
  },
  {
    img: require("../assets/image/sharpner-300x300.jpg"),
    text: "Know More about eraser and sharpeners",
    link: "https://en.wikipedia.org/wiki/Eraser#:~:text=Originally%20made%20from%20natural%20rubber,pencil)%20and%20frequently%20colored%20pink.",
    dataaos: "flip-right",
  },
];

export default function HomeBlog() {
  return (
    <>
      <div
        className="text-center mgtop mb-5"
        style={{ color: "var(--primarycolor--" }}
        data-aos="zoom-in-down"
      >

        <div className="omax_tittle fcolor fs-3" data-aos="fade-up" data-aos-duration="1800">  Latest Blog </div>
        <div data-aos="zoom-in" data-aos-duration="1800" className="omax_tittle text-capitalize text-center fcolor widthmanage mx-auto py-2">
          Read The <span className="scolor">Latest Articles</span> from Our{" "}
          <span className="scolor">Blog Post</span>
        </div>
        <div className="container">
          <div className="row justify-content-md-evenly justify-content-center overflow-hidden">
            {Data.map((item) => {
              return (
                <div
                  className="col-lg-4 col-md-4 col-10 mx-auto overflow-hidden"
                  data-aos={item.dataaos}
                  data-aos-duration="1800"
                >
                  <Card sx={{ maxWidth: 345 }} className="my-3 mx-auto">
                    <CardMedia
                      component="img"
                      height="194"
                      image={item.img}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        style={{ color: "var(--primarycolor--" }}
                        className="fs-4"
                      >
                        <span
                          className="fs-5"
                          style={{
                            fontweight: 400,
                            color: "var(--seccolor--)",
                            fontfamily: "var(--fontpri--) !important",
                          }}
                        >
                          {item.text}
                        </span>
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <div className="btn_hover text-center mx-auto my-3 border-0">
                        <Link
                          to={item.link}
                          className="btnedit p-2 fw-medium w-100 border-0 rounded-0 text-white mt-auto fs-6 px-4"
                        >
                          Show More{" "}
                          <span>
                            {" "}
                            <MdOutlineDoubleArrow />
                          </span>
                        </Link>
                      </div>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
