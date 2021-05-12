import { IconButton, makeStyles } from "@material-ui/core";
import React, { useRef } from "react";
import { FeedbackCard, SliderComponent } from "../../Components";
import "./FeedbackSection.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles({
  iconButton: {
    color: "white",
  },
});

const FeedbackSection = () => {
  const classes = useStyles();
  const sliderRef = useRef();
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      console.log(sliderRef);
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="max-w-7xl p-4 pt-10 mb-14 w-full mx-auto">
      <div className="flex justify-between py-6 mb-4 items-center">
        <h1 className="text-white feedbackSection__title">Reviews</h1>
        <div className="sm:hidden">
          <IconButton className={classes.iconButton} onClick={previous}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton className={classes.iconButton} onClick={next}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
      <SliderComponent sliderRef={sliderRef} feedbackSlider numberOfSlides={3}>
        {Array(12)
          .fill()
          .map((_, i) => (
            <FeedbackCard key={i} />
          ))}
      </SliderComponent>
    </div>
  );
};

export default FeedbackSection;
