import React from "react"
import Logo from "../../components/Navbar/Logo/Logo"
import Navigation from "../../components/Navbar/Navigation/Navigation"
import Menu_icon from "../../components/Navbar/Navigation/MenuIcon/MenuIcon"
import "./NavigationHeader.css"

const NavigationHeader = () => (
  <section className="navigationHeader">
    <Logo />
    <Navigation />
    <Menu_icon />
  </section>
)
export default NavigationHeader
