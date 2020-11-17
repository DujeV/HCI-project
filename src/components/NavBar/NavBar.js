import React, { useState } from "react"
import { Link } from "gatsby"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

import "./NavBar.css"
import LogoSVG from "../../svgs/logo.svg"
import { navs } from "../../constants/const"

function Navigation() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <Link to="/" className="logoContainer" onClick={closeMobileMenu}>
        <LogoSVG />
        <h3>EURO 2021</h3>
      </Link>
      {/*eslint-disable-next-line*/}
      <div className="MenuIcon" onClick={handleClick}>
        {click ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>
      <li className={click ? "nav-menu active" : "nav-menu"}>
        {navs.map(({ tab, to }) => (
          <Link to={to} className="navLinks" onClick={closeMobileMenu}>
            {tab}
          </Link>
        ))}
      </li>
      <Link to="/404" className="auth">
        <AccountCircleIcon className="user-icon" />
        Log In
      </Link>
    </>
  )
}
export default Navigation
