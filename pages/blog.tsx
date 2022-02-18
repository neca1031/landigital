import type { NextPage } from "next";
import Head from "next/head";
import { getPosts } from '../services'
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import BlogSection from "../components/Blog/BlogSection/BlogSection";
import BlogHero from "../components/Blog/BlogHero/BlogHero";





export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const Blog: NextPage = ( {posts} ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>Lan Digital | Blog</title>
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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <BlogHero toggle={toggle} />
      <BlogSection posts={posts} />

      <Footer />
    </>
  );
};

export default Blog;

