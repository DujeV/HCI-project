import React from "react"
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
            <a href="#">
              <FacebookIcon className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterIcon className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <LanguageIcon className="icon" />
            </a>
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
