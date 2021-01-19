import React, { useState } from "react"
import { Link, navigate } from "gatsby"

import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

import "./NavBar.css"
import LogoSVG from "../../svgs/logo.svg"
import { navs } from "../../constants/const"
import Login from "../Login/Login"

import { myLocalStorage } from "../Login/helper"

function Navigation({ activeTab }) {
  const [user, setUser] = useState(myLocalStorage.getItem("loggedIn"))
  const [click, setClick] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const closeModal = () => setIsModalOpen(false)

  const Logout = () => {
    myLocalStorage.removeItem("loggedIn")
    setUser(null)
    setClick(false)
    return navigate("/")
  }
  const UpdatingUser = () => {
    setUser(myLocalStorage.getItem("loggedIn"))
  }

  return (
    <div className="navbarContainer">
      <Link to="/" className="logoContainer" onClick={closeMobileMenu}>
        <LogoSVG />
        <h4>EURO 2021</h4>
      </Link>
      {/*eslint-disable-next-line*/}
      <div className="menuIcon" onClick={handleClick}>
        {click ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>
      <li className={click ? "navMenu active" : "navMenu"}>
        {user
          ? navs.map(({ tab, to }, index) => (
              <Link
                to={to}
                className={tab === activeTab ? "navLinks active" : "navLinks"}
                onClick={closeMobileMenu}
                key={index}
              >
                {tab}
              </Link>
            ))
          : navs.map(({ tab, to, access }, index) => {
              if (access === "public") {
                return (
                  <Link
                    to={to}
                    className={
                      tab === activeTab ? "navLinks active" : "navLinks"
                    }
                    onClick={closeMobileMenu}
                    key={index}
                  >
                    {tab}
                  </Link>
                )
              } else {
                return null
              }
            })}
        {user ? (
          <button className="loginButton" onClick={Logout}>
            <AccountCircleIcon className="userIcon" />
            <span>Logout</span>
          </button>
        ) : (
          <button
            className="loginButton"
            onClick={() => {
              setIsModalOpen(!isModalOpen)
              setClick(false)
            }}
          >
            <AccountCircleIcon className="userIcon" />
            <span>Login</span>
          </button>
        )}
        <Login
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          UpdatingUser={UpdatingUser}
        />
      </li>
    </div>
  )
}
export default Navigation
