import React from "react"
import { navs } from "../../../../constants/const"
import { Link } from "gatsby"
import "./NavLinks.css"
const NavLinks = () => (
  <nav className="navLinks">
    {navs.map(({ tab, to }) => (
      <Link to={to}>
        <li className="navItem">{tab}</li>
      </Link>
    ))}
  </nav>
)

export default NavLinks
