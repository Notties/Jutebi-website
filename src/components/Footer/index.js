import React from "react";
import { FaGithub} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  SociaMedia,
  SociaMediaWrap,
  Socialogo,
  WebsiteRights,
  SocialIcons,
  SociaIconLink,
} from "./FooterElement";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SociaMedia>
          <SociaMediaWrap>
            <Socialogo to="/" onClick={toggleHome}>Jutebi</Socialogo>
            <WebsiteRights>
              Jutebi © 2022-{new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SociaIconLink href="https://github.com/Notties/Jutebi-Bot-discord-song" target="_blank" aria-label="FaGithub">
                <FaGithub />
              </SociaIconLink>
            </SocialIcons>
          </SociaMediaWrap>
        </SociaMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
