import { makeStyles } from "@material-ui/core";
import React, { memo } from "react";
import Slider from "react-slick";

const useStyles = makeStyles({
  sliders: {
    "& .slick-initialized": {
      height: "400px",
      display: "flex",
      alignItems: "flex-end",
      width: "100%",
    },
    "& .slick-list": {
      width: "100%",
    },
  },
});
const SliderComponent = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: props.numberOfSlides || 4,
    adaptiveHeight: true,
    autoplay: false,
    draggable: true,
    swipe: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const classes = useStyles();
  return (
    <div className={!props.numberOfSlides && classes.sliders}>
      <Slider ref={props.sliderRef} {...settings}>
        {props.children}
      </Slider>
    </div>
  );
};

export default memo(SliderComponent);
