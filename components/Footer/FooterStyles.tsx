import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  background-color: #242a56;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 2rem 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const FooterLogo = styled.img`
  margin-right: auto;
  max-width: 10em;
  height: auto;
  aspect-ratio: 1080/1080;
  
`;
export const Contact = styled.p`
  padding-left: 1.5rem;
  color: #fff;
  line-height: 1.6;
  font-size: 1rem;
`;

export const ContactSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: auto;
  @media (max-width: 60em) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
  }
`;

export const SocialsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-left: auto;
  padding: 0 3rem;

  @media (max-width: 60em) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #6878d6;
  transition: all 0.2s linear;
  background-color: transparent;
  cursor: auto;
  &:hover {
    color: #0274be;
  }
`;

export const SocialIconLink = styled.a`
  color: #d0d8ea;
  font-size: 2rem;
  transition: all 0.2s linear;
  &:hover {
    color: #fff;
  }
`;

export const Copyright = styled.p`
  color: #fff;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 0;
  padding: 0 2rem;
  text-align: center;
`;
