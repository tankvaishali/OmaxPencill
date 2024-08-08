import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, useMediaQuery, useTheme } from "@mui/material";

let itemData = [
  {
    img: require("../assets/image/gallery1.jpg"),
    aos: "fade-right",
  },
  {
    img: require("../assets/image/gallery-2.jpg"),
    aos: "fade-right",
  },
  {
    img: require("../assets/image/Free-Distribution-of-Dezha-products-in-school-2.jpg"),
    aos: "fade-right",
  },
  {
    img: require("../assets/image/gallery6.jpg"),
    aos: "fade-right",
  },
  {
    img: require("../assets/image/img1.jpg"),
    aos: "fade-down",
  },
  {
    img: require("../assets/image/gallery3.jpg"),
    aos: "zoom-in",
  },
  {
    img: require("../assets/image/Free-Distribution-of-Dezha-products-in-school.jpg"),
    aos: "zoom-in",
  },
  {
    img: require("../assets/image/gallery7.jpg"),
    aos: "fade-up",
  },
  {
    img: require("../assets/image/img4.jpg"),
    aos: "fade-left",
  },
  {
    img: require("../assets/image/gallery4.jpeg"),
    aos: "fade-left",
  },
  {
    img: require("../assets/image/gallery5.jpeg"),
    aos: "fade-left",
  },
];

let itemCertificateData = [
  {
    image: require("../assets/image/ISO-9001-2015-CERTIFICATE.jpg"),
    animation: "fade-right",
  },
  {
    image: require("../assets/image/STAR-EXPORT-HOUSE-CERTIFICATE.jpg"),
    animation: "fade-left",
  },
];

const GalleryPhotos = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

  let cols = 1;
  if (isLg) {
    cols = 3;
  } else if (isMd) {
    cols = 3;
  } else if (isSm) {
    cols = 2;
  }

  return (
    <>
      <div className="omax_tittle widthmanage fcolor mx-auto text-center py-5 text-capitalize">
        Our <span className="scolor">Gallery</span>
      </div>
      <div className="container text-center">
        <section className="portfolio">
          <div className="row">
            <Box sx={{ flexGrow: 1 }}>
              <ImageList
                variant="masonry"
                cols={cols}
                gap={40}
                className="overflow-hidden"
                sx={{
                  maxWidth: "75%",
                  margin: "auto",
                  "@media (min-width: 900px)": {
                    cols: 3,
                  },
                  "@media (min-width: 710px) and (max-width: 890px)": {
                    cols: 2,
                  },
                  "@media (max-width: 600px)": {
                    cols: 1,
                  },
                }}
              >
                {itemData.map((item, index) => (
                  <ImageListItem key={item.img}>
                    <div className="image-container galleryimage overflow-hidden">
                      <img
                        srcSet={`${item.img}`}
                        src={`${item.img}`}
                        alt=""
                        className="image"
                      />
                    </div>
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </div>
        </section>
      </div>

      <div className="container text-center certicicate">
        <h1 className="text-center omax_tittle widthmanage mx-auto fcolor certificatetitle text-capitalize">
          Our <span className="scolor py-5">Certificate</span>
        </h1>
        <div className="mt-3">
          <Box sx={{ flexGrow: 1 }}>
            <ImageList
              variant="masonry"
              cols={cols}
              gap={40}
              sx={{
                maxWidth: "75%",
                margin: "auto",
                "@media (min-width: 900px)": {
                  cols: 3,
                },
                "@media (min-width: 710px) and (max-width: 890px)": {
                  cols: 2,
                },
                "@media (max-width: 600px)": {
                  cols: 1,
                },
              }}
            >
              {itemCertificateData.map((item) => (
                <ImageListItem
                  key={item.image}
                  className="image-container galleryimage"
                  style={{ cursor: "context-menu" }}
                >
                  <img
                    srcSet={`${item.image}`}
                    src={`${item.image}`}
                    alt=""
                    className="image"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </div>
    </>
  );
};

export default GalleryPhotos;
