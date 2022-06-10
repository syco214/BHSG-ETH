import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/Images/sel5.png";
import image2 from "../../assets/Images/sel6.png";
import image3 from "../../assets/Images/sel7.png";
import image4 from "../../assets/Images/sel8.png";
import image5 from "../../assets/Images/sel9.png";
import image6 from "../../assets/Images/sel10.png";
import "./Carousel.css";
import {isMobile} from 'react-device-detect';
import { varFadeInUp, MotionInView } from "../Animate";

export default function Carousel2() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    rtl: true,
    adaptiveHeight: true
  };
  var settings2 = {
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
      <MotionInView variants={varFadeInUp}>
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
          <div className="slider">
          <img src={image5} height={400} width={400}></img>
          </div>
          <div className="slider">
          <img src={image6} height={400} width={400}></img>
          </div>          
        </Slider>
      </div>
      </MotionInView>
    );
    }
  return (
    <MotionInView variants={varFadeInUp}>
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
      </MotionInView>
    );
  }