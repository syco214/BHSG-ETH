import React from "react";
// material
import { Container, Link, Grid } from "@material-ui/core";
// file
import LogoBlack from "../../assets/Images/Black Logo.svg";
// style
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer-main">
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <img
              alt="logo-black"
              src={LogoBlack}
              width="100px"
              className="mt-2"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="footer-nav">
              <Link href="/sol">SOLANA</Link>
              <Link href="https://twitter.com/BountyHunterNFT" target="_blank">
                TWITTER
              </Link>
              <Link
                href="/https://discord.com/invite/YPDJGKWMNX"
                target="_blank"
              >
                DISCORD
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
