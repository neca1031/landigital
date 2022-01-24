import type { NextPage } from 'next'
import React, {useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import KontaktHero from '../components/Kontakt/KontaktHero/KontaktHero';
import KontaktSection from '../components/Kontakt/KontaktSection/KontaktSection';
import Head from "next/head";


const Kontakt: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      < >
      <Head>
        <title>Lan Digital | Kontakt</title>
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
        <KontaktHero toggle={toggle}/>
        <KontaktSection />
        <Footer />
      </>
    )
  }
  
  export default Kontakt