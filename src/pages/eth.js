// components
import Hero from "../ETH components/Hero";
import Art from "../ETH components/Art";
import RoadMap from "../ETH components/RoadMap";
import TheTeam from "../ETH components/TheTeam";
import Footer from "../ETH components/Footer";
import Description from "../ETH components/Description";
import Carousel from "../ETH components/Carousel";
import Carousel2 from "../ETH components/Carousel2";
const Eth = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Hero />
        <Art />
        <RoadMap />
        <Description />
        <Carousel />
        <Carousel2 />
        <TheTeam />
        <Footer />
      </div>
    </>
  );
};

export default Eth;
