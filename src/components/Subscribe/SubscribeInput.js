import React from "react"
import "./SubscribeInput.css"
const SubscribeInput = () => {
  return (
    <div className="subscribeinputContainer">
      <div className="subscribeText">
        <h1>Subscribe to our newsletter</h1>
      </div>
      <div className="roundedFields">
        <div className="newsletterInput">
          <input type="email" placeholder="example@gmail.com" />
        </div>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default SubscribeInput
