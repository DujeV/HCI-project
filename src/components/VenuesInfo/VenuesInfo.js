import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundGradient from "../BackgroundGradient"
import Img from "gatsby-image"
import "./VenuesInfo.css"
import { venues } from "./VenuesData"
const VenuesInfo = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "venues" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <BackgroundGradient>
      <div className="mainContainer">
        <h1>Venues and host cities</h1>
        <div className="venuesContainer">
          {venues.map((venue, index) => (
            <div className="venue" key={index}>
              {data.allFile.edges.map(({ node }, index) => {
                if (node.base === venue.image) {
                  return (
                  <div className="zoomInContainer">

                    <Img
                      fluid={node.childImageSharp.fluid}
                      Tag="section"
                      className="venueTumbnail"
                      key={index}
                    />
                  </div>
                  )
                } else {
                  return null
                }
              })}

              <div className="venueContent">
                <p className="venueName">{venue.name}</p>
                <div className="venueInfo">
                  <div className="venueBox">
                    <span>Capacity</span>
                    <p>{venue.capacity}</p>
                  </div>
                  <div className="venueBox">
                    <span>Groups playing</span>
                    <p> {venue.groupsPlaying}</p>
                  </div>
                  <div className="venueBox">
                    <span>Info</span>
                    <p>{venue.info}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackgroundGradient>
  )
}

export default VenuesInfo
