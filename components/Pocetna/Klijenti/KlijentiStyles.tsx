import styled from "styled-components";

export const KlijentiWrapper = styled.div`
background-color: #fff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

export const KlijentiHeading = styled.h2`
color: #242a56;
 line-height: 1;
 font-size: 2.625rem;
 font-family: 'Poppins',sans-serif;
 font-weight: 700;
 padding: 1rem 0;
 padding-bottom: 0;
 margin-bottom: 1rem;
 text-align: center;

 @media (max-width: 40em) {
      
      font-size: 2rem;
      
  }
`;

export const KlijentiInfo = styled.p`
margin-top: 0;
color: #393a56;
line-height: 1.6;
text-align: center;
font-family: 'Open Sans', sans-serif;
margin-bottom: 5rem;
padding-left: 2rem;
 padding-right: 2rem;
`;

export const KlijentiContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-right: auto;
margin-left: auto;
width: 100%auto;
margin-bottom: 2rem;
padding: 0 2rem;
`;

export const Klijent = styled.img`
padding-right: 3rem;
padding-left: 3rem;
height:auto;
max-width: 100%;
aspect-ratio: auto 300 / 232;
vertical-align: middle;
`;