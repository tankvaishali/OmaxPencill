import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Typography } from "@mui/material";
import CommentCard from "./CommentCard";

function Homecomments() {
  const commentsData = [
    {
      user: "Amelia",
      commentText: "All type of pencils available in it, Nice",
      rating: 4,
    },
    {
      user: "john Doe",
      commentText:
        "Good quality pencils which anyone who are passionate about art can use.",
      rating: 5,
    },
    {
      user: "Hawaiian. Malia",
      commentText: "Very unique collection of all stationary products.",
      rating: 5,
    },
    {
      user: "Alice Johnson",
      commentText: "Great insights, much appreciated.",
      rating: 5,
    },
    {
      user: "John mark",
      commentText: "This is an amazing post! Thanks for sharing.",
      rating: 4,
    },
    {
      user: "Jane Smith",
      commentText: "I found this very helpful, thank you!",
      rating: 5,
    },
    {
      user: "John Doe",
      commentText: "This is an amazing post! Thanks for sharing.",
      rating: 4,
    },
    {
      user: "Jane Smith",
      commentText: "I found this very helpful, thank you!",
      rating: 5,
    },
    {
      user: "Alice Johnson",
      commentText: "Great insights, much appreciated.",
      rating: 5,
    },
  ];
  return (
    <div className="mgtop comment_bgcolor py-5">
      <div className="container">
        <Box sx={{ width: "100%", maxWidth: "100%", margin: "auto" }}>
          <div>
            <Typography

              component="div"
              className="text-center"

              sx={{ mb: 4 }}
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <div className="omax_tittle fcolor text-center widthmanage mx-auto text-capitalize" data-aos="fade-up"
                data-aos-duration="1800">Here's What  <span className="scolor"> our customers</span> Have Been Saying<span className="scolor">  About Us</span></div>

            </Typography>
          </div>


          <TransitionGroup className="comment-list">
            <Player
              autoplay
              loop
              src="https://lottie.host/85e6ef63-8a6e-40c4-b518-3b09e868079e/iatEByMjkY.json"
              style={{ height: "200px", width: "200px" }}
              data-aos="zoom-in"
            />
            {commentsData.map((item, index) => (
              <CSSTransition key={index} timeout={500} classNames="comment">
                <div data-aos="fade-up">
                  <CommentCard comment={item} />
                </div>
              </CSSTransition>
            ))}
            <Player
              autoplay
              loop
              src="https://lottie.host/85e6ef63-8a6e-40c4-b518-3b09e868079e/iatEByMjkY.json"
              style={{ height: "100px", width: "100px" }}
              data-aos="zoom-in"
            />
          </TransitionGroup>
        </Box>
      </div>
    </div>
  );
}

export default Homecomments;
