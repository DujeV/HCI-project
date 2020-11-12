import React from "react"
import "./auth.css"
import { Link } from "gatsby"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
const Auth = () => (
  <div className="auth">
    <AccountCircleIcon className="user-icon" />
    <Link to="/404">Log In</Link>
  </div>
)

export default Auth
