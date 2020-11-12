import React from "react"
import "./Navigation.css"
import NavLinks from "./NavLinks/NavLinks"
import Auth from "./Auth/Auth"

const Navigation = () => (
  <section className="navigation">
    <NavLinks />
    <Auth />
  </section>
)

export default Navigation
