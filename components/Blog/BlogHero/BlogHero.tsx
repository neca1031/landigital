import React from 'react'
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
  } from "./BlogHeroStyles";

const BlogHero = ({toggle}) => {
    return (
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
              <H2>Dobrodosli na nas Blog</H2>
            </H2Wrapper>
            {/* <H4>Iz prve ruke</H4> */}
            <PWrapper>
              <P>U našim objavama možete pročitati o relevantnim i zanimljivim temama iz sveta digitalnog marketinga</P>
            </PWrapper>
          </HWrapper>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
    )
}

export default BlogHero
