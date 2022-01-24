import styled from "styled-components";

export const BrojkeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6.25rem 0;
`;

export const BrojkeWrap = styled.div`
  max-width: 1200px;
  display: grid;
  margin-right: 2rem;
  margin-left: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  @media (max-width: 70em) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin-right: auto;
    margin-left: 2rem;
  }
`;

export const NaseBrojkeHeading = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #242a56;
  line-height: 1;
  @media (max-width: 70em) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 50em) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const Brojka = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-height: 105px;
  @media (max-width: 70em) {
    &:nth-child(1) {
      grid-column: span 2;
    }
  }
  @media (max-width: 50em) {
    &:nth-child(1) {
      grid-column: span 1;
    }
  }
`;

export const Broj = styled.p`
  font-weight: 400;
  padding: 0;
  margin: 0;
  line-height: 1;
  color: #6878d6;
  font-size: 45px;
  font-family: "Open Sans", sans-serif;
`;
export const BrojInfo = styled.h6`
  line-height: 1;
  color: #242a56;
  font-size: 0.9375rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 1rem;
`;
