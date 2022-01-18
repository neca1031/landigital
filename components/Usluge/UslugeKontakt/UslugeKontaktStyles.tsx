import styled from "styled-components";

export const ContactFormContainer = styled.div`
 display: flex;
 align-content: center;
 justify-content: center;
 background-image: linear-gradient(180deg, rgba(208, 216, 234, 0.22) 0%, #FFFFFF 100%);
`

export const ContactForm = styled.div`
 max-width: 1000px;
 margin-left: 3rem;
 margin-right: 3rem;
 margin-bottom: 3rem;
 margin-top: 3rem;
 display: flex;
 padding: 2rem;
 border-radius: 6px;
 flex-wrap: wrap;
 align-content: flex-start;
 justify-content: center;
 box-shadow: 0px 5px 40px -10px rgba(86, 104, 146, 0.33);
`;
export const FormText = styled.div`
 display: flex;
 justify-content: center;
 align-content: flex-start;
 flex-direction: column;
 text-align: left;
 margin-right: 5rem;
 
 @media (max-width: 60em) {
  margin-right: 0;
  margin-bottom: 2rem;
 }
 
`
export const FormHeading = styled.h3`
 color: #6878D6;
 line-height: 1;
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
 font-size: 1rem;
 text-align: left;
 margin-bottom: 1em;
 @media (max-width: 60em) {
  text-align: center;
 }

`;
export const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

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

`