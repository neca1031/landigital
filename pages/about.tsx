import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import AboutHero from "../components/About/AboutHero/AboutHero";
import Mission from "../components/About/Mission/Mission";
import Proces from "../components/About/Proces/Proces";
import AccordionSection from "../components/About/AccordionSection/AccordionSection";
import Brojke from "../components/About/Brojke/Brojke";
import ReusableFormRedirect from "../components/ReusableFormRedirect/ReusableFormRedirect";

const About: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>LAN Digital | About</title>
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
      <AboutHero toggle={toggle} />
      <Mission />
      <Proces />
      <AccordionSection />

      <ReusableFormRedirect />
      <Footer />
    </>
  );
};

export default About;
