import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./TitleImage.css"
import Counter from "./Counter"
import BackgroundImage from "gatsby-background-image"

const TitleImage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "Background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ....GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className="backgroundImage"
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <Counter />
    </BackgroundImage>
  )
}

export default TitleImage
