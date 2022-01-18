import type { NextPage } from 'next'
import React, {useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import FormaHero from '../components/Forma/FormaHero/FormaHero';




const Forma: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      < >
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <FormaHero toggle={toggle}/>
        <Footer />
      </>
    )
  }
  
  export default Forma