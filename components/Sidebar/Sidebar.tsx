import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SideBtnWrap, SidebarBtn, SidebarItem, SidebarMenu } from './SidebarStyles'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarItem href='/'>
                        Pocetna
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
                    <SidebarBtn>
                        Posaljite upit
                    </SidebarBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
