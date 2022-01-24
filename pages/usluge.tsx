import type { NextPage } from 'next'
import React, {useState} from 'react';
import UslugeHero from "../components/Usluge/UslugeHero/UslugeHero";
import Sidebar from "../components/Sidebar/Sidebar";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Klijenti from '../components/Pocetna/Klijenti/Klijenti';
import Testimonials from '../components/Pocetna/Testimonials/Testimonials';
import UslugeKontakt from '../components/Usluge/UslugeKontakt/UslugeKontakt';
import UslugeLista from '../components/Usluge/UslugeLista/UslugeLista';


const Kontakt: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      < >
      <Head>
        <title>Lan Digital | Usluge</title>
        <meta
          name="description"
          content="LAN Digital je tu da Vašem biznisu pruži digitalni temelj na kom može da raste."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <UslugeHero toggle = { toggle }/>
        <UslugeLista />
        <Klijenti />
        <Testimonials />
        <UslugeKontakt />
        <Footer />
      </>
    )
  }
  
  export default Kontakt