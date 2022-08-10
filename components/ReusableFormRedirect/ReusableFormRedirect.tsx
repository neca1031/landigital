import React from "react";
import {
  ContactForm,
  FormText,
  FormHeading,
  FormInfo,
  FormButton,
  ButtonContainer,
  ContactFormContainer,
} from "./ReusableFormRedirectStyles";
import Link from "next/link";

const ReusableFormRedirect = () => {
  return (
    <ContactFormContainer>
      <ContactForm>
        <FormText>
          <FormHeading>Want to collaborate with us?</FormHeading>
          <FormInfo>
            Need to build a website or run social media?
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
  );
};

export default ReusableFormRedirect;
