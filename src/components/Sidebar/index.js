import React from "react";
import { Button } from "../ButtonElements";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap, 
} from "./SidebarElements";

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="Commands" onClick={toggle}>Commands</SidebarLink>
          <SidebarLink to="Developedby" onClick={toggle}>Developed by</SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
        <Button href='https://discord.com/oauth2/authorize?client_id=976059979238866994&permissions=8&scope=bot'
          onClick="https://discord.com/oauth2/authorize?client_id=976059979238866994&permissions=8&scope=bot" target="_blank"
          primary="true"
          dark="true">
            Invite me
          </Button>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
