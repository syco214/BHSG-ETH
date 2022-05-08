import React from "react";
import "./Cards.css";
import styled from "styled-components";
import CardItem from "./Carditem";
import ParticleBackground from "../../ParticleBackground";

export const TeamContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    height: 1400px;
    position: relative;

    @media screen and (max-width: 1200px) {
      height: 1100px;

    @media screen and (max-width: 768px) {
      height: 2500px;

    @media screen and (max-width: 640px) {
      height: 1700px;

    @media screen and (max-width: 480px) {
      font-size: 32px;
      height: 1880px;
    }
`;
export const TeamBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const HeroContent = styled.div`
  position: absolute;
  padding: 8px 24px;
  align-items: initial;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 55px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 0 0 0.2em hsl(195 50% 50%);
  font-family: "Saira Extra Condensed", sans-serif;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

function Cards() {
  return (
    <TeamContainer id="team">
      <TeamBg>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
      </TeamBg>
      <HeroContent>
        <HeroH1>MEET THE TEAM</HeroH1>
      </HeroContent>
      <div className="space">
        <div className="cards">
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src={require("../../assets/Images/Ethan.png").default}
                  text="Creative Director, Brand Manager"
                  text2="Founder of Magical Mystery Gear. With a passion for Sci-Fi + Communications degree."
                  label="ETHAN"
                />
                <CardItem
                  src={require("../../assets/Images/Jaga.png").default}
                  text="Lead Artist, Art Director"
                  text2="Professional workaholic, currently taking up a masters in innovation design in London."
                  label="JAGA"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src={require("../../assets/Images/Sage.png").default}
                  text="Lead Developer, Technical Director"
                  text2="Engineering Graudate, and an advocate of blockchain technology."
                  label="SAGE"
                />
                <CardItem
                  src={require("../../assets/Images/Alex.png").default}
                  text="Social Media Manager, Community Manager."
                  text2="Makes words go brrr."
                  label="ALEX"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TeamContainer>
  );
}

export default Cards;
