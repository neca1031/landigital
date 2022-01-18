import React from "react";
import {
  Contact,
  ContactSection,
  Link,
  Copyright,
  FooterContainer,
  FooterLogo,
  FooterWrapper,
  SocialIconLink,
  SocialsSection,
} from "./FooterStyles";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <ContactSection>
          <FooterLogo>
            <Image
              src="/lan-logo1.png"
              width="180px"
              height="180px"
              layout="responsive"
            />
          </FooterLogo>
          <Contact>
            Imate ideju i treba Vam pomoć? <br />
            Kontaktirajte nas <br />
            <Link href="mailto:info@lan-digital.com">
              info@lan-digital.com{" "}
            </Link>
          </Contact>
        </ContactSection>
        <SocialsSection>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
        </SocialsSection>
      </FooterContainer>
      <Copyright>
        Made with <s>Sweat,Tears and Blood</s> Love at ©Lan Digital HQ in 2021
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
