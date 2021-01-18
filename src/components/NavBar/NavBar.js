import React, { useState } from "react"
import { Link, navigate} from "gatsby"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

import "./NavBar.css"
import LogoSVG from "../../svgs/logo.svg"
import { navs } from "../../constants/const"
import Login from "../Login/Login";

function Navigation({ activeTab }) {
  const [user,setUser] = useState(localStorage.getItem('loggedIn'));
  const [click, setClick] = useState(false)
  const [isModalOpen, setIsModalOpen]=useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const closeModal = () => setIsModalOpen(false)

  const Logout = () => {
    localStorage.clear();
    setUser(null);
    return navigate('/');
  }
  const UpdatingUser = () => {
    setUser(localStorage.getItem('loggedIn'));
  }

  return (
    <div className="navbarContainer">
      <Link to="/" className="logoContainer" onClick={closeMobileMenu}>
        <LogoSVG />
        <h3>EURO 2021</h3>
      </Link>
      {/*eslint-disable-next-line*/}
      <div className="menuIcon" onClick={handleClick}>
        {click ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>
      <li className={click ? "navMenu active" : "navMenu"}>
        {navs.map(({ tab, to }, index) => (
          <Link
            to={to}
            className={tab === activeTab ? "navLinks active" : "navLinks"}
            onClick={closeMobileMenu}
            key={index}
          >
            {tab}
          </Link>
        ))}
        <button className="loginButton" onClick={() => setIsModalOpen(!isModalOpen)}>
          <AccountCircleIcon className="userIcon" />
          <span>Log In</span>
        </button>
        <Login isModalOpen={isModalOpen} closeModal={closeModal} UpdatingUser={UpdatingUser}/>
      </li>
    </div>
  )
}
export default Navigation
