import React from "react";
import Icon1 from "../../images/Mamypoko666.png"
import {
  DevelopContainer,
  DevelopH1,
  DevelopWrapper,
  DevelopCard,
  DevelopIcon,
  DevelopH2,
  DevelopP
} from "./DevelopElement";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Develop = () => {
  return (
    <DevelopContainer id="Developedby">
      <DevelopH1 data-aos="flip-left" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">Developer of Jutebi</DevelopH1>
      <DevelopWrapper data-aos="zoom-out" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
        <DevelopCard>
          <DevelopIcon src={Icon1} />
          <DevelopH2>Knot</DevelopH2>
          <DevelopP>#8555</DevelopP>
        </DevelopCard>
      </DevelopWrapper>
    </DevelopContainer>
  );
};

export default Develop;
