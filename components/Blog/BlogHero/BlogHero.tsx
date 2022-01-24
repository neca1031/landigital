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
} from "./BlogHeroStyles";
import Link from "next/link";

const BlogHero = ({ toggle }: { toggle: any }) => {
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
          <Link href="/forma" passHref>
            <NavButton>Pošaljite upit</NavButton>
          </Link>
        </NavItems>
      </Header>
      <HeroContainer>
        <HeroContent>
          <HWrapper>
            <H2Wrapper>
              <H2>Dobrodošli na naš Blog</H2>
            </H2Wrapper>

            <PWrapper>
              <P>
                U našim objavama možete pročitati o relevantnim i zanimljivim
                temama iz sveta digitalnog marketinga
              </P>
            </PWrapper>
          </HWrapper>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default BlogHero;
