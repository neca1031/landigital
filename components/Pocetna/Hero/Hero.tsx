import React, { useState } from "react";
import Image from "next/image";
import {
  NavLogo,
  NavItems,
  Header,
  NavItem,
  NavButton,
  Mobile,
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
} from "./HeroStyles";
import { FaBars } from "react-icons/fa";

const Hero = ({ toggle }) => {
  return (
    <>
      <HeroWrapper>
        <Header>
          <a href="/">
            <NavLogo src={"/lan-logo1.png"}></NavLogo>
          </a>
          <Mobile onClick={toggle}></Mobile>
          <NavItems>
            <NavItem href="/">Početna</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/about">O nama</NavItem>
            <NavItem href="/usluge">Usluge</NavItem>
            <NavItem href="/kontakt">Kontakt</NavItem>
            <a href="/forma">
              <NavButton>Pošaljite upit</NavButton>
            </a>
          </NavItems>
        </Header>
        <HeroContainer>
          <HeroContent>
            <HWrapper>
              <H4>Mladi i preduzimljivi</H4>
              <H2Wrapper>
                <H2>Vaše ideje, naše umeće</H2>
              </H2Wrapper>
              <PWrapper>
                <P>
                  Vaše ideje pretvaramo u stvarnost uz pomoć najpouzdanijih
                  tehnologija. <br />
                  Prepustite sav težak rad nama i uživajte u svom novom sajtu.
                </P>
              </PWrapper>
              <HButton>Kontaktirajte nas</HButton>
            </HWrapper>
          </HeroContent>
        </HeroContainer>
      </HeroWrapper>
    </>
  );
};

export default Hero;
