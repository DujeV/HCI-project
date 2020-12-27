import React from "react"
import TrophySvg from "../../svgs/Trophy.svg"
import BallSvg from "../../svgs/Ball.svg"
import "./Quote.css"
const Quote = ({ quote, author, description }) => {
  return (
    <div className="quoteContainer">
      <div className="paragraphContainer">
        <TrophySvg />
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
        <TrophySvg />
      </div>
      <div className="ballContainer">
        <BallSvg />
      </div>
    </div>
  )
}
 
export default Quote