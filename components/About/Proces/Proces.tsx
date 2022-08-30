import React from "react";
import {
  ProcesContainer,
  ProcesHeading,
  KoraciWrap,
  Korak,
  KorakHeading,
  KorakInfo,
  KorakBroj,
} from "./ProcesStyles";

const Proces = () => {
  return (
    <ProcesContainer>
      <ProcesHeading>Our Creative Process</ProcesHeading>
      <KoraciWrap>
        <Korak>
          <KorakBroj>01.</KorakBroj>
          <KorakHeading>Contact</KorakHeading>
          <KorakInfo>You decided on the first step and contacted us.</KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>02.</KorakBroj>
          <KorakHeading>Defining</KorakHeading>
          <KorakInfo>
            Together we define the goal of our collaboration.
          </KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>03.</KorakBroj>
          <KorakHeading>Design</KorakHeading>
          <KorakInfo>
            Our team crafts the optimal design for your website.
          </KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>04.</KorakBroj>
          <KorakHeading>Development</KorakHeading>
          <KorakInfo>
            As soon as the design is finished, we start development on the
            wesite and make any adjustments on client request.
          </KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>05.</KorakBroj>
          <KorakHeading>Deployment</KorakHeading>
          <KorakInfo>
            Your website has been deployed to the world wide web! The digital
            world has received a new member.
          </KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>06.</KorakBroj>
          <KorakHeading>Parting</KorakHeading>
          <KorakInfo>
            Both sides got something. You received a new website, and we
            received a satisfied client.
          </KorakInfo>
        </Korak>
      </KoraciWrap>
    </ProcesContainer>
  );
};

export default Proces;
