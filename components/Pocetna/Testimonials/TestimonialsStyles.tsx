import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
background-color: rgba(208, 216, 234, 0.25);
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`;

export const TestimonialsHeading = styled.h3`
color: #242a56;
 line-height: 1;
 font-size: 1.75rem;
 font-family: 'Poppins',sans-serif;
 font-weight: 700;
 padding: 3rem 0;
 padding-bottom: 0;
 margin-bottom: 0.5rem;
 text-align: center;
 padding-left: 2rem;
 padding-right: 2rem;

 @media (max-width: 40em) {
      
      font-size: 1.5rem;
      
  }
  @media (max-width: 20em) {
      
      font-size: 1.25rem;
      
  }
`;

export const Testimonial = styled.p`
 padding-left: 2rem;
 padding-right: 2rem;
 text-align: center;
 font-size: 1.15rem;
 line-height: 1.6;
 color: #393a56;
 max-width: 750px;
 margin-right: auto;
 margin-left: auto;
 @media (max-width: 20em) {
      
      font-size: 0.9375rem;
      
  }
`;

export const TestimonialIcon = styled.img`
 width: 60px;
 height: 60px;
 border-radius: 50%;
 aspect-ratio: auto 200/200;
`;

export const TestimonialName = styled.p`
line-height: 1.5;
font-weight: bold;
text-align: center;
color: #393a56;
font-size: 1rem;
font-family: 'Open Sans', sans-serif;
margin-bottom: 0;

`;
export const TestimonialTitle = styled.p`
 text-transform: uppercase;
 line-height: 2em;
 color: #566892;
 font-size: 13px;
 margin-top: 0;
 margin-bottom: 3rem;
`;