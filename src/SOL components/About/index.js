import React, {useState} from 'react'
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight, Image} from './AboutElements'
import ParticleBackground from '../../ParticleBackground'
import { Button } from './ButtonElement'
import logo from '../../assets/Logos/logo.svg';

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='about'>
           <HeroBg>
                <ParticleBackground></ParticleBackground>
                <ParticleBackground></ParticleBackground>
                <ParticleBackground></ParticleBackground>
                <ParticleBackground></ParticleBackground>
                <ParticleBackground></ParticleBackground>
           </HeroBg> 
           <HeroContent>
               <Image max-width='10%' src={logo} alt="logo"/>
               <HeroH1>BOUNTY HUNTER SPACE GUILD</HeroH1>
               {/* <HeroP>5,555 Unique NFTs</HeroP> */}
               <HeroBtnWrapper>
                   <Button a href="https://magiceden.io/marketplace/bounty_hunter_space_guild" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                       Recruit a Bounty Hunter {hover ? <ArrowForward /> : <ArrowRight/>}
                   </Button>
               </HeroBtnWrapper>
           </HeroContent>
        </HeroContainer>
    )
}

export default Hero
