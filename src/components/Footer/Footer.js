import React from "react"
import { Link } from "gatsby"
import "./Footer.css"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import LanguageIcon from "@material-ui/icons/Language"

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h1>EURO 2021</h1>
        <p>" Til corona do us part "</p>
        <ul className="socials">
          <li>
            <Link to="/404">
              <FacebookIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/404">
              <TwitterIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/404">
              <InstagramIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/404">
              <LanguageIcon className="icon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2020 HCI class. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
