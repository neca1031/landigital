import { FaLightbulb, FaObjectGroup, FaPaperPlane } from "react-icons/fa";
import styled from "styled-components";

export const HeadingWrap = styled.div`
  max-width: 540px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.6em;
  margin-right: 1rem;
  margin-left: 1rem;
  padding: 3rem 0;
`;

export const UslugeHeroWrapper = styled.div`
  background-color: rgba(208, 216, 234, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UslugeHeading = styled.h2`
  color: #242a56;
  line-height: 1;
  font-size: 2.625rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-align: center;

  @media (max-width: 40em) {
    font-size: 2rem;
  }
  @media (max-width: 20em) {
    font-size: 1.6rem;
  }
`;

export const UslugeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.2rem;
  margin-bottom: 5rem;
  margin-left: 7rem;
  margin-right: 7rem;
  flex-wrap: wrap;

  @media (max-width: 60em) {
    grid-template-columns: 1fr;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const ArrowButton = styled.div`
  margin-right: auto;
  border: none;
  background-color: #fff;
  color:#242a56;
  margin-left: auto;
  

`;

export const Usluga = styled.div`
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2em 2.5em;
  box-shadow: 0px 10px 30px 0px rgba(208, 216, 234, 0.3);
  @media (max-width: 60em) {
    padding: 1.5em 2em;
  }
`;

export const UslugaList = styled.ul`
  background-color: #fff;
  margin: 0 auto;
  font-size: 1.25rem;
  padding: 0em 2.5em;
  color: #242a56;
  
`;

export const ListItem = styled.div`
  background-color: #fff;
  font-size: 1.25rem;
  margin: 1.5em 0em;
  display: flex;
  align-items: center;
  font-weight: 100;
  font-family: sans-serif;
  padding: 0.5em 1em;
  border-radius: 12px;
  background-color: #f1f5f9;
  color: #242a56;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  
`;



export const UslugaIcon = styled(FaObjectGroup)`
  font-size: 2.7rem;
  color: #6878d6;
  background-color: #fff;
`;

export const UslugaIcon2 = styled(FaLightbulb)`
  font-size: 2.7rem;
  color: #6878d6;
  background-color: #fff;
`;

export const UslugaIcon3 = styled(FaPaperPlane)`
  font-size: 2.7rem;
  color: #6878d6;
  background-color: #fff;
`;

export const UslugaHeading = styled.h4`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto:wght@100&display=swap");
  color: #242a56;
  font-size: 1.25rem;
  line-height: 1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-align: left;
`;

export const UslugaHeading2 = styled.h4`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto:wght@100&display=swap");
  color: #242a56;
  font-size: 1.25rem;
  line-height: 1;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const UslugaP = styled.p`
  margin-top: 0;
  color: #393a56;
  line-height: 1.6;
  text-align: left;
  font-family: "Open Sans", sans-serif;
`;

export const UslugaSubHeading = styled.p`
  margin-top: 0;
  color: #393a56;
  line-height: 1.6;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;
