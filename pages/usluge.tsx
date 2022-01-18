import type { NextPage } from 'next'
import React, {useState} from 'react';
import UslugeHero from "../components/Usluge/UslugeHero/UslugeHero";
import Sidebar from "../components/Sidebar/Sidebar";
import ReusableFormRedirect from "../components/ReusableFormRedirect/ReusableFormRedirect";
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