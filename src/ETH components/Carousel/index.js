import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/Images/sel1.png";
import image2 from "../../assets/Images/sel2.png";
import image3 from "../../assets/Images/sel3.png";
import image4 from "../../assets/Images/sel4.png";
import "./Carousel.css";
import {isMobile} from 'react-device-detect';

export default function Carousel() {
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
  if(isMobile) {
    return (
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
    );
    }
  return (
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
    );
  }