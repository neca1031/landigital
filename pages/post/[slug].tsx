import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Sidebar from "../../components/Sidebar/Sidebar";
import PostPage from "../../components/Blog/PostPage/PostPage";
import Footer from "../../components/Footer/Footer";

import { getPosts, getPostDetails } from "../../services";

export const getStaticProps = async ({ params } : any) => {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
};

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } } : any) => ({ params: { slug } })),
    fallback: true,
  };
}

const Post: React.FC = ({ post } : any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <PostPage toggle={toggle} post={post} />

      <Footer />
    </>
  );
};

export default Post;
