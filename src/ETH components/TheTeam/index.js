// material
import { Paper, Container, Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// files
import Member1 from "../../assets/Images/Jaga.png";
import Member2 from "../../assets/Images/Sage.png";
import Member3 from "../../assets/Images/Ethan.png";
import Member4 from "../../assets/Images/Alex.png";
import Member5 from "../../assets/Images/Evan.png";
import Member6 from "../../assets/Images/2.png";
import Member7 from "../../assets/Images/Zach.png";
import { varFadeInUp, varFadeInDown, MotionInView } from "../Animate";

// member data
const membersData = [
  {
    name: "Jaga",
    position: "Artist",
    cover: Member1,
  },
  {
    name: "Sage",
    position: "Coder",
    cover: Member2,
  },
  {
    name: "ETHAN",
    position: "Visionary",
    cover: Member3,
  },
  {
    name: "ALEX",
    position: "Community Manager",
    cover: Member4,
  },
  {
    name: "Evan",
    position: "Marketing",
    cover: Member5,
  },
  {
    name: "Jude",
    position: "Lead Moderator",
    cover: Member6,
  },
  {
    name: "Zach",
    position: "Lead Moderator",
    cover: Member7,
  },
];

// styles
const useStyles = makeStyles({
  root: {
    padding: "40px 0px 40px 0px",
    borderRadius: 0,
  },
  heading: {
    textAlign: "center",
    fontFamily: "Punc-Bold",
    padding: "40px 0px 40px 0px",
    fontSize: "30px",
    color: "#282828",
  },
  img: {
    objectFit: "cover",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.01)",
      transition: "all 0.2s ease-in-out",
    },
  },
  h6: {
    fontFamily: "Inter",
    fontWeight: "medium",
    textTransform: "uppercase",
    marginTop: 12,
    fontSize: 20,
    color: "#282828",
  },
  body1: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#282828",
    fontFamily: "Barlow",
  },
});
export default function TheTeam() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} id="team">
      <Container maxWidth="md">
        <MotionInView variants={varFadeInDown}>
          <Typography
            variant="h4"
            color="text.primary"
            className={classes.heading}
          >
            tHE tEaM
          </Typography>
        </MotionInView>
        <Grid container spacing={4}>
          {membersData.map((v) => (
            <Grid item xs={12} sm={6} md={3} key={Math.random()}>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <MotionInView variants={varFadeInDown}>
                  <img
                    src={v.cover}
                    alt="logo"
                    width="100%"
                    className={classes.img}
                  />
                </MotionInView>
                <Box>
                  <MotionInView variants={varFadeInUp}>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      className={classes.h6}
                    >
                      {v.name}
                    </Typography>
                  </MotionInView>
                  <MotionInView variants={varFadeInUp}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      className={classes.body1}
                    >
                      {v.position}
                    </Typography>
                  </MotionInView>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}
