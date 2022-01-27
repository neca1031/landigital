import styled from "styled-components";
import "animate.css";
import { FaBars } from "react-icons/fa";

export const HeroWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(36, 42, 86, 0.8),
      rgba(36, 42, 86, 0.8)
    ),
    url("/IMG_7586.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  width: 35%;
  position: relative;
  display: flex;

  @media (max-width: 72em) {
    width: 45%;
  }
  @media (max-width: 60em) {
    align-content: center;
    justify-content: center;
    display: flex;
    width: 100%;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2rem;
  padding-left: 2rem;
`;

export const HWrapper = styled.div`
  margin: 2rem 0px 0px 1.9rem;
  display: flex;
  position: relative;
  width: 100%;
  align-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 60em) {
    margin: 2rem 0px 0px 0px;
    align-content: center;
    justify-content: center;
    display: flex;
    width: 100%;
  }
`;

export const H2Wrapper = styled.div`
  text-align: left;
  margin-bottom: 1.25em;
  width: 100%;
  position: relative;
  animation: fadeInUp;
  animation-duration: 1.2s;
`;

export const PWrapper = styled.div`
  text-align: left;
  margin-bottom: 2em;
  width: 100%;
  color: #d0d8ea;
  position: relative;
  animation: fadeInUp;
  animation-duration: 1.2s;
  word-wrap: break-word;
`;

export const P = styled.p`
  margin-bottom: 1.6em;
  text-align: left;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 1.6;
  @media (max-width: 60em) {
    text-align: center;
  }
  @media (max-width: 20em) {
    text-align: center;
    margin-bottom: 0;
    font-size: 0.9rem;
  }
`;

export const H2 = styled.h1`
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  margin: 0;
  font-size: 3rem;
  line-height: 1.2;
  @media (max-width: 60em) {
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: 2rem;
  }
`;

export const H4 = styled.h4`
  color: #d0d8ea;
  line-height: 1;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;
export const HButton = styled.button`
  border: none;
  color: #fff;
  border-radius: 42px;
  font-weight: 300;
  background: #6878d6;
  font-size: 0.9375rem;
  line-height: 1;
  margin: 2rem 0px 0px 0px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  text-align: center;
  display: inline-block;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #214973;
  }
  @media (max-width: 60em) {
    margin-bottom: 2rem;
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
  cursor: pointer;
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
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  display: none;
  color: #fff;
  background: #6878d6;
  border-radius: 2px;

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
  position: relative;
  font-family: sans-serif;
  color: #d0d8ea;
  transition: all 0.2s ease-in;
  font-size: 100%;
  margin-right: 1rem;
  font-weight: 100;
  &:after {
    content: '';
    position: absolute;
    background-color: #fff;
    height: 3px;
    left: 0;
    width: 0;
    bottom: -0.1em;
    transition: 0.3s;
  }
  &:hover {
    color: white;
  }
  &:hover:after {
    width: 100%;
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
  border-color: #6878d6;
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
