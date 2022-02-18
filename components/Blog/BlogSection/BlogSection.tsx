import React from "react";
import Link from "next/link";
import {
  BlogSectionContainer,
  ObjaveContainer,
  Objava,
  ObjavaHeading,
  ObjavaP,
  ObjavaButton,
  ObjaveHeading,
  Slika,
  ObjavaVreme,
  HorizontalStack,
  AuthorSlika,
  AuthorName,
  AuthorWrap
} from "./BlogSectionStyles";
import moment from "moment";
import FeaturedPosts from "./FeaturedPosts";
const BlogSection = ({ posts }: { posts: any }) => {
  return (
    <BlogSectionContainer>
      <FeaturedPosts />
      <ObjaveHeading>Poslednje Objave</ObjaveHeading>
      <ObjaveContainer>
        {posts.map((post: any) => {
          return (
            <Objava key={post.node.title}>
              <Slika src={post.node.featuredImage.url}></Slika>
              <Link href="/post/[slug]" as={`/post/${post.node.slug}`}>
                <ObjavaHeading>{post.node.title}</ObjavaHeading>
              </Link>
              <HorizontalStack>
                <AuthorWrap>
              <AuthorSlika src={post.node.author.photo.url}></AuthorSlika>
              </AuthorWrap>
              <ObjavaVreme>
              <svg xmlns="http://www.w3.org/2000/svg"  
              style={{ height:'1.5rem', width: '1.5rem', verticalAlign: 'bottom', marginRight: '0.5rem' }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
                {moment(post.node.createdAt).format("MMM DD, YYYY")}
              </ObjavaVreme>
              </HorizontalStack>
              <ObjavaP>{post.node.excerpt}</ObjavaP>
              <Link href="/post/[slug]" as={`/post/${post.node.slug}`} passHref>
                <ObjavaButton>
                  Pročitaj Više 
                </ObjavaButton>
              </Link>
            </Objava>
          );
        })}
        
      </ObjaveContainer>
    </BlogSectionContainer>
  );
};

export default BlogSection;
