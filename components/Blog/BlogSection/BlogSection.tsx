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
  ButtonIcon,
} from "./BlogSectionStyles";
import moment from 'moment';
const BlogSection = ({ posts } : {posts:any}) => {
    
  return (
    <BlogSectionContainer>
      <ObjaveHeading>Poslednje Objave</ObjaveHeading>
      <ObjaveContainer>
        {posts.map((post:any) => {
          return (
            <Objava key={post.slug}>
              <Slika src={post.feature_image}></Slika>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <ObjavaHeading>{post.title}</ObjavaHeading>
              </Link>
              
              <ObjavaVreme>{moment(post.published_at).format('MMM DD, YYYY')}</ObjavaVreme>
              <ObjavaP>{post.custom_excerpt}</ObjavaP>
              <Link href="/post/[slug]" as={`/post/${post.slug}`} passHref>
              <ObjavaButton >Pročitaj više <ButtonIcon></ButtonIcon></ObjavaButton>
              </Link>
            </Objava>
            
          );
        })}
        <ObjavaP>Coming Soon&trade;...</ObjavaP>
      </ObjaveContainer>
    </BlogSectionContainer>
  );
};

export default BlogSection;
