import { useState } from "react";
import React from "react";
import styled from "styled-components";
import ParticleBackground from "../../ParticleBackground";
import "./Tabs.css";

export const HeroBg = styled.div`
  position: absolute;
  background: black;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const HeroContainer = styled.div`
    background: black;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 710px;
    position: relative;
    z-index 1;

    @media screen and (max-width: 480px) {
        margin-top: 0;
        height: 400px;
    }
`;

export const HeroContent = styled.div`
  position: absolute;
  margin-bottom: 500px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #white;
  font-size: 48px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 270px;
  text-shadow: 0 0 0.2em hsl(195 50% 50%);
  font-family: "Saira Extra Condensed", sans-serif;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-left: 23vw;
  }

  @media screen and (max-width: 640px) {
    font-size: 28px;
    margin-left: 15vw;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <HeroContainer id="benefits">
      <HeroBg>
        <ParticleBackground></ParticleBackground>
        <ParticleBackground></ParticleBackground>
      </HeroBg>
      <div>
        <HeroContent>
          <HeroH1>GUILD MEMBER BENEFITS</HeroH1>
        </HeroContent>
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              $BNTY
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Airdrops
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Merchandise
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              DAO Access
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h2>Staking and Earning $BNTY</h2>
              <hr />
              <p>
                $BNTY is the main currency of the universe and is earned through Bounty Hunters. 
                Weapons & Airdrops will add modifiers to the $BNTY yield. <br /><br />
                $BNTY is also currently being used in Auctions, raffles, 
                and purchasing weapons from The Black Market. <br /><br />
                $BNTY will also be used for the Ethereum Hunter 
                for SOL Holders, Spaceships, and full 3D Bodies. <br /><br />
                Besides that, we are working on ways to expand $BNTY even more.
              </p>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Spaceships and Blasters</h2>
              <hr />
              <p>
                Spaceships, ETH Hunter for SOL Holders, and 
                Weapons are going to be purchasable with $BNTY. <br /><br />
                These can also be bought and sold on 
                Magic Eden via <a style={{textDecoration: "none"}}href="https://magiceden.io/marketplace/bounty_hunter_space_guild_cache"> “Bounty Hunter Space Guild: Cache” </a><br /><br />
                There is also a Daily Bounty Hunter airdrop for Holders.
              </p>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Metaverse and Merch</h2>
              <hr />
              <p>
                Each Bounty Hunter holder is eligible for future airdrops
                including the blasters and spaceships. They are also eligible to
                get 3D models of their hunters, as well as any other content
                that the guild releases. <br />
                <br /> A merchandise store will also be released with 3D printed
                busts, clothing, and other premium collectibles.
              </p>
            </div>

            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <h2>Access to Discord and Future Airdrops</h2>
              <hr />
              <p>
                Bounty Hunter holders will be verified through Solaland this
                will give them access to the following:
                <br />
                <br />
                1. “The Guild” and “The Mission Room” Categories on discord.{" "}
                <br />
                2. To vote for which NFT’s will be put into the Tower x BHSG
                room after the each Sweep. <br />
                3. To vote on DAO decisions. <br />
                4. Exclusive Bounty Hunter Space Guild merchandise and
                collectibles. <br />
                5. Future world building airdrops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}

export default Tabs;
