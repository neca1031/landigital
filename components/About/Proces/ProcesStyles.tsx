import styled from "styled-components";

export const ProcesContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(208, 216, 234, 0.25) 0%, rgb(255, 255, 255) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProcesHeading = styled.h2`
  color: #242a56;
  line-height: 1;
  font-size: 2.625rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;

  @media (max-width: 40em) {
    font-size: 1.5rem;
  }
`;

export const KoraciWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1200px;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  grid-gap: 0rem;
  margin-bottom: 5rem;
  @media (max-width: 60em) {
  }
  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    margin-right: 2.2rem;
    margin-left: 2.2rem;
  }
`;

export const Korak = styled.div`
  padding: 2.5rem;

  @media (max-width: 50em) {
    padding: 1.25rem;
  }
`;

export const KorakBroj = styled.h6`
  line-height: 1;
  color: rgba(36, 42, 86, 0.06274509803921569);
  font-size: 100px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-bottom: -54px;
  margin-top: 0;
`;

export const KorakHeading = styled.h4`
  line-height: 1;
  color: #242a56;
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;

  @media (max-width: 40em) {
    font-size: 1.125rem;
  }
`;

export const KorakInfo = styled.p`
  margin-bottom: 1.6em;
  line-height: 1.6;
  color: #393a56;
  @media (max-width: 40em) {
    font-size: 0.92rem;
  }
`;
