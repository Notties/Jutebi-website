import React, {useState, useEffect} from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../ButtonElements";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./NavbarElement";

const Navbar = ({toggle}) => {
  const [scrollNav, setscrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setscrollNav(true)
    }else{
      setscrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Jutebi</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Commands"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Commands</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Developedby"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Developed by</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
          <Button href='https://discord.com/oauth2/authorize?client_id=976059979238866994&permissions=8&scope=bot'
          onClick="https://discord.com/oauth2/authorize?client_id=976059979238866994&permissions=8&scope=bot" target="_blank"
          primary="true"
          dark="true">
            Invite me
          </Button>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
