import type { NextPage } from 'next'
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