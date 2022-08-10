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
                You need to build a website or social media managment?
                <br />
                You are at the right place!
              </FormInfo>
            </FormText>
            <ButtonContainer>
              <Link href="/forma">
                <FormButton>contact us</FormButton>
              </Link>
            </ButtonContainer>
          </ContactForm>
        </ContactFormContainer>
        <StupiteKontaktWrap>
          <StupiteKontaktHeading>Get in Touch</StupiteKontaktHeading>
          <StupiteKontaktSubHeading>Send us an email</StupiteKontaktSubHeading>
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
