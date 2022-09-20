import React from "react";
import {
  DevelopContainer,
  DevelopH1,
  DevelopWrapper,
  DevelopCard,
  Images,
} from "./DevelopElement";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Develop = () => {
  return (
    <DevelopContainer id="Developedby">
      <DevelopH1 data-aos="flip-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">Developer of Jutebi</DevelopH1>
      <DevelopWrapper data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
        <DevelopCard>
          <Images src="https://discord.c99.nl/widget/theme-1/674982630357205007.png"/>
        </DevelopCard>
      </DevelopWrapper>
    </DevelopContainer>
  );
};

export default Develop;
