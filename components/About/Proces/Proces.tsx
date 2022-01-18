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
      <ProcesHeading>Naš kreativni proces</ProcesHeading>
      <KoraciWrap>
        <Korak>
          <KorakBroj>01.</KorakBroj>
          <KorakHeading>Kontaktiranje</KorakHeading>
          <KorakInfo>
            Odlučili ste se na pr(a)vi korak i kontaktirali nas.
          </KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>02.</KorakBroj>
          <KorakHeading>Definisanje</KorakHeading>
          <KorakInfo>Zajedničkim snagama definišemo cilj saradnje.</KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>03.</KorakBroj>
          <KorakHeading>Dizajn</KorakHeading>
          <KorakInfo>Naš tim dizajnira najbolje rešenje za vaš sajt.</KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>04.</KorakBroj>
          <KorakHeading>Razvoj</KorakHeading>
          <KorakInfo>
            Kada je dizajn gotov, otpočinjemo sa izradom sajta i zajedno pravimo
            sve potrebne izmene.
          </KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>05.</KorakBroj>
          <KorakHeading>Objavljivanje</KorakHeading>
          <KorakInfo>
            Vaš sajt je ugledao svetlost dana! Digitalni svet je postao bogatiji
            za još jednog člana.
          </KorakInfo>
        </Korak>
        <Korak>
          <KorakBroj>06.</KorakBroj>
          <KorakHeading>Rastanak</KorakHeading>
          <KorakInfo>
            Obe strane su dobile nešto. Vi novi sajt, a mi zadovoljnog klijenta.
          </KorakInfo>
        </Korak>
      </KoraciWrap>
    </ProcesContainer>
  );
};

export default Proces;
