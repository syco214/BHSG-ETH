// files
import HeroVideo from "../../assets/Videos/bg-hero.mp4";
import Bg from "../../assets/Images/mobile.png";
import Logo from "../../assets/Images/Subtract.svg";
import MobileText from "../../assets/Images/Bounty huntEr Space Guild.svg";

// material
import { Container, Hidden } from "@material-ui/core";

// hero styles
import "./hero.css";

// _____________________
import Appbar from "../Appbar";

export default function Hero() {
  return (
    <div className="eth-hero-main">
      <Hidden smDown>
        <video autoPlay muted loop className="hero">
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </Hidden>
      <Hidden mdUp>
        <img src={Bg} alt="bg" className="bg" />
        <img src={MobileText} alt="mobile" className="mobile-text" />
      </Hidden>

      <img src={Logo} alt="logo" className="logo" />

      <Container fixed>
        <Appbar />
      </Container>
    </div>
  );
}
