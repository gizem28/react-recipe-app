import React, {useState} from 'react'
import { Nav, Logo, Menu, Hamburger, MenuLink } from './NavbarStyles'

const Navbar = () => {
    const [isOpen, setIsOpen]= useState(false)
    return (
        <Nav>
            <Logo to="/">
                <i>{"<WEB>"}</i>
                <span> recipe</span>
            </Logo>
            <Hamburger onClick={()=>setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to={{pathname:"https://github.com/gizem28"}}>Github</MenuLink>
                <MenuLink to="/login">Logout</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar
