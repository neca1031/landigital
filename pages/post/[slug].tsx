import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import Sidebar from '../../components/Sidebar/Sidebar';
import PostPage from '../../components/Blog/PostPage/PostPage';
import Footer from '../../components/Footer/Footer';


const {BLOG_URL, CONTENT_API_KEY} = process.env 

async function getPost(slug: string) {
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,reading_time,published_at,feature_image,html`
      ).then((res) => res.json());
    
      const posts = res.posts;
    
      return posts[0];
    }


export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug);
    return {
      props: { post },
    };
  };

  export const getStaticPaths = () => {
      return {
          paths: [],
          fallback: true
      }
  }
  type Post = {
      title: string
      html: string
      slug: string
      custom_excerpt: string;
  feature_image: string;
  reading_time: string;
  }

const Post: React.FC<{post: Post}> = (props) => {
    const {post} = props
    const [isOpen, setIsOpen] = useState(false)
  
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    const router = useRouter()
    
    if(router.isFallback) {
        return <h1>Loading</h1>
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <PostPage toggle = { toggle } post={post}/>
        <Footer />
    
    </>
    )
}
    
export default Post