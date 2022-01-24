import type { NextPage } from 'next'
import Head from 'next/head'
import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import AboutHero from '../components/About/AboutHero/AboutHero';
import Mission from '../components/About/Mission/Mission';
import Proces from '../components/About/Proces/Proces';
import AccordionSection from '../components/About/AccordionSection/AccordionSection';
import Brojke from '../components/About/Brojke/Brojke';
import ReusableFormRedirect from '../components/ReusableFormRedirect/ReusableFormRedirect';

const About: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      < >
      <Head>
        <title>Lan Digital | About</title>
        <meta name="description" content="LAN Digital je tu da Vašem biznisu pruži digitalni temelj na kom može da raste." />
        <link rel="icon" href="/favicon.ico" />
        <meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width"
/>
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <AboutHero toggle = { toggle }/>
        <Mission />
        <Proces />
        <AccordionSection />
        <Brojke />
        <ReusableFormRedirect />
        <Footer />
      </>
    )
  }
  
  export default About