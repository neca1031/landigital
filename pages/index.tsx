import type { NextPage } from "next";
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Pocetna/Hero/Hero";
import Klijenti from "../components/Pocetna/Klijenti/Klijenti";
import Portfolio from "../components/Pocetna/Portfolio/Portfolio";
import Sidebar from "../components/Sidebar/Sidebar";
import Team from "../components/Pocetna/Team/Team";
import Testimonials from "../components/Pocetna/Testimonials/Testimonials";
import UslugeHero from "../components/Pocetna/UslugeHero/UslugeHero";
import ReusableFormRedirect from "../components/ReusableFormRedirect/ReusableFormRedirect";




const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero toggle={toggle} />
      <UslugeHero />
      <Portfolio />
      <Klijenti />
      <Testimonials />
      <Team />
      <ReusableFormRedirect />
      <Footer />
    </>
  );
};

export default Home;
