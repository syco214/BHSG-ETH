import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";

// styles

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    width: "75%",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    "@media screen and (max-width: 1280px)": {
      top: "80%",
      left: "50%",
      transform: "translate(-50%, -25%)",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Appbar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "stikcy",
    top: 0,
    "& .MuiToolbar-root": {
      justifyContent: "space-around",
      fontSize: 16,
      "& .MuiButton-root": {
        fontFamily: "Saira",
        padding: "6px 30px",
        textTransform: "uppercase",
        letterSpacing: 3,
        "&.active:after": {
          backgroundImage: `radial-gradient(45.44% 2964230.93% at 52.25% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)`,
          content: "''",
          width: "100%",
          position: "absolute",
          bottom: 0,
          height: 1.5,
          margin: "0 10px",
        },
        "&.active:before": {
          backgroundImage: `radial-gradient(45.44% 2964230.93% at 52.25% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)`,
          content: "''",
          width: "100%",
          position: "absolute",
          top: 0,
          height: 1.5,
          margin: "0 10px",
        },
        "&:hover:after": {
          backgroundImage: `radial-gradient(45.44% 2964230.93% at 52.25% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)`,

          content: "''",
          width: "100%",
          position: "absolute",
          bottom: 0,
          height: 1.5,
          margin: "0 10px",
          color: "#fff!important",
        },
        "&:hover:before": {
          backgroundImage: `radial-gradient(45.44% 2964230.93% at 52.25% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)`,
          content: "''",
          width: "100%",
          position: "absolute",
          top: 0,
          height: 1.5,
          margin: "0 10px",
          color: "#fff!important",
        },
      },

      "& .MuiIconButton-root": {
        margin: "0 10px",
        border: "1px solid transparent",
        "&:hover": {
          border: "1px solid #eee",
        },
      },
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setstate] = React.useState(0);

  return (
    <div className={classes.root} id="home">
      <AppBar className={classes.Appbar}>
        <Toolbar className="toolbar">
          {["Home", "ROADMAP", "Gallery", "Team", "Solana"].map((v, i) =>
            i === 4 ? (
              <Link
                key={Math.random()}
                to={v.toLowerCase()}
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <Button
                  fullWidth
                  color="inherit"
                  className={state === i ? "active" : ""}
                  onClick={() => {
                    setstate(i);
                    history.push("/sol");
                  }}
                >
                  {v}
                </Button>
              </Link>
            ) : (
              <Link
                key={Math.random()}
                to={v.toLowerCase()}
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <Button
                  onClick={() => setstate(i)}
                  fullWidth
                  color="inherit"
                  className={state === i ? "active" : ""}
                >
                  {v}
                </Button>
              </Link>
            )
          )}
          <div>
            <IconButton
              href="https://twitter.com/BountyHunterNFT"
              target="_blank"
              aria-label="icon"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://discord.com/invite/YPDJGKWMNX"
              target="_blank"
              aria-label="icon"
              color="inherit"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 -28.5 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                    fill="#fff"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
