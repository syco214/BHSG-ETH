import "./index.css";
import styled from "styled-components";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import one from "../../assets/Images/1.png";
import two from "../../assets/Images/2.png";
import three from "../../assets/Images/3.png";
import four from "../../assets/Images/4.png";
import six from "../../assets/Images/6.png";
import seven from "../../assets/Images/7.png";
import eight from "../../assets/Images/8.png";
import nine from "../../assets/Images/9.png";
import ten from "../../assets/Images/10.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ParticleBackground from "../../ParticleBackground";

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const HeroContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    position: relative;
    z-index 1;

    @media screen and (max-width: 480px) {
        height: 300px;
    }
`;
const images = [one, two, three, four, six, seven, eight, nine, ten];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: 3000,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          lazyLoad: true,
          autoplay: 3000,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: 0,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next),
        },
      },
    ],
  };

  return (
    <HeroContainer>
      <HeroBg>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
      </HeroBg>
      <div className="App">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </HeroContainer>
  );
}

export default Carousel;
