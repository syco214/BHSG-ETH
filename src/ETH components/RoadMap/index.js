import React from "react";
// file
import RoadMapBg from "../../assets/Images/Illustration.png";
// material
import { Typography } from "@material-ui/core";

// animation
import { varFadeInUp, MotionInView } from "../Animate";
import { ParallaxBanner } from "react-scroll-parallax";

// ____________
import RoadMapContent from "./RoadMapContent";

import "./roadmap.css";
export default function index() {
  return (
    <div id="roadmap">
      <MotionInView variants={varFadeInUp}>
        <div className="roadmap-main" height={400}>
          <ParallaxBanner 
            layers={[
              {
                image: RoadMapBg,
                speed: 20,
              }
            ]} style={{aspectRatio:'3/1'}}>
          </ParallaxBanner>
          <Typography variant="h2" className="h2" color="text.primary">
            tHe ROaDmAp iS SimPle
          </Typography>
        </div>
      </MotionInView>
      <RoadMapContent />
    </div>
  );
}
