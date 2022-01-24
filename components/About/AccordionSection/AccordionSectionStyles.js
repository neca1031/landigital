import { FaPlusCircle } from "react-icons/fa";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  margin: 0;
  @media (max-width: 75em) {
    grid-template-columns: 1fr;
  }
`;
export const PictureWrap = styled.div`
  padding: 0;
  margin: 0;
`;

export const PictureSpacer = styled.div`
  display: none;
  width: 100%;
  height: 100px;
  @media (max-width: 75em) {
    display: block;
  }
`;

export const Picture = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to bottom,
      rgba(36, 42, 86, 0.8),
      rgba(36, 42, 86, 0.8)
    ),
    url("/lan-3.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const AccordionContainer = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgba(208, 216, 234, 0.25);
`;

export const AccordionContainerPadding = styled.div`
  padding: 5rem;
  @media (max-width: 40em) {
    padding: 2rem;
  }
`;

export const SectionHeader = styled.h2`
  text-align: left;
  margin: 0;
  color: #242a56;
  line-height: 1;
  font-weight: 700;
  font-size: 2.625rem;
  font-family: "Poppins", sans-serif;
  @media (max-width: 40em) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const SectionInfo = styled.p`
  margin-bottom: 1.6em;
  color: #393a56;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
`;

export const AccordionWrap = styled.div`
  width: 100%;
`;

export const Accordion = styled.div`
  margin-right: 3.75rem;
  @media (max-width: 40em) {
    margin-right: 0;
    
  }
`;

export const AccordionItem = styled.div``;

export const AccordionHeadingElement = styled.div`
  padding: 0.9375rem 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right-width: 1px;
  border-left-width: 1px;
  border-bottom-width: 1px;
  border: 1px solid #d4d4d4;
  border-color: rgba(208, 216, 234, 0.25);

  &:nth-child(1) {
    border-top-width: 1px;
  }
  background-color: #ffffff;
`;

export const AccordionHeading = styled.p`
  margin: 0;
  display: inline-block;
  text-align: left;
  line-height: 1;
  font-size: 0.9375rem;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.expand === props.index ? "#6878d6" : "#393a56")};
`;

export const AccordionExpandIcon = styled.div`
  display: inline-block;
  text-align: right;
  width: 1.5em;
  line-height: 1;
  color: ${(props) => (props.expand === props.index ? "#6878d6" : "#393a56")};
  font-size: 1rem;
`;

export const AccordionInfoElement = styled.div`
  padding: ${(props) =>
    props.expand === props.index ? "0.9375rem 1.25rem" : "0 1.25rem"};
  max-height: ${(props) => (props.expand === props.index ? "1000px" : "0")};
  transition: padding 0.2s linear;
  overflow: hidden;
  background-color: #ffffff;
`;

export const AccordionInfo = styled.p`
  text-align: left;
  line-height: 1.6;
  color: #393a56;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 1.6em;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 40em) {
    font-size: 0.92rem;
  }
`;
