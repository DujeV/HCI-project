import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import TitleImage from "../components/TitleImage/TitleImage"
import Quote from "../components/Quote/Quote"

const IndexPage = () => (
  <HeaderFooterLayout>
    <TitleImage />
    <Quote
      quote="I chose the penalty because I saw and realised it was the easiest and simplest recipe for scoring a goal. It is a simple recipe."
      author="Antonín Panenka"
      description="makes the pioneering spot-kick method that helped Czech Republic win Euro ’76 sound like a piece of cake"
    />
  </HeaderFooterLayout>
)

export default IndexPage
