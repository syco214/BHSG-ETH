import React, {useEffect, useState} from 'react'
import "aos/dist/aos.css";
import Aos from "aos";
import styled from 'styled-components'
import { ImgWrap, InfoContainer, InfoRow, InfoWrapper, Column1, Column2, 
    TextWrapper, TopLine, Subtitle, Img, BtnWrap, Button} from './TokenElements'
import ParticleBackground from '../../ParticleBackground'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCMC, faCoingecko, faSolana} from "../myicons/fa-cmc";

library.add(faCMC, faCoingecko, faSolana);

dom.watch();

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const HeroContainer = styled.div`
    background: #0c0c0c;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 710px;
    position: relative;
    z-index 1;

    @media screen and (max-width: 768px) {
        height: 1700px;

    }
    @media screen and (max-width: 480px) {
        height: 1200px;
    }
`

const Token = ({lightBg, headline, darkText, description, img, alt}) => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    },[]);

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id='$BNTY'>
            <HeroContainer>
                <HeroBg>
                    <ParticleBackground></ParticleBackground>
                    <ParticleBackground></ParticleBackground>
                    <ParticleBackground></ParticleBackground>
                    <ParticleBackground></ParticleBackground>
                    <ParticleBackground></ParticleBackground>
                    <ParticleBackground></ParticleBackground>
                    <ParticleBackground></ParticleBackground>
                </HeroBg>
                <InfoWrapper data-aos="fade-up">
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{headline}
                                    <a href="https://coinmarketcap.com/currencies/bounty/" className="cmc social2">
                                        <FontAwesomeIcon icon={faCMC}/>
                                    </a>
                                    <a href="https://www.coingecko.com/en/coins/bounty" className="gecko social2">
                                        <FontAwesomeIcon icon={faCoingecko}/>
                                    </a>
                                    <a href="https://solscan.io/token/BNTY5DaMP9CZhEtmQfMLHfUwwkXropHuCz4m96YqpqKm" className="solana social2">
                                        <FontAwesomeIcon icon={faSolana}/>
                                    </a>
                                </TopLine>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle>
                                    <b>Total $BNTY Supply:</b> 939,018,499 $BNTY<br/>
                                    <b>Total $BNTY Burned:</b> 17,206,501 $BNTY<br/>
                                </Subtitle>
                                <BtnWrap>
                                    <Button a href="https://jup.ag/swap/BNTY-SOL" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Buy $BNTY</Button>
                                    <br></br>
                                    <Button a href="https://bountyhunterspaceguild.gitbook.io/bounty-hunter-space-guild/usdbounty/tokenomics" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Read Tokenomics</Button>
                                </BtnWrap>
                            </TextWrapper> 
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </HeroContainer>
            </InfoContainer>
        </>
    )
}

export default Token
