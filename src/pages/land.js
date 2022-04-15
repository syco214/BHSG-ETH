import "./land.css";
import styled from "styled-components";

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-family: "Saira Extra Condensed", sans-serif;
  font-weight: bold;
`;

const Land = () => {
  return (
    <div class="wrapper">
      <div class="side left">
        <div class="image dog"></div>
        <div class="caption">
          <HeroH1>ETHEREUM</HeroH1>
          <a class="button" href="/eth">
            View ETH Website
          </a>
        </div>
      </div>

      <div class="side right">
        <div class="image cat"></div>
        <div class="caption">
          <HeroH1>SOLANA</HeroH1>
          <a class="button" href="/sol">
            View SOL Website
          </a>
          {/* <a  href="sol"></a> */}
        </div>
      </div>
    </div>
  );
};

export default Land;
