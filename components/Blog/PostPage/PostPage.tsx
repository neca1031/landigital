import React from "react";
import { RichText } from '@graphcms/rich-text-react-renderer';
import {
  NavLogo,
  NavItems,
  Header,
  NavItem,
  NavButton,
  Mobile,
  HeroWrapper,
  PostContainer,
  Span,
  PostHeading,
  ThePost,
  ButtonIcon,
  PostContent,
  BackButton,
  Stack,
  Datum,
  VremeCitanja,
  AuthorImage,
  AuthorContainer,
  PostImage,
  Paragraph,
  Heading3,
  Heading4,
  AuthorImageContainer,
  AuthorName,
  AuthorBio,
} from "./PostPageStyles";
import moment from "moment";
import Link from "next/link";

const PostPage = ({ toggle, post }: { toggle: any; post: any }) => {
  
  return (
    <>
      <HeroWrapper>
        <Header>
          <Link href="/">
            <NavLogo src={"/lan-logo1.png"}></NavLogo>
          </Link>
          <Mobile onClick={toggle}></Mobile>
          <NavItems>
            <NavItem href="/">Početna</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/about">O nama</NavItem>
            <NavItem href="/usluge">Usluge</NavItem>
            <NavItem href="/kontakt">Kontakt</NavItem>
            <Link href="/forma">
              <NavButton>Pošaljite upit</NavButton>
            </Link>
          </NavItems>
        </Header>
      </HeroWrapper>
      <PostContainer>
        <ThePost>
          <Span></Span>

          <PostImage src={post.featuredImage.url}></PostImage>
          <Stack>
            <Link href="/blog" passHref>
              <BackButton>
                <ButtonIcon></ButtonIcon>Vrati se
              </BackButton>
            </Link>

            <VremeCitanja>{post.readingTime} min čitanja</VremeCitanja>
            <Datum>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  verticalAlign: "bottom",
                  marginRight: "0.5rem",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </Datum>
          </Stack>
          <PostHeading>{post.title}</PostHeading>
          <PostContent>
            <RichText content={post.content.raw} />
          </PostContent>
        </ThePost>
        <AuthorContainer>
          <AuthorImageContainer>
            <AuthorImage
              src={post.author.photo.url}
              alt={post.author.name}
            ></AuthorImage>
          </AuthorImageContainer>
          <AuthorName>{post.author.name}</AuthorName>
          <AuthorBio>{post.author.bio}</AuthorBio>
        </AuthorContainer>
      </PostContainer>
    </>
  );
};

export default PostPage;
