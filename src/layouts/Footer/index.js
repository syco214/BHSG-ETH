import React from 'react'
import {faTwitter, faDiscord, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, 
FooterLinkItems, FooterLink, WebsiteRights, Icons} from "./FooterElements"

const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLink href="https://solradar.io/collection/bounty_hunter_space_guild">SolRadar</FooterLink>
                                <FooterLink href="https://moonrank.app/collection/bounty_hunter_space_guild">Moonrank</FooterLink>
                                <FooterLink href="https://howrare.is/bountyhunterspaceguild">HowRareIs</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <WebsiteRights>Terra One © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                                <Icons>
                                    <a href="https://twitter.com/BountyHunterNFT" className="twitter social"> 
                                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                                    </a>
                                    <a href="https://discord.gg/YPDJGKWMNX" className="discord social"> 
                                    <FontAwesomeIcon icon={faDiscord} size="1x" />
                                    </a>
                                    <a href="https://www.instagram.com/bountyhunternft/" className="discord social"> 
                                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                                    </a>
                                </Icons>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLink href="https://drive.google.com/file/d/1QxQC48CoFpbLoDWjjVqgpAzDaDyXBbxR/view?usp=sharing">Terms and Conditions</FooterLink>
                                <FooterLink href="mailto:bountyhunterspaceguild@gmail.com">Contact Us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>

    )
}

export default Footer;