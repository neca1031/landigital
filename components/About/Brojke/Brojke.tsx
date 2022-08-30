import React from "react";
import {
  Broj,
  BrojInfo,
  Brojka,
  BrojkeContainer,
  BrojkeWrap,
  NaseBrojkeHeading,
} from "./BrojkeStyles";

const Brojke = () => {
  return (
    <BrojkeContainer>
      <BrojkeWrap>
        <Brojka>
          <NaseBrojkeHeading>Our Numbers</NaseBrojkeHeading>
        </Brojka>
        <Brojka>
          <Broj>2</Broj>
          <BrojInfo>Zadovoljnih klijenata</BrojInfo>
        </Brojka>
        <Brojka>
          <Broj>3</Broj>
          <BrojInfo>Završenih projekata</BrojInfo>
        </Brojka>
        <Brojka>
          <Broj>600kg</Broj>
          <BrojInfo>Koliko sva trojica dižemo na benču</BrojInfo>
        </Brojka>
        <Brojka>
          <Broj>12K+</Broj>
          <BrojInfo>Linija koda</BrojInfo>
        </Brojka>
      </BrojkeWrap>
    </BrojkeContainer>
  );
};

export default Brojke;
