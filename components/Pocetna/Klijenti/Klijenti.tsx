import React from 'react'
import { KlijentiWrapper,
         KlijentiHeading,
         KlijentiInfo,
         KlijentiContainer,
         Klijent
} from './KlijentiStyles'

const Klijenti = () => {
    return (
        <KlijentiWrapper>
            <KlijentiHeading>
            Naši klijenti
            </KlijentiHeading>
            <KlijentiInfo>
            Neki od naših prethodnih klijenata sa kojima smo imali uspešnu saradnju.
            </KlijentiInfo>
            <KlijentiContainer>
                <Klijent src={'/jano-logo.png'}>

                </Klijent>
                <Klijent src={'/por-logo.jpeg'}>
                    
                </Klijent>
            </KlijentiContainer>
        </KlijentiWrapper>
    )
}

export default Klijenti
