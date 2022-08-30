import React from "react";
import {
  UslugeHeroWrapper,
  UslugeContainer,
  UslugeHeading,
  Usluga,
  UslugaHeading,
  UslugaIcon,
  UslugaP,
  UslugaIcon2,
  UslugaIcon3,
} from "./UslugeHeroStyles";

const UslugeHero = () => {
  return (
    <UslugeHeroWrapper>
      <UslugeHeading>What do we do?</UslugeHeading>
      <UslugeContainer>
        <Usluga>
          <UslugaIcon></UslugaIcon>
          <UslugaHeading>Web Development</UslugaHeading>
          <UslugaP>
            Nowadays, it is difficult to imagine a successful business without a
            website. If you don&apos;t have a website yet, we will build one for
            you. Using reliable technologies, we strive to place your business
            at the very top of the web.
          </UslugaP>
        </Usluga>
        <Usluga>
          <UslugaIcon2></UslugaIcon2>
          <UslugaHeading>Social Media</UslugaHeading>
          <UslugaP>
            In addition to building websites, we offer social media profile
            management services. A good social media presence is one of the most
            important factors for business growth and expansion in the digital
            world.
          </UslugaP>
        </Usluga>
        {/* <Usluga>
                    <UslugaIcon3>

                    </UslugaIcon3>
                    <UslugaHeading>
                    Marketing
                    </UslugaHeading>
                    <UslugaP>
                    Kreiranje marketinških kampanja na društvenim mrežama ili na samom sajtu ume da predstavlja težak posao. Mi se trudimo da taj posao olakšamo i predstavimo Vaš biznis u najboljem svetlu.
                    </UslugaP>
                </Usluga> */}
      </UslugeContainer>
    </UslugeHeroWrapper>
  );
};

export default UslugeHero;
