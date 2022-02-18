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
            Početna
          </SidebarItem>
          <SidebarItem href="/blog">
            <BlogIcon></BlogIcon>
            Blog
          </SidebarItem>
          <SidebarItem href="/about">
            <AboutIcon></AboutIcon>O nama
          </SidebarItem>
          <SidebarItem href="/usluge">
            <ServicesIcon></ServicesIcon>
            Usluge
          </SidebarItem>
          <SidebarItem href="/kontakt">
            <ContactIcon></ContactIcon>Kontakt
          </SidebarItem>
          
        </SidebarMenu>
        <SideBtnWrap>
          <Link href="/forma">
            <SidebarBtn>Pošaljite upit</SidebarBtn>
          </Link>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
