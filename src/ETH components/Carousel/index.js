import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/Images/sel1.png";
import image2 from "../../assets/Images/sel2.png";
import image3 from "../../assets/Images/sel3.png";
import image4 from "../../assets/Images/sel4.png";
import image5 from "../../assets/Images/sel5.png";
import image6 from "../../assets/Images/sel6.png";
import image7 from "../../assets/Images/sel7.png";
import image8 from "../../assets/Images/sel8.png";
import image9 from "../../assets/Images/sel9.png";
import image10 from "../../assets/Images/sel10.png";
import "./Carousel.css";
import {isMobile} from 'react-device-detect';
import {varFadeInDown, MotionInView } from "../Animate";
import {Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
    fontFamily: "Punc-Bold",
    padding: "40px 0px 40px 0px",
    fontSize: "30px",
    color: "white",
  },
});

export default function Carousel() {
  const classes = useStyles();
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true
  };
  var settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true
  };
  var settings3 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    rtl: true,
    adaptiveHeight: true
  };
  var settings4 = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    adaptiveHeight: true
  };
  if(isMobile) {
    return (
      <div id="gallery">
        <div style={{ display: "flex", justifyContent: "space-between", height:200 }}></div>
        <MotionInView variants={varFadeInDown}>
          <Typography
            variant="h4"
            color="text.primary"
            className={classes.heading}
          >
            GallERy
          </Typography>
        </MotionInView>
      <MotionInView variants={varFadeInDown}>
      <div className="container">
        <Slider {...settings}>
          <div className="slider">
            <img src={image1} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image2} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image3} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image4} height={400} width={400}></img>
          </div>
        </Slider>
      </div>
      <div className="container">
        <Slider {...settings3}>
          <div className="slider">
            <img src={image5} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image6} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image7} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image8} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image9} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image10} height={400} width={400}></img>
          </div>          
        </Slider>
      </div>
      </MotionInView>
      </div>
    );
    }
  return (
    <div id="gallery">
      <div style={{ display: "flex", justifyContent: "space-between", height:100 }}></div>
      <MotionInView variants={varFadeInDown}>
        <Typography
          variant="h4"
          color="text.primary"
          className={classes.heading}
        >
          GallERy
        </Typography>
      </MotionInView>
    <MotionInView variants={varFadeInDown}>
      <div className="container">
        <Slider {...settings2}>
          <div className="slider">
            <img src={image1} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image2} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image3} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image4} height={400} width={400}></img>
          </div>
        </Slider>
      </div>
    <div className="container">
      <Slider {...settings4}>
        <div className="slider">
            <img src={image5} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image6} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image7} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image8} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image9} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image10} height={400} width={400}></img>
          </div>  
      </Slider>
    </div>
    </MotionInView>
    </div>
    );
  }