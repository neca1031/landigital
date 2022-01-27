import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SideBtnWrap, SidebarBtn, SidebarItem, SidebarMenu, NavLogo } from './SidebarStyles'
import Link from 'next/link'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <NavLogo src={"/lan-logo1.png"}>

            </NavLogo>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarItem href='/'>
                        Početna
                    </SidebarItem>
                    <SidebarItem href='/blog'>
                        Blog
                    </SidebarItem>
                    <SidebarItem href='/about'>
                        O nama
                    </SidebarItem>
                    <SidebarItem href='/usluge'>
                        Usluge
                    </SidebarItem>
                    <SidebarItem href='/kontakt'>
                        Kontakt
                    </SidebarItem>
                </SidebarMenu>
                <SideBtnWrap>
                    <Link href='/forma'>
                    <SidebarBtn>
                        Pošaljite upit
                    </SidebarBtn>
                    </Link>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
