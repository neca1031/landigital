import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const HeroWrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(36, 42, 86, 0.8),
      rgba(36, 42, 86, 0.8)
    ),
    url("/lan-5.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2rem;
  padding-left: 2rem;
`;

export const HWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  position: relative;
  max-width: 600px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  @media (max-width: 50em) {
    margin-bottom: 6rem;
  }
`;

export const H2Wrapper = styled.div`
  text-align: center;
  margin-bottom: 1.25em;

  position: relative;
`;

export const PWrapper = styled.div`
  text-align: center;
  margin-bottom: 1em;

  color: #d0d8ea;
  position: relative;
  word-wrap: break-word;
`;

export const P = styled.p`
  margin-bottom: 1.6em;
  text-align: center;

  font-size: 1rem;

  line-height: 1.6;
  @media (max-width: 60em) {
    text-align: center;

    @media (max-width: 40em) {
      font-size: 0.92rem;
    }
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


export const H2 = styled.h1`
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  margin: 0;
  font-size: 3rem;
  @media (max-width: 60em) {
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: 2.5rem;
  }

  @media (max-width: 20em) {
    font-size: 1.75rem;
  }
`;

export const H4 = styled.h4`
  text-align: center;
  color: #fff;
  line-height: 1.2;
  font-weight: 700;
  margin: 0;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 40em) {
    font-size: 1.125rem;
  }
  @media (max-width: 20em) {
    font-size: 1.05rem;
  }
`;

export const Header = styled.div`
  display: grid;

  align-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1.25rem 2rem;
  grid-template-columns: auto auto;
  align-items: center;
  grid-column-gap: 20px;
  background: transparent;
  max-width: 1240px;
  min-height: 70px;
`;

export const NavLogo = styled.img`
  margin-right: auto;
  max-width: 180px;
  height: auto;
  aspect-ratio: 1080/1080;
  @media (max-width: 60em) {
    max-width: 120px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 60em) {
    display: none;
  }
`;

export const Mobile = styled(FaBars)`
  z-index: 20;
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  display: none;
  color: #fff;
  background: #6878d6;
  border-radius: 6px;

  padding: 0.5rem;

  @media (max-width: 60em) {
    display: flex;
    justify-content: space-around;
    margin-left: auto;
    flex-flow: column nowrap;
  }
`;
export const NavItem = styled.a`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 1rem 1em;
  display: inline-block;
  transition: all 0.2s linear;
  color: #d0d8ea;
  transition: all 0.2s ease-in;
  font-size: 100%;
  font-weight: 100;
  &:hover {
    color: white;
  }
  @media (max-width: 898px) {
    padding: 2.2rem;
  }
`;

export const NavButton = styled.button`
  margin-right: 0;
  margin-left: 1.5rem;
  border-radius: 42px;
  background: #6878d6;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  border-style: solid;
  border-width: 0;
  border-color: #aeaeb1;
  color: white;
  font-size: 0.9375rem;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.9rem 1.6rem;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #214973;
  }
  @media (max-width: 60em) {
    margin-right: 0;
  }
`;