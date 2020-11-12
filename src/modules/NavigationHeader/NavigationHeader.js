import React from "react"
import Logo from "../../components/Navbar/Logo/Logo"
import Navigation from "../../components/Navbar/Navigation/Navigation"
import "./NavigationHeader.css"

const NavigationHeader = () => (
  <section className="navigationHeader">
    <Logo />
    <Navigation />
  </section>
)
export default NavigationHeader
