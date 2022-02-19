import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

export const BlogSectionContainer = styled.div`
  background-color: rgba(208, 216, 234, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ObjaveHeading = styled.h2`
  color: #242a56;
  line-height: 1;
  font-size: 2.625rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  padding: 3rem 0;
  text-align: center;

  @media (max-width: 40em) {
    font-size: 2rem;
  }
  @media (max-width: 20em) {
    font-size: 1.6rem;
  }
`;

export const ObjaveContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.2rem;
  margin-bottom: 5rem;
  margin-left: 7rem;
  margin-right: 7rem;
  flex-wrap: wrap;

  max-width: 1500px;

  @media (max-width: 65em) {
    grid-template-columns: 1fr;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Objava = styled.div`
  background-color: #fff;

  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 2em 2.5em;

  box-shadow: 0px 10px 30px 0px rgba(208, 216, 234, 0.3);
  @media (max-width: 60em) {
    padding: 1.5em 2em;
  }
`;

export const HorizontalStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 2rem;
`;

export const ObjavaHeading = styled.h4`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto:wght@100&display=swap");
  color: #242a56;
  font-size: 1.25rem;
  line-height: 1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ObjavaP = styled.p`
  margin-top: 0;
  color: #393a56;
  line-height: 1.6;
  text-align: left;
  font-family: "Open Sans", sans-serif;
`;

export const AuthorName = styled.p`
  margin-top: 0.4rem;
  color: gray;
  line-height: 1.6;
  text-align: left;
  font-family: "Open Sans", sans-serif;
  display: inline;
  vertical-align: middle;
`;

export const ObjavaButton = styled.button`
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  border-radius: 42px;
  background: #6878d6;
  font-family: "Open Sans", sans-serif;
  font-weight: 200;
  border-style: solid;
  border-width: 0;
  border-color: #aeaeb1;
  color: white;
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: 1px;
  padding: 0.7rem 1.4rem;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #0274be;
    transform: translateY(-0.25rem);
  }
`;

export const Slika = styled.img`
  width: 100%;
  border-radius: 0.5em;
  max-height: 20rem;
  object-fit: cover;
  cursor: pointer;
  object-position: top;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const AuthorSlika = styled.img`
  height: 40px;
  width: 40px;
  vertical-align: middle;
`;

export const ObjavaVreme = styled.p`
  line-height: 1.6;
  color: grey;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  display: inline;
`;

export const ButtonIcon = styled(FaArrowRight)`
  font-size: 0.9rem;
  font-weight: 200;
`;
