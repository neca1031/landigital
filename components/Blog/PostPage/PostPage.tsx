import React from "react";
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
  Autor
} from "./PostPageStyles";
import moment from 'moment';
import Link from 'next/link'

const PostPage = ({ toggle, post }) => {
  return (
    <>
      <HeroWrapper>
        <Header>
          <a href="/">
            <NavLogo src={"/lan-logo1.png"}></NavLogo>
          </a>
          <Mobile onClick={toggle}></Mobile>
          <NavItems>
            <NavItem href="/">Početna</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/about">O nama</NavItem>
            <NavItem href="/usluge">Usluge</NavItem>
            <NavItem href="/kontakt">Kontakt</NavItem>
            <a href="/forma">
              <NavButton>Pošaljite upit</NavButton>
            </a>
          </NavItems>
        </Header>
      </HeroWrapper>
      <PostContainer>
        <ThePost>
          <Span></Span>
          <Stack>
          <Link href='/blog'>
          <BackButton>
            <ButtonIcon></ButtonIcon>Vrati se
          </BackButton>
          </Link>
          <VremeCitanja>{post.reading_time} min čitanja</VremeCitanja>
          <Datum>{moment(post.published_at).format('MMM DD, YYYY')}</Datum> 
          </Stack>
          <PostHeading>{post.title}</PostHeading>
          <PostContent
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></PostContent>
        </ThePost>
      </PostContainer>
    </>
  );
};

export default PostPage;
