import { FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

export const KontaktContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6.25rem 0;
  padding-bottom: 4rem;
  background-image: linear-gradient(
    180deg,
    rgba(208, 216, 234, 0.25) 0%,
    #ffffff 100%
  );
`;

export const KontaktWrap = styled.div`
  display: flex;
  margin-left: 7.5rem;
  margin-right: 7.5rem;
  flex-wrap: wrap;
  @media (max-width: 40em) {
    margin: 0 1rem;
  }
`;

export const ContactFormContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  
`;

export const ContactForm = styled.div`
  max-width: 1000px;
  margin-bottom: 3rem;
  display: flex;
  padding: 2rem;
  padding-top: 0;
  border-radius: 6px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
export const FormText = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-direction: column;
  text-align: left;

  @media (max-width: 60em) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;
export const FormHeading = styled.h3`
  color: #6878d6;
  line-height: 1;
  font-family: 'Poppins',sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  text-align: left;
  margin: 0;
  margin-bottom: 1.4rem;
  @media (max-width: 60em) {
    text-align: center;
  }
`;

export const FormInfo = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  color: #393a56;
  line-height: 1.6;
  font-family: sans-serif;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 2em;
  @media (max-width: 60em) {
    text-align: center;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormButton = styled.button`
  color: #fff;
  font-size: 0.9375rem;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 42px;
  cursor: pointer;
  padding: 1rem 2rem;
  font-weight: 400;
  background-color: #6878d6;
  transition: all 0.3s;
  display: inline-block;
  border: none;

  &:hover {
    background-color: #0274be;
  }
`;

export const StupiteKontaktWrap = styled.div`
  margin-left: 6.25rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 60em) {
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
  }
`;

export const StupiteKontaktHeading = styled.h3`
  line-height: 1;
  color: #242a56;
  font-size: 1.75rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const StupiteKontaktSubHeading = styled.h6`
  line-height: 1;
  color: #242a56;
  font-size: 0.9375rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const EmailWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
  margin: 0;
`;

export const EmailIcon = styled(FaEnvelope)`
  color: #566892;
  font-size: 1rem;
  font-weight: 900;
`;

export const Email = styled.a`
  color: #566892;
  padding-left: 10px;
  cursor: pointer;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  text-decoration: none;
`;
