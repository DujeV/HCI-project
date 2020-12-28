import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./Subscribe.css"
import SubscribeInput from "./SubscribeInput"

const Subscribe = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "UefaEuroBackground.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className="uefaeurobackgroundImage"
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <SubscribeInput />
    </BackgroundImage>
  )
}

export default Subscribe
