import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SideBtnWrap,
  SidebarBtn,
  SidebarItem,
  SidebarMenu,
  NavLogo,
  HomeIcon,
  BlogIcon,
  AboutIcon,
  ServicesIcon,
  ContactIcon,
} from "./SidebarStyles";
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <NavLogo src={"/lan-logo1.png"}></NavLogo>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem href="/">
            <HomeIcon></HomeIcon>
            Home
          </SidebarItem>
          <SidebarItem href="/blog">
            <BlogIcon></BlogIcon>
            Blog
          </SidebarItem>
          <SidebarItem href="/about">
            <AboutIcon></AboutIcon>About Us
          </SidebarItem>
          <SidebarItem href="/usluge">
            <ServicesIcon></ServicesIcon>
            Services
          </SidebarItem>
          <SidebarItem href="/kontakt">
            <ContactIcon></ContactIcon>Contact
          </SidebarItem>
        </SidebarMenu>
        <SideBtnWrap>
          <Link href="/forma">
            <SidebarBtn>Contact Us</SidebarBtn>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
