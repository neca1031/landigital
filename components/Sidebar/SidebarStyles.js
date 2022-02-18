
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { AiOutlineContacts } from 'react-icons/ai'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { HiOutlineBriefcase } from 'react-icons/hi'



  export const HomeIcon = styled(AiOutlineHome)`
  color: #d0d8ea;
  margin-right: 1rem;
`
export const AboutIcon = styled(AiOutlineInfoCircle)`
  color: #d0d8ea;
  margin-right: 1rem;
`

export const ContactIcon = styled(AiOutlineContacts)`
  color: #d0d8ea;
  margin-right: 1rem;
`

export const BlogIcon = styled(HiOutlinePencilAlt)`
  color: #d0d8ea;
  margin-right: 1rem;
`

export const ServicesIcon = styled(HiOutlineBriefcase)`
  color: #d0d8ea;
  margin-right: 1rem;
`

export const SidebarContainer = styled.aside`
 position: fixed;
 z-index: 900;
 width: 80%;
 height: 100%;
 background-color: #242a56;
 display: grid;
 align-items: center;
 top: 0;
 box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
 
`

export const NavLogo = styled.img`
  margin-right: auto;
  max-width: 70px;
  position: absolute;
  top: 1.1rem;
  left: 1.5rem;
  height: auto;
  aspect-ratio: 1080/1080;
  cursor: pointer;
  @media (max-width: 60em) {
    max-width: 120px;
  }
`;

export const CloseIcon = styled(VscClose)`
 color: #fff;
 padding: 0.5rem;
 border-radius: 12px;
 &:hover {
    background-color: #312e81;
 }
`

export const Icon = styled.div`
 position: absolute;
 top: 3.5rem;
 right: 1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
`

export const SidebarWrapper = styled.div`
 color: #fff;
 padding: 1rem;
`

export const SidebarItem = styled.a`
 cursor: pointer;
 text-align: center;
 text-decoration: none;
padding: 1rem 1em;
display: flex;
 align-items: center;
 border-radius: 1rem;
 font-family: sans-serif;
 justify-content: center;
 margin-right: auto;
 margin-left: 0.5rem;
transition: all .2s linear;
 color: #e5e7eb;
 transition: all 0.2s ease-in;
 font-size: 1.3rem;
@media (max-width: 20em) {
    font-size: 1.1rem;
}
 font-weight: 100;
 &:hover {
    color: white;
    background-color: #312e81;
}
`

export const SideBtnWrap = styled.div`
 display: flex;
 justify-content: center;
 

`

export const SidebarBtn = styled.button`

border-radius: 42px;
background: #6878d6;
font-family: 'Open Sans',sans-serif;
font-weight: 100;
border-style: solid;
border-color: #6878d6;
border: none;
color: white;
margin-right: auto;
margin-left: 1rem;
font-size: 1rem;
@media (max-width: 20em) {
    font-size: 1rem;
    padding: 0.8rem 1.2rem
}
line-height: 1;
text-transform: uppercase;
letter-spacing: 1px;
padding: 1rem 1.5rem;
transition: all .2s linear;
cursor: pointer;
&:hover {
    background: #fff;
    color: #214973;
}
`

export const SidebarMenu = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 80px);
 text-align: center;

 @media screen and (max-width: 480px) {
     grid-template-rows: repeat(6, 60px);
 }
 @media (max-width: 20em) {
    grid-template-rows: repeat(6, 40px);
}
`