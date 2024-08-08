import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";

const slides = [
  {
    img: require('../assets/image/PaperPencil.jpg'),
    type: "PAPER PENCIL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.",
    path: "/PaperPage",
  },
  {
    img: require("../assets/image/item4.jpg"),
    type: "POLYMER PENCIL",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    path: "/PolymerPage",
  },
  {
    img: require("../assets/image/item3.jpg"),
    type: "EARASER",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae.",
    path: "/About",
  },
  {
    img: require("../assets/image/item5.jpg"),
    type: "SHARPNER",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    path: "SharpnerPage",
  },
];

function HomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="App">
      <div className="slider">
        <div className="list">
          {slides.map((items, index) => (
            <div
              className={`item ${index === currentIndex ? "active" : ""}`}
              key={index}
            >
              <img src={items.img} alt="" />
              <div className="content ">
                <div className="type">{items.type}</div>
                <div className="description py-2">{items.description}</div>
                <div className="my-5"></div>

              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {slides
            .slice(currentIndex)
            .concat(slides.slice(0, currentIndex))
            .map((slide, index) => (
              <div
                className={`item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img src={slide.img} alt="" className="object-fit-fill" />
              </div>
            ))}
        </div>

        <div className="nextPrevArrows">
          <button onClick={prevSlide}>{"<"}</button>
          <button onClick={nextSlide}>{">"}</button>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
