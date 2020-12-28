import React from "react"
import TrophySvg from "../../svgs/Trophy.svg"
import TrophySvgMobile from "../../svgs/TrophyMobile.svg"
import BallSvg from "../../svgs/Ball.svg"
import BallSvgMobile from "../../svgs/BallMobile.svg"
import "./Quote.css"
const Quote = ({ quote, author, description }) => {
  return (
    <div className="quoteContainer">
      <div className="paragraphContainer">
        <TrophySvgMobile className="trophyMobile" />
        <TrophySvg className="trophy" />
        <div className="paragraph">
          <div className="quote">
            <h1>"{quote}"</h1>
          </div>
          <div className="authorContainer">
            <div className="author">
              <p>- {author}</p>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
          </div>
        </div>
        <TrophySvg className="trophy" />
      </div>
      <div className="ballContainer">
        <BallSvgMobile className="ballMobile" />
        <BallSvg className="ball" />
      </div>
    </div>
  )
}

export default Quote
