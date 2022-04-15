import styled from "styled-components";
import React, { useEffect } from "react";
import ParticleBackground from "../../ParticleBackground";
import "./Roadmap.css";
import "aos/dist/aos.css";
import Aos from "aos";

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const HeroContainer = styled.div`
  height: 170vw;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: 200vw;
  }

  @media screen and (max-width: 768px) {
    height: 250vw;
  }

  @media screen and (max-width: 640px) {
    height: 260vw;
  }

  @media screen and (max-width: 490px) {
    height: 350vw;
  }

  @media screen and (max-width: 420px) {
    height: 460vw;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  margin-bottom: 600px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 3400px) {
    margin-top: 200px;
    font-size: 5vw;
    margin-left: 150px;
  }
`;

export const HeroH1 = styled.h1`
  color: #white;
  font-size: 6vw;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 5vw;
  margin-left: 36vw;
  text-shadow: 0 0 0.2em hsl(195 50% 50%);
  font-family: "Saira Extra Condensed", sans-serif;
  font-weight: bold;

  @media screen and (min-width: 3400px) {
    width: 1200px;
    font-size: 5vw;
  }

  @media screen and (min-width: 3100px) {
    width: 1000px;
  }

  @media screen and (min-width: 2180px) {
    width: 600px;
  }

  @media screen and (max-width: 768px) {
    font-size: 8vw;
    margin-left: 32vw;
  }

  @media screen and (max-width: 640px) {
    margin-left: 18vw;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    font-size: 10vw;
    z-index: 2;
    margin-top: 3vw;
  }
`;

const Map = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <HeroContainer id="roadmap">
        <HeroBg>
          <ParticleBackground></ParticleBackground>
          <ParticleBackground></ParticleBackground>
          <ParticleBackground></ParticleBackground>
          <ParticleBackground></ParticleBackground>
          <ParticleBackground></ParticleBackground>
          <ParticleBackground></ParticleBackground>
          <ParticleBackground></ParticleBackground>
          <ParticleBackground></ParticleBackground>
          <ParticleBackground></ParticleBackground>
          <ParticleBackground></ParticleBackground>
        </HeroBg>
        <HeroContent>
          <HeroH1 data-aos="fade-up">ROADMAP</HeroH1>
        </HeroContent>
        <div class="grids">
          <div class="blade" />
          <div class="circle" />
          <div class="circle1" />
          <div class="circle2" />
          <div class="circle3" />
          <div class="circle4" />
          <div class="circle5" />
          <div class="circle6" />
          <div className="box1" data-aos="fade-up">
            <div className="h2">Bounty Credits ($BNTY)</div>
            <div className="p">Q1 2022</div>
            <div className="p">
              $BNTY will be introduced with a staking mechanism. Send your
              Bounty Hunters on missions in order to rack up some credits. $BNTY
              can be used for DAO Auctions, and to deck out your ship and Bounty
              Hunter. It will also be used for Gen 2.
            </div>
          </div>
          <div className="box2" data-aos="fade-up">
            <div className="h2">Blasters & Accessories</div>
            <div className="p">Q1 2022</div>
            <div className="p">
              Acquire loot through Bounty Credits ($BNTY) or win them in special
              events and by participating in Bounty DAO. These will be
              displayable in the armory section of your spaceship.
            </div>
          </div>
          <div className="box3" data-aos="fade-up">
            <div className="h2">Spaceships</div>
            <div className="p">Q2 2022</div>
            <div className="p">
              Ships will be completely modular and unique. Bounty Hunters will
              be able to showcase their NFT’s within their ships. V1 will be a
              2D Gallery, with V2 in the horizon being a 3D gallery with
              walkable and customizable environments.
            </div>
          </div>
          <div className="box4" data-aos="fade-up">
            <div className="h2">Real life 3D Busts</div>
            <div className="p">Q2 2022</div>
            <div className="p">
              Busts/Models will be made purchasable in our merch store. These
              will also be given out to members of the community who contribute
              to BHSG. There will be colored and non colored versions.
            </div>
          </div>
          <div className="box5" data-aos="fade-up">
            <div className="h2">Full 3D Bodies</div>
            <div className="p">Q3 2022</div>
            <div className="p">
              Full bodies and models of every Bounty Hunter will be released.
              The armor pieces of Bounty Hunters will also be completely
              modular, however it will not affect the rarity spread. These will
              be viewable on our website, along with their complete 3D models.
            </div>
          </div>
          <div className="box6" data-aos="fade-up">
            <div className="h2">Merchandise Store</div>
            <div className="p">Q3 2022</div>
            <div className="p">
              A Merchandise Store for holders will be released, details on how
              to claim these purchase these items will released later on. The
              team also plans on creating real-life collective versions of the
              airdropped weapons that will be available for purchase.
            </div>
          </div>
          <div className="box7" data-aos="fade-up">
            <div className="h2">GEN 2</div>
            <div className="p">Q4 2022</div>
            <div className="p">
              The Gen 2 installment of Solaris is in the works.
              <br />
              Aliens? Creatures? Automatons?
              <br />
              Stake for enough $BNTY and find out.
              <br />
              TBA
              <br />
            </div>
          </div>
        </div>
      </HeroContainer>
    </>
  );
};

export default Map;
