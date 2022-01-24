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
    LinkMail
  } from "./FormaHeroStyles";
  import Link from 'next/link'

const FormaHero = ({toggle} : {toggle:any}) => {
    return (
        <>
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
              <H2>Kontaktirajte nas</H2>
            </H2Wrapper>
            <H4>Ispunite kontakt formu ili nam pišite direktno na <br />
            <LinkMail href="mailto:info@lan-digital.com">
            info@lan-digital.com{" "}
            </LinkMail>
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
