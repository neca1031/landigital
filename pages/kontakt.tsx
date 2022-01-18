import type { NextPage } from 'next'
import React, {useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import KontaktHero from '../components/Kontakt/KontaktHero/KontaktHero';
import KontaktSection from '../components/Kontakt/KontaktSection/KontaktSection';



const Kontakt: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      < >
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <KontaktHero toggle={toggle}/>
        <KontaktSection />
        <Footer />
      </>
    )
  }
  
  export default Kontakt