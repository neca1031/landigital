import type { NextPage } from 'next'
import React, {useState} from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import FormaHero from '../components/Forma/FormaHero/FormaHero';
import Head from 'next/head'




const Forma: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      < >
      <Head>
        <title>Lan Digital | Pošaljite upit</title>
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
        <FormaHero toggle={toggle}/>
        <Footer />
      </>
    )
  }
  
  export default Forma