import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import "./NavigationHeader.css"

const NavigationHeader = ({ activeTab }) => (
  <section className="navigationHeader">
    <NavBar activeTab={activeTab} />
  </section>
)
export default NavigationHeader
