import React, { useEffect, useState } from "react"
import "./Counter.css"

const Counter = () => {
  const countdownDate = new Date("6/11/2021").getTime()
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000)
  })

  const updateCountdown = () => {
    if (countdownDate) {
      // Get the current time
      const currentTime = new Date().getTime()

      // Get the time remaining until the countdown date
      const distanceToDate = countdownDate - currentTime

      // Calculate days, hours, minutes and seconds remaining
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      )
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

      // For visual appeal, add a zero to each number that's only one digit
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`
      }

      // Set the state to each new time
      setState({ days: days, hours: hours, minutes, seconds })
    }
  }

  return (
    <div className="counterContainer">
      <h1>EURO STARTS IN </h1>
      <div className="countdownWrapper">
        <div className="timeSection">
          <div className="time">{state.days || "0"}</div>
          <small className="timeText">Days</small>
        </div>

        <div className="timeSection">
          <div className="time">{state.hours || "00"}</div>
          <small className="timeText">Hours</small>
        </div>

        <div className="timeSection">
          <div className="time">{state.minutes || "00"}</div>
          <small className="timeText">Minutes</small>
        </div>

        <div className="timeSection">
          <div className="time">{state.seconds || "00"}</div>
          <small className="timeText">Seconds</small>
        </div>
      </div>
    </div>
  )
}

export default Counter
