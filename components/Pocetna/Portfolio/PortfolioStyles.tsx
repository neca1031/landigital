import styled from 'styled-components';

export const PortfolioWrapper = styled.div`
  background-color: #fff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

export const PortfolioHeading = styled.h2`
color: #242a56;
 line-height: 1;
 font-size: 2.625rem;
 font-family: 'Poppins',sans-serif;
 font-weight: 700;
 padding: 3rem 0;
 padding-bottom: 0;
 margin-bottom: 1rem;
 text-align: center;

 @media (max-width: 40em) {
      
      font-size: 2rem;
      
  }
`;

export const PortfolioInfo = styled.p`
margin-top: 0;
color: #393a56;
line-height: 1.6;
text-align: center;
font-family: 'Open Sans', sans-serif;
margin-bottom: 5rem;
padding-left: 2rem;
 padding-right: 2rem;
`;

export const RadoviContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 5rem;
margin-bottom: 5rem;
   margin-left: 2rem;
   margin-right: 2rem;

   @media (max-width: 70em) {
    grid-gap: 3rem;
   }
   @media (max-width: 65em) {
    grid-gap: 1rem;
   }
   @media (max-width: 50em) {
      
      grid-template-columns: 1fr 1fr;
      grid-gap: 2.5rem;
  }
  @media (max-width: 40em) {
      
      
      grid-gap: 1rem;
  }
`;

export const Rad = styled.div`
display: flex;
align-items: center;
align-content: center;
flex-direction: column;
`;

export const RadIme = styled.p`
margin-top: 1rem;
color: #393a56;
line-height: 1.6;
text-align: center;
font-family: 'Open Sans', sans-serif;
`;

export const RadImg = styled.img`
max-height: 143px;
height: auto;
max-width: 100%;
 aspect-ratio: auto 300 / 143;
 border-image-repeat: stretch;
`;