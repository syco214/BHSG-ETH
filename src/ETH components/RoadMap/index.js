import React from "react";
// file
import RoadMapBg from "../../assets/Images/Illustration.png";
// material
import { Typography } from "@material-ui/core";

// animation
import { varFadeInUp, MotionInView } from "../Animate";
import { Parallax } from "react-scroll-parallax";

// ____________
import RoadMapContent from "./RoadMapContent";

import "./roadmap.css";
export default function index() {
  return (
    <div id="roadmap">
      <MotionInView variants={varFadeInUp}>
        <div className="roadmap-main">
          <Parallax translateY={[0, 15]}>
          <img alt="hell" src={RoadMapBg} />
          </Parallax>
          <Typography variant="h2" color="text.primary">
            tHe ROaDmAp iS SimPle
          </Typography>
        </div>
      </MotionInView>
      <RoadMapContent />
    </div>
  );
}
