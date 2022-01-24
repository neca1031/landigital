import styled from "styled-components";

export const TeamWrapper = styled.div`
 background-color: #fff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

export const TeamHeading = styled.h2`
 color: #242a56;
 line-height: 1;
 font-size: 2.625rem;
 font-family: 'Poppins',sans-serif;
 font-weight: 700;
 padding: 3rem 0;
 padding-bottom: 0;
 padding-left: 3rem;
 padding-right: 3rem;
 margin-bottom: 1rem;
 text-align: center;

 @media (max-width: 40em) {
      
      font-size: 2rem;
      
  }
`;

export const TeamInfo = styled.p`
 margin-top: 0;
color: #393a56;
line-height: 1.6;
text-align: center;
font-family: 'Open Sans', sans-serif;
margin-bottom: 5rem;
padding-left: 3rem;
 padding-right: 3rem;
 
 
`;

export const TeamContainer = styled.div`
 max-width: 1200px;
 margin-left: auto;
 margin-right: auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-gap: 2rem;
 padding-bottom: 3rem;
 margin-bottom: 3rem;
 margin-left: 2rem;
   margin-right: 2rem;
 @media (max-width: 60em) {
      
      grid-template-columns: 1fr;
      margin-left: 3rem;
   margin-right: 3rem;
      
  }
`;

export const Employee = styled.div`
 display: flex;
align-items: center;
align-content: center;
flex-direction: column;
`;

export const EmployeeImage = styled.img`
 height: auto;
 max-width: 100%;
 aspect-ratio: auto 2560 / 1707; 
`;

export const EmployeeName = styled.h4`
color: #242a56;
font-size: 1.25rem;
line-height: 1;
font-family: 'Poppins', sans-serif;
text-align: center;
font-weight: 700;
margin-bottom: 0;
`;

export const Occupation = styled.p`
 font-size: 1rem;
 font-family: 'Open Sans', sans-serif;
 line-height: 1.6;
 color: #393a56;
 margin-top: 0.7rem;
`;
