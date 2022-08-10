import React from "react";
import {
  KlijentiWrapper,
  KlijentiHeading,
  KlijentiInfo,
  KlijentiContainer,
  Klijent,
} from "./KlijentiStyles";

const Klijenti = () => {
  return (
    <KlijentiWrapper>
      <KlijentiHeading>Our Clients</KlijentiHeading>
      <KlijentiInfo>Some of our previous satisfied clients.</KlijentiInfo>
      <KlijentiContainer>
        <Klijent src={"/jano-logo.png"}></Klijent>
        <Klijent src={"/por-logo.jpeg"}></Klijent>
      </KlijentiContainer>
    </KlijentiWrapper>
  );
};

export default Klijenti;
