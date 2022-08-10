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
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <ContactSection>
          <FooterLogo src={"/lan-logo1.png"}></FooterLogo>
          <Contact>
            Got an idea and need help? <br />
            Contact Us <br />
            <Link href="mailto:info@lan-digital.com">
              info@lan-digital.com{" "}
            </Link>
          </Contact>
        </ContactSection>
        <SocialsSection>
          <SocialIconLink
            href="https://www.instagram.com/lan_digital_/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink
            href="https://twitter.com/Lan_Digital_"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.facebook.com/profile.php?id=100071752245661"
            target="_blank"
            aria-label="Facebook"
          >
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
