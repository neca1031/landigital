import styled from "styled-components";
import React from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";

export const HeroWrapper = styled.div`
  width: 100%;
  min-height: 40vh;
  background-image: linear-gradient(
      to bottom,
      rgba(36, 42, 86, 0.8),
      rgba(36, 42, 86, 0.8)
    ),
    url("/lan2.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const AuthorImage = styled.img`
  height: 100px;
  width: 100px;
  vertical-align: middle;
  
`;

export const AuthorName = styled.h3`
  color: #242a56;
  line-height: 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`;

export const AuthorBio = styled.p`
  color: grey;
  line-height: 1;
  margin-top: 0.7rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  text-align: center;
`;

export const AuthorImageContainer = styled.div`
  position: absolute;
  top: -3.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 100%;
  
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10rem;
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
  line-height: 1;
  font-weight: 700;
  margin: 0;
  font-size: 1.25rem;
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

export const PostContainer = styled.div`
  background-color: rgba(208, 216, 234, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ThePost = styled.div`
  margin-top: -6rem;
  max-width: 1200px;
  border-radius: 20px;
  margin-right: 1rem;
  margin-left: 1rem;
  background-color: #fff;
  box-shadow: 0px 0px 40px 0px rgba(36, 42, 86, 0.15);
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  margin-bottom: 5rem;

  @media (max-width: 50em) {
    margin-top: -3rem;
    margin-right: 2.2rem;
    margin-left: 2.2rem;
  }
  @media (max-width: 40em) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const AuthorContainer = styled.div`
  max-width: 600px;
  border-radius: 20px;
  margin-right: 1rem;
  margin-left: 1rem;
  background-color: #fff;
  position: relative;
  box-shadow: 0px 0px 40px 0px rgba(36, 42, 86, 0.15);
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  margin-bottom: 5rem;

  @media (max-width: 50em) {
    margin-top: -3rem;
    margin-right: 2.2rem;
    margin-left: 2.2rem;
  }
  @media (max-width: 40em) {
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 2rem;
    padding-top: 3rem;
  }
`;

export const Span = styled.p`
  border-top-color: rgb(104, 120, 214);
  border-top-style: solid;
  border-top-width: 7px;
  width: 50px;
  font-size: 1rem;
  height: 7px;
  margin-bottom: 0;
  margin-top: 0;
`;

export const PostHeading = styled.h3`
  color: #242a56;
  line-height: 1;
  font-size: 1.75rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0;
  text-align: center;
  margin-bottom: 3rem;
  @media (max-width: 40em) {
    font-size: 1.25rem;
  }
`;

export const Heading3 = styled.h3`
  line-height: 1;
  font-size: 1.125rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Heading4 = styled.h4`
  line-height: 1;
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-bottom: 2rem;
`;

export const PostImage = styled.img`
  width: 100%;
  border-radius: 0.5em;
  max-height: 35rem;
  object-fit: cover;
  object-position: top;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const PostContent = styled.div`
  margin-bottom: 1.6em;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
  color: #393a56;
  text-align: left;
  overflow: hidden;
  @media (max-width: 40em) {
    font-size: 0.92rem;
  }
`;

export const BackButton = styled.button`
  text-decoration: none;
  font-size: 0.8rem;

  border-radius: 10px;
  background: #6878d6;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  color: white;
  padding: 0.5rem 1rem;
  transition: all 0.2s linear;
  cursor: pointer;
  width: 7rem;
  border: none;
  &:hover {
    background: #0274be;
  }
  @media (max-width: 40em) {
    margin-right: auto;
    margin-top: 0;
  }
`;

export const ButtonIcon = styled(FaArrowLeft)`
  margin-right: 0.5rem;

  font-size: 0.6rem;
  font-weight: 200;
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  @media (max-width: 40em) {
    flex-direction: column;
  }
`;

export const Datum = styled.p`
  line-height: 1.3;
  color: grey;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  @media (max-width: 40em) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

export const VremeCitanja = styled.p`
  line-height: 1;
  color: grey;
  font-size: 0.6rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
  text-transform: uppercase;
  @media (max-width: 40em) {
    font-size: 0.6rem;
    margin-top: 2rem;
  }
`;

export const Autor = styled.p`
  line-height: 1;
  color: grey;
  font-size: 0.7rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;
