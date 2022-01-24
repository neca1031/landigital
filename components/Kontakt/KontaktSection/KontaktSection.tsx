import React from "react";
import {
  ContactForm,
  ContactFormContainer,
  KontaktContainer,
  KontaktWrap,
  StupiteKontaktHeading,
  StupiteKontaktSubHeading,
  StupiteKontaktWrap,
  FormButton,
  FormHeading,
  FormInfo,
  FormText,
  ButtonContainer,
  EmailWrap,
  EmailIcon,
  Email,
} from "./KontaktSectionStyles";
import Link from "next/link";

const KontaktSection = () => {
  return (
    <KontaktContainer>
      <KontaktWrap>
        <ContactFormContainer>
          <ContactForm>
            <FormText>
              <FormHeading>Želite da započnete saradnju sa nama?</FormHeading>
              <FormInfo>
                Potrebna Vam je izrada sajta ili vođenje društvenih mreža?
                <br />
                Na pravom ste mestu!
              </FormInfo>
            </FormText>
            <ButtonContainer>
              <Link href="/forma">
                <FormButton>kontakirajte nas</FormButton>
              </Link>
            </ButtonContainer>
          </ContactForm>
        </ContactFormContainer>
        <StupiteKontaktWrap>
          <StupiteKontaktHeading>Stupite u kontakt</StupiteKontaktHeading>
          <StupiteKontaktSubHeading>
            Pošaljite nam e-mail
          </StupiteKontaktSubHeading>
          <EmailWrap>
            <EmailIcon></EmailIcon>
            <Email href="mailto:info@lan-digital.com">
              info@lan-digital.com​
            </Email>
          </EmailWrap>
        </StupiteKontaktWrap>
      </KontaktWrap>
    </KontaktContainer>
  );
};

export default KontaktSection;
