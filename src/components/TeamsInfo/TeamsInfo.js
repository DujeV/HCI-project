import React from "react"
import BackgroundGradient from "../BackgroundGradient"
import { teams } from "./TeamsData/TeamsData.js"
import "./TeamsInfo.css"

const TeamsInfo = () => {
  {
    return (
      <BackgroundGradient>
        <div className="mainContainer">
          <h1>Teams</h1>
          <div className="cards">
            {teams.map(
              ({ flag, nation, eurosPlayed, bestPlace, bestPlayer }) => (
                <div className="card">
                  <div className="nationContainer">
                    <img src={flag.big} alt={flag.alt} />
                    <p>{nation}</p>
                  </div>
                  <div className="infoContainer">
                    <div className="infoTitles">
                      <p>Euros played</p>
                      <p>Best place</p>
                      <p>Best player</p>
                    </div>
                    <div className="infoContent">
                      <p>{eurosPlayed}</p>
                      <p>{bestPlace}</p>
                      <p>{bestPlayer}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </BackgroundGradient>
    )
  }
}

export default TeamsInfo
