// images
import ArtImage from "../../assets/Images/art-1.png";
import Art2Image from "../../assets/Images/art-2.png";
import RobustImage from "../../assets/Images/robust.png";
import MetaverseImage from "../../assets/Images/metaverse.png";

// material
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// animations
import { varFadeInUp, MotionInView } from "../Animate";

// data
const data = [
  {
    id: `01`,
    title: "10,000",
    description:
      "Handcrafted bounty hunters inspired by history, culture and the greatest Sci-Fi universes on the planet Earth.",
    img: ArtImage,
  },
  {
    id: `02`,
    title: "ART",
    description:
      "Each bounty hunter and its traits will be rendered in complete 3D. No 2D overlays here. Ready for metaverse application.",
    img: Art2Image,
  },
  {
    id: `03`,
    title: "Robust Silhouettes",
    description:
      "Piece of art that will be recognized even through shadows alone. Iconicity is our key.",
    img: RobustImage,
  },
  {
    id: `04`,
    title: "Metaverse",
    description:
      "The ultimate vision of BHSG it to see Bounty Hunters walking arround the metaverse, flying their ships, and looking badass. ",
    img: MetaverseImage,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .text-secondary": {
      color: "#282828",
      letterSpacing: 3,
      fontFamily: "Barlow",
      fontSize: 20,
    },
    "& .MuiTypography-h4": {
      color: "#282828",
      margin: "14px 0",
      fontSize: 30,
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "Inter",
    },
    "& .MuiTypography-body1": {
      color: "#2e2e2e",
      fontWeight: 300,
      fontSize: 14,
    },
    "& .MuiPaper-root": {
      borderRadius: 0,
      height: "100%",
      display: "flex",
      alignItems: "center",
      boxShadow: "none",
      "& .content-section": {
        maxWidth: "82%",
        margin: "0 auto",
      },
    },
  },
  subtitle1: {
    fontFamily: "Barlow",
    color: "#282828",
  },
}));
export default function Tech() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div class="dbm-displayblocks">
        {data.map((item, i) => (
          <div class="dbm-displayblock dbm-grip-v2-display-slidestack-displayblock-slide dbm-slidestack-slide-target">
            <div class="dbm-slidestack-block">
              <div class="dbm-slidestack-block__inner">
                <figure class="dbm-slidestack-block__fig">
                  <div class="dbm-slidestack-block__fig-inner">
                    <div class="dbv3-lazy-loader--img dbm-slidestack-block__img">
                      <link
                        href={item.img}
                        class="dbv3-lazy-loader--img--target"
                        title="dbrand Grip Case - Clicky Buttons"
                      />
                    </div>
                  </div>
                </figure>
                <div class="dbm-slidestack-block__content">
                  <div class="dbm-slidestack-block__content-inner">
                    <div class="dbm-slidestack-block__copy">
                      <Box className="content-section">
                        <MotionInView variants={varFadeInUp}>
                          <Typography
                            variant="subtitle1"
                            className="text-secondary"
                          >
                            {item.id}
                          </Typography>
                        </MotionInView>
                        <MotionInView variants={varFadeInUp}>
                          <Typography variant="h4">{item.title}</Typography>
                        </MotionInView>
                        <MotionInView variants={varFadeInUp}>
                          <Typography
                            variant="subtitle1"
                            color="#282828"
                            className={classes.subtitle1}
                          >
                            {item.description}
                          </Typography>
                        </MotionInView>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
