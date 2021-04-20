import React from 'react'
import {SidebarContainer,CloseIcon,Icon,SidebarWrapper,SidebarLink, SidebarMenu} from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>  
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">
                        Home
                    </SidebarLink>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="Service">
                        Service
                    </SidebarLink>
                    <SidebarLink to="Experience">
                        Experience
                    </SidebarLink>
                    <SidebarLink to="Works">
                        Works
                    </SidebarLink>
                    <SidebarLink to="Blog">
                        Blog
                    </SidebarLink>
                    <SidebarLink to="Contact">
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
