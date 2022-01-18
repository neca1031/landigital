import React from 'react'
import FormaSection from '../FormaSection/FormaSection';
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
    HeroContainer,
    Link
  } from "./FormaHeroStyles";

const FormaHero = ({toggle}) => {
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
            <H2Wrapper>
              <H2>Kontaktirajte nas</H2>
            </H2Wrapper>
            <H4>Ispunite kontakt formu ili nam pišite direktno na <br />
            <Link href="mailto:info@lan-digital.com">
            info@lan-digital.com{" "}
            </Link>
            </H4>
          </HWrapper>
          <FormaSection />
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
        </>
    )
}

export default FormaHero
