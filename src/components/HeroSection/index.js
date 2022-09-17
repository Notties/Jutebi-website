import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import logo from "../../images/logo.png";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Herologo,
} from "./HeroElements";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <Herologo src={logo} />
        <HeroH1 data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2500">Jutebi#3512</HeroH1>
        <HeroP data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2500">I'm a music bot for Discord server.</HeroP>
        <HeroBtnWrapper data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2500">
          <Button
            href="https://discord.com/oauth2/authorize?client_id=976059979238866994&permissions=8&scope=bot"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick="https://discord.com/oauth2/authorize?client_id=976059979238866994&permissions=8&scope=bot"
            target="_blank"
            primary="true"
            dark="true"
          >
            Invite me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
