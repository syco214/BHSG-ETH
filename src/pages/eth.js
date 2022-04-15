// components
import Hero from "../ETH components/Hero";
import Art from "../ETH components/Art";
import RoadMap from "../ETH components/RoadMap";
import TheTeam from "../ETH components/TheTeam";
import Footer from "../ETH components/Footer";
import Description from "../ETH components/Description";
const Eth = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Hero />
        <Art />
        <RoadMap />
        <Description />
        <TheTeam />
        <Footer />
      </div>
    </>
  );
};

export default Eth;
