import type { NextPage } from "next";
import Head from "next/head";
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
      <Head>
        <title>Lan Digital - The Cool Digital Agency</title>
        <meta
          name="description"
          content="LAN Digital is here to provide your business with a digital foundation on which to grow."
        />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
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
