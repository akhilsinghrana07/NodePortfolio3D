import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../Images/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return <ReactNavbar 
  navColor1="white"
      navColor2="hsl(219, 48%, 24%)"
      navColor3="hsl(219, 46%, 16%)"
      navColor4="hsl(219, 46%, 8%)"
      burgerColor="hsl(250, 100%, 75%)"
      burgerColorHover="hsl(250, 100%, 75%)"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Skills"
      link4Text="Certificates"
      link5Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/skill"
      link4Url="/certificate"
      link5Url="/contact"
      link1ColorHover="white"
      link1Color="HSL(250, 100%, 75%)"
      link2Color="HSL(250, 100%, 75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="HSL(250, 100%, 75%)"
      profileIconColorHover="white"
  />
}

export default Header