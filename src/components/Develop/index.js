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

const Develop = () => {
  return (
    <DevelopContainer id="Developedby">
      <DevelopH1>Developer of Jutebi</DevelopH1>
      <DevelopWrapper>
        <DevelopCard>
          <DevelopIcon src={Icon1} />
          <DevelopH2>Mamypoko666</DevelopH2>
          <DevelopP>#5799</DevelopP>
        </DevelopCard>
      </DevelopWrapper>
    </DevelopContainer>
  );
};

export default Develop;
