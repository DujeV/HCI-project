import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundGradient from "../BackgroundGradient"
import Img from "gatsby-image"
import "./PlayersToWatchInfo.css"

const PlayersToWatchInfo = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPlayerToWatch {
        nodes {
          age
          euroRecord
          goalsScored
          name
          nationality
          matchesPlayed
          photos {
            fluid(maxWidth: 1920, quality: 100) {
              src
            }
          }
        }
      }
    }
  `)
  return (
    <BackgroundGradient>
      <div className="mainContainer">
        <h1>Players To Watch</h1>
        <h3>Check out players who can lead their nations to top results.</h3>
        <div className="playersContainer">
          {data.allContentfulPlayerToWatch.nodes.map((player, index) => (
            <div className="player" key={index}>
              {player.photos.map((photo, index) => (
                <Img
                  fluid={photo.fluid}
                  Tag="section"
                  className="playerTumbnail"
                  key={index}
                />
              ))}
              <div className="personalInfo">
                <span className="playerName">{player.name}</span>
                <p>
                  <span>Age :</span>
                  {player.age}
                </p>
                <p>
                  <span>Nationality :</span>
                  {player.nationality}
                </p>
              </div>

              <div className="statsContainer">
                <div className="statsTitles">
                  <p>Euros record</p>
                  <p>Matches played</p>
                  <p>Goals scored</p>
                </div>
                <div className="statsContent">
                  <p>{player.euroRecord}</p>
                  <p>{player.matchesPlayed}</p>
                  <p>{player.goalsScored}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackgroundGradient>
  )
}

export default PlayersToWatchInfo
