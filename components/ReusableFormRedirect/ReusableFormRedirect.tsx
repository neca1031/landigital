import React from 'react';
import { ContactForm, FormText, FormHeading, FormInfo, FormButton, ButtonContainer, ContactFormContainer
 } from './ReusableFormRedirectStyles';

const ReusableFormRedirect = () => {
    return (
        <ContactFormContainer>
        <ContactForm>
                <FormText>
                <FormHeading>
                Želite da započnete saradnju sa nama?
                </FormHeading>
                <FormInfo>
                Potrebna Vam je izrada sajta ili vođenje društvenih mreža?<br />
Na pravom ste mestu!
                </FormInfo>
                </FormText>
                <ButtonContainer>
                <FormButton>
                    kontakirajte nas
                </FormButton>
                </ButtonContainer>
            </ContactForm>
            </ContactFormContainer>
    )
}

export default ReusableFormRedirect
