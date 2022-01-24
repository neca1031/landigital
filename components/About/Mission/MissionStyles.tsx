import styled from "styled-components";
import 'animate.css';

export const MissionContainer = styled.div`
  background-color: rgba(208, 216, 234, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MissionWrap = styled.div`
  margin-top: -6rem;
  max-width: 1200px;
  margin-right: 1rem;
  margin-left: 1rem;
  grid-gap: 2rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 60em) {
    grid-gap: 1rem;
  }
  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    margin-top: -3rem;
    margin-right: 2.2rem;
    margin-left: 2.2rem;
  }
`;

export const TheMission = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 40px 0px rgba(36, 42, 86, 0.15);
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  &:nth-child(1) {
    animation: fadeInUp;
  animation-duration: 1.3s;
  }
  &:nth-child(2) {
    animation: fadeInUp;
  animation-duration: 1.3s;
  animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation: fadeInUp;
  animation-duration: 1.3s;
  animation-delay: 0.2s;
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

export const MissionHeading = styled.h3`
  color: #242a56;
  line-height: 1;
  font-size: 1.75rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;

  @media (max-width: 40em) {
    font-size: 1.25rem;
  }
`;

export const MissionInfo = styled.div`
  margin-bottom: 1.6em;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
  color: #393a56;
  text-align: left;
  @media (max-width: 40em) {
    font-size: 0.92rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 0;
  padding-left: 1.2rem;
  margin-bottom: 0;
`;

export const ListItem = styled.li`
  ::before {
    content: "";
    border-color: transparent #393a56;
    border-style: solid;
    border-width: 0.3em 0 0.3em 0.4em;
    display: block;
    height: 0;
    width: 0;
    left: -1em;
    top: 1em;
    position: relative;
  }
`;
