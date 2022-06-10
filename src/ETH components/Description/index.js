import React from "react";
// file
import DescriptionBg from "../../assets/Images/description.JPG";
// material
import Typography from "@material-ui/core/Typography";
// animation
// style
import "./index.css";
import { varFadeInUp, MotionInView } from "../Animate";
export default function RoadMapDescription() {
  return (
    <MotionInView variants={varFadeInUp}>
    <div className=" description">
      <img alt="hell" src={DescriptionBg} width="100%" height={550} />

      <Typography variant="body2" color="text.primary">
        Owning a Bounty Hunter allows you to be a part of The Guild, which gives
        you access to our DAO (Decentralized Autonomous Organization) that is
        already up and running. The Guild is currently voting for future
        projects, sweeping floors of other projects, getting exclusive access to
        project Whitelists, and participating in our NFT Auction House using our
        $BNTY Token. Our DAO Treasury also boasts over half a million USD in
        value and is constantly growing.
        <br />
        <br />
        We have been fostering our community and culture in the NFT space for
        over half a year. Our goal is to expand to the edges of the galaxy and
        put a dent into the world as a decentralized Sci-Fi community driven
        media entity.
      </Typography>
    </div>
    </MotionInView>
  );
}
