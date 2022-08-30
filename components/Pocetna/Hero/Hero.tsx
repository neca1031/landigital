import React, { useState } from "react";
import {
  NavLogo,
  NavItems,
  Header,
  NavItem,
  NavButton,
  HeroWrapper,
  HeroContent,
  HWrapper,
  H4,
  H2Wrapper,
  H2,
  PWrapper,
  P,
  HButton,
  HeroContainer,
  MenuIcon,
} from "./HeroStyles";
import Link from "next/link";

const Hero = ({ toggle }: { toggle: any }) => {
  return (
    <>
      <HeroWrapper>
        <Header>
          <Link href="/">
            <NavLogo src={"/lan-logo1.png"}></NavLogo>
          </Link>

          <MenuIcon onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: "2.3rem",
                width: "2.3rem",
                verticalAlign: "bottom",
                color: "white",
              }}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </MenuIcon>
          <NavItems>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/usluge">Services</NavItem>
            <NavItem href="/kontakt">Contact</NavItem>
            <Link href="/forma">
              <NavButton>Contact Us</NavButton>
            </Link>
          </NavItems>
        </Header>
        <HeroContainer>
          <HeroContent>
            <HWrapper>
              <H4>Young and enterprising</H4>
              <H2Wrapper>
                <H2>Your online presence is important to us.</H2>
              </H2Wrapper>
              <PWrapper>
                <P>
                  We turn your ideas into reality with the help of modern
                  technology. <br />
                  Leave all the hard work to us and enjoy your new website.
                </P>
              </PWrapper>
              <Link href="forma">
                <HButton>Contact us</HButton>
              </Link>
            </HWrapper>
          </HeroContent>
        </HeroContainer>
      </HeroWrapper>
    </>
  );
};

export default Hero;
