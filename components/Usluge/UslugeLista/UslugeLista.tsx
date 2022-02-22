import React, { useState } from "react";
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
  ArrowButton,
  HeadingWrap,
  UslugaSubHeading,
  UslugaList,
  UslugaHeading2,
  ListItem,
} from "./UslugeListaStyles";

const UslugeLista = () => {
  return (
    <UslugeHeroWrapper>
      <HeadingWrap>
        <UslugeHeading>Kako Vam možemo pomoći?</UslugeHeading>
        <UslugaSubHeading>
          Izrada veb-sajta, vođenje društvenih mreža ili oba?
          <br /> Šta god da tražite na pravom ste mestu.
        </UslugaSubHeading>
      </HeadingWrap>
      <UslugeContainer>
        <Usluga>
          <UslugaIcon></UslugaIcon>
          <UslugaHeading>Izrada veb-sajtova</UslugaHeading>
          <UslugaP>
            U današnje vreme teško je zamisliti uspešan biznis bez sajta.
            Ukoliko još nemate sajt, mi ćemo ga napraviti za Vas Koristeći
            pouzdane tehnologije, trudimo se da Vaš biznis postavimo u sam vrh
            online poslovanja. Kvalitetan sajt Vam daje potpunu kontrolu nad
            Vašim brendom i predstavlja najbolju biznis investiciju koju možete
            da napravite.
          </UslugaP>
          <UslugaHeading2>Usluge koje nudimo</UslugaHeading2>
          <ArrowButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "3rem",
                height: "3rem",
                
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </ArrowButton>
          <UslugaList>
            <ListItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5em",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              Idejno rešenje
            </ListItem>
            <ListItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5em",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Dizajn
            </ListItem>
            <ListItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5em",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>{" "}
              Web development
            </ListItem>
          </UslugaList>
        </Usluga>
        <Usluga>
          <UslugaIcon2></UslugaIcon2>
          <UslugaHeading>Društvene mreže</UslugaHeading>
          <UslugaP>
            Pored izrade veb-sajtova nudimo i usluge vođenja profila na
            društvenim mrežama koje su u digitalnom svetu jedan od najbitnijih
            faktora za rast biznisa. Kreiranje marketinških kampanja na
            društvenim mrežama ume da predstavlja težak posao. Mi se trudimo da
            taj posao olakšamo i predstavimo Vaš biznis u najboljem svetlu.
          </UslugaP>
          <UslugaHeading2>Usluge koje nudimo</UslugaHeading2>
          <ArrowButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "3rem",
                height: "3rem",
                
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </ArrowButton>
          <UslugaList>
            <ListItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5em",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Upravljanje profilima
            </ListItem>
            <ListItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5em",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Stvaranje sadržaja
            </ListItem>

            <ListItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5em",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Upravljanje zajednicom
            </ListItem>
            <ListItem>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5em",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Izveštavanje i analitika
            </ListItem>
          </UslugaList>
        </Usluga>
      </UslugeContainer>
    </UslugeHeroWrapper>
  );
};

export default UslugeLista;
