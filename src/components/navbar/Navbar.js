import React, {useState} from 'react'
import { Nav, Logo, Menu, Hamburger, MenuLink, HomeImg, ImgDiv} from './NavbarStyles'
import recipe from '../../assets/Recipe App4.png'

const Navbar = () => {
    const [isOpen, setIsOpen]= useState(false)
    return (
        <div>
        <ImgDiv>
          <HomeImg src={recipe} />
        </ImgDiv>
          
        <Nav>
            <Logo to="/">
                <i>Recipe</i>
                <span> Web App</span>
            </Logo>
            <Hamburger onClick={()=>setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink as ="a" href="https://github.com/gizem28"  target="_blank">Github</MenuLink>
                <MenuLink to="/login">Login</MenuLink>
            </Menu>
        </Nav>
        </div>
    )
}

export default Navbar
