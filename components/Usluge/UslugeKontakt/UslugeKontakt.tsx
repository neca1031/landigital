import React from 'react'
import { ContactForm, FormText, FormHeading, FormInfo, FormButton, ButtonContainer, ContactFormContainer
} from './UslugeKontaktStyles';
import Link from 'next/link'

const UslugeKontakt = () => {
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
                    <Link href='/forma'>
                <FormButton>
                    kontakirajte nas
                </FormButton>
                </Link>
                </ButtonContainer>
            </ContactForm>
            </ContactFormContainer>
    )
}

export default UslugeKontakt
