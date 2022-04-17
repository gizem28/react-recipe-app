import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer } from './AboutStyle'
// import codingSvg from "../../assets/Recipe App7.png"

const About = () => {
    return (
      <AboutContainer>
          {/* <StyledImage src={codingSvg} alt="About Page Image"/> */}
          <HeaderContainer>
          <h1>About Software Developer <span>Gizem Odun</span> </h1>
          </HeaderContainer>
          <InfoContainer>
          <h2>Hi, I'am Gizem</h2>
                <h3>I’m currently learning Full-Stack Development Languages.</h3>
                <h4> I've already known JS, ReactJS, Django, Restful APiI, SQL,
          Python</h4>
          <h2>
          <a href="mailto:gizemodun28@gmail.com"> 📨 </a>Send email :
          gizemodun28@gmail.com
        </h2>
          </InfoContainer>
      </AboutContainer>
    )
}

export default About
