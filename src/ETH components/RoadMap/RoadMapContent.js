// material
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// file
import WearVideo from "../../assets/Videos/wear.mp4";
import Logo from "../../assets/Images/Black Logo.svg";
import TokenImage from "../../assets/Images/token.png";
import VentureImage from "../../assets/Images/venture.png";
import CommunityImage from "../../assets/Images/community.png";
import ParticleBackgroundMeta from "../../ParticleBackgroundMeta";
// animation
import { varFadeInUp, MotionInView } from "../Animate";
import Img1 from "../../assets/Images/drop/1.png";
import Img2 from "../../assets/Images/drop/2.png";
import Img3 from "../../assets/Images/drop/3.png";
import Img4 from "../../assets/Images/drop/4.png";
import Img5 from "../../assets/Images/drop/5.png";
import Img6 from "../../assets/Images/drop/6.png";
import Img7 from "../../assets/Images/drop/7.png";
import Img8 from "../../assets/Images/drop/8.png";
import Img9 from "../../assets/Images/drop/9.png";
import Img10 from "../../assets/Images/drop/10.png";
import Img11 from "../../assets/Images/drop/11.png";
import Img12 from "../../assets/Images/drop/12.png";
import Img13 from "../../assets/Images/drop/13.png";
import Img14 from "../../assets/Images/drop/14.png";
import Img15 from "../../assets/Images/drop/15.png";
import Img16 from "../../assets/Images/drop/16.png";
import Img17 from "../../assets/Images/drop/17.png";
import Img18 from "../../assets/Images/drop/18.png";
import Img19 from "../../assets/Images/drop/19.png";
import Img20 from "../../assets/Images/drop/20.png";
import Img21 from "../../assets/Images/drop/21.png";
import Img22 from "../../assets/Images/drop/22.png";
import Img23 from "../../assets/Images/drop/23.png";
import Img24 from "../../assets/Images/drop/24.png";
import Img25 from "../../assets/Images/drop/25.png";
import Img26 from "../../assets/Images/drop/26.png";
import Img27 from "../../assets/Images/drop/27.png";
import Img28 from "../../assets/Images/drop/28.png";
import Img29 from "../../assets/Images/drop/29.png";
import Img30 from "../../assets/Images/drop/30.png";
import "./roadmap.css";
const data = [
  {
    id: `01`,
    title: "An NFT Hero's Journey",
    description:
      "Just like a real warrior’s armor, your Bounty Hunter’s armor will scuff and become damaged over time. <br /><br > Every Hunter will wear differently. <br /><br > Once it reaches the last level of battle damage, you may choose to don a fresh coat of an exclusive paint palette only available to those who complete the cycle. This process repeats every cycle with exclusive rewards and paint-jobs every time.",
    img: Img9,
  },
  {
    id: `02`,
    title: "$BNTY Token.",
    description:
      "We’re constantly building the universe with lore filled items. In the horizon are spaceships, weapons, full bodies, and even Alien Companion NFT’s currently in the works.<br /><br > $BNTY will be used to purchase these items. $BNTY is an already running token used on the SOL branch of BHSG for auctions, raffles, and airdrops. Not only that, but we’re working on things to make $BNTY a currency that is useful for those in the entirety of the Web3 space.",
    img: TokenImage,
  },
  {
    id: `03`,
    title: "Community Access",
    description:
      "Access to our DAO, which holds the second largest treasury of all Solana projects —private channels, Auction House, WL slots on Sol and eventually on Eth from other projects, connections, and ultimately; a multi-dimensional Sci-Fi family.",
    img: CommunityImage,
  },
  {
    id: `04`,
    title: "Venture Animation",
    description:
      "To empower holders through DAO funds to create animations/shorts related to the BHSG IP with our assets. We see a world full of possibilities, with the potential of an Anthology similar to “Love Death + Robots”.",
    img: VentureImage,
  },
  {
    id: `05`,
    title: "AND MOST IMPORTANTLY,",
    description:
      "A future of being a Bounty Hunter and family of The Guild in the Metaverse.",
    img: Logo,
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
    "& .paragraph": {
      color: "#000 !important",
    },
    "& .description": {
      color: "#282828 !important",
      fontWeight: 400,
      lineHeight: 1.75,
      fontSize: "1rem",
      letterSpacing: "0.00938em",
      fontFamily: "Barlow",
    },
    "& .MuiTypography-h5": {
      fontSize: "30px",
    },
  },
  subtitle1: {
    fontFamily: "Barlow",
    color: "#282828",
  },
}));

export default function Art() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div class="dbm-displayblocks reverse">
        {data.map((item, i) =>
          i === 0 ? (
            <>
              <div>
                <div class="l-page-wrapper">
                  <div
                    role="article"
                    class="l-page l-page--node l-page--node-type--dbm-printed-skins-display"
                  >
                    <div id="main" class="l-main">
                      <a id="main-content"></a>
                      <div class="l-content">
                        <article
                          role="article"
                          class="node node--dbm-printed-skins-display"
                        >
                          <div class="dbm-printed-skins-display-blocks dbm-printed-skins-display-blocks--leather">
                            <div class="blocks-section blocks-section--prefix">
                              <div class="blocks-section--inner">
                                <div class="dbv3-block dbv3-block--dbm-displayblock-simple-feature dbv3-block--dbm-displayblock-simple-feature--leather-patina">
                                  <div class="block-content">
                                    <div class="dbm-displayblock dbm-displayblock-simple-feature dbm-displayblock--leather-patina">
                                      <div class="content-new">
                                        <div class="copy-wrapper">
                                          <div class="copy">
                                            <p class="paragraph">{item.id}</p>
                                            <h4 class="MuiTypography-h5">
                                              {item.title}
                                            </h4>
                                            <div class="lines">
                                              <Typography
                                                variant="subtitle1"
                                                color="#282828"
                                                className={classes.subtitle1}
                                                dangerouslySetInnerHTML={{
                                                  __html: item.description,
                                                }}
                                              ></Typography>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="image-wrapper">
                                          <div
                                            class="dbv3-lazy-loader--img dbm-displayblock-img"
                                            style={{ width: 1026 }}
                                          >
                                            <div
                                              class="dbv3-lazy-loader--img--spacer"
                                              style={{
                                                paddingTop: "105.26316%",
                                              }}
                                            ></div>
                                            <link
                                              href={Img1}
                                              class="dbv3-lazy-loader--img--target"
                                            />
                                          </div>
                                          <div class="feature-assets">
                                            {[
                                              Img1,
                                              Img2,
                                              Img3,
                                              Img4,
                                              Img5,
                                              Img6,
                                              Img7,
                                              Img8,
                                              Img9,
                                              Img10,
                                              Img11,
                                              Img12,
                                              Img13,
                                              Img14,
                                              Img15,
                                              Img16,
                                              Img17,
                                              Img18,
                                              Img19,
                                              Img20,
                                              Img21,
                                              Img22,
                                              Img23,
                                              Img24,
                                              Img25,
                                              Img26,
                                              Img27,
                                              Img28,
                                              Img29,
                                              Img30,
                                            ].map((_, i) => (
                                              <div
                                                class="dbv3-lazy-loader--img dbm-displayblock-img"
                                                style={{ width: 1026 }}
                                              >
                                                <div
                                                  class="dbv3-lazy-loader--img--spacer"
                                                  style={{
                                                    paddingTop: "105.26316%",
                                                  }}
                                                ></div>
                                                <link
                                                  href={_}
                                                  class="dbv3-lazy-loader--img--target"
                                                />
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div class="dbm-displayblock dbm-grip-v2-display-slidestack-displayblock-slide dbm-slidestack-slide-target">
              <div class="dbm-slidestack-block reverse">
                <div
                  class={`dbm-slidestack-block__inner reverse ${
                    i === 4 && "last"
                  }`}
                >
                  <figure class="dbm-slidestack-block__fig">
                    <div class="dbm-slidestack-block__fig-inner reverse">
                      <div class="dbv3-lazy-loader--img dbm-slidestack-block__img">
                        {i === 4 ? (
                          <ParticleBackgroundMeta />
                        ) : (
                          <link
                            href={item.img}
                            class="dbv3-lazy-loader--img--target"
                            title="dbrand Grip Case - Clicky Buttons"
                          />
                        )}
                        {i === 0 ? (
                          <video
                            autoPlay
                            muted
                            loop
                            className="hero"
                            resizeMode="contain"
                            style={{ height: "100%", width: "100%" }}
                          >
                            <source src={WearVideo} type="video/mp4" />
                          </video>
                        ) : (
                          <link
                            href={item.img}
                            class="dbv3-lazy-loader--img--target"
                            title="dbrand Grip Case - Clicky Buttons"
                            style={{ height: "50%", marginTop: "12.5vw" }}
                          />
                        )}
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
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></Typography>
                          </MotionInView>
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </Box>
  );
}
