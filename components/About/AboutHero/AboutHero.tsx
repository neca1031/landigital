import React from "react";
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
  HeroContainer,
} from "./AboutHeroStyles";
import Link from 'next/link';

const AboutHero = ({ toggle } : {toggle:any}) => {
  return (
    <HeroWrapper>
      <Header>
        <Link href="/">
          <NavLogo src={"/lan-logo1.png"}></NavLogo>
        </Link>
        <Mobile onClick={toggle}></Mobile>
        <NavItems>
          <NavItem href="/">Početna</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/about">O nama</NavItem>
          <NavItem href="/usluge">Usluge</NavItem>
          <NavItem href="/kontakt">Kontakt</NavItem>
          <Link href="/forma">
            <NavButton>Pošaljite upit</NavButton>
          </Link>
        </NavItems>
      </Header>
      <HeroContainer>
        <HeroContent>
          <HWrapper>
            <H2Wrapper>
              <H2>O nama</H2>
            </H2Wrapper>
            <H4>Dobrodošli u Lan Digital</H4>
            <PWrapper>
              <P>Mladi, ambiciozni i puni želje za napredovanjem.</P>
            </PWrapper>
          </HWrapper>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default AboutHero;
