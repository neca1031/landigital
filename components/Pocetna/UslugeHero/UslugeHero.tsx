import React from 'react'
import { UslugeHeroWrapper,
          UslugeContainer,
          UslugeHeading,
          Usluga,
          UslugaHeading,
          UslugaIcon,
          UslugaP,
          UslugaIcon2,
          UslugaIcon3
 } from './UslugeHeroStyles' 

const UslugeHero = () => {
    return (
        <UslugeHeroWrapper>
            <UslugeHeading>
            Čime se bavimo?
            </UslugeHeading>
            <UslugeContainer>
                <Usluga>
                    <UslugaIcon>

                    </UslugaIcon>
                    <UslugaHeading>
                    Izrada veb-sajtova
                    </UslugaHeading>
                    <UslugaP>
                    U današnje vreme teško je zamisliti uspešan biznis bez sajta.
Ukoliko još nemate sajt, mi ćemo ga napraviti za Vas
Koristeći pouzdane tehnologije, trudimo se da Vaš biznis postavimo u sam vrh online poslovanja.
                    </UslugaP>
                </Usluga>
                <Usluga>
                    <UslugaIcon2>

                    </UslugaIcon2>
                    <UslugaHeading>
                    Društvene mreže


                    </UslugaHeading>
                    <UslugaP>
                    Pored izrade veb-sajtova nudimo i usluge vođenja profila na društvenim mrežama koje su u digitalnom svetu jedan od najbitnijih faktora za rast biznisa.
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
    )
}

export default UslugeHero
