import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import TitleImage from "../components/TitleImage/TitleImage"
import Quote from "../components/Quote/Quote"
import Subscribe from "../components/Subscribe/Subscribe"
import { Helmet } from "react-helmet"
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <Helmet>
      <title>Euro 2021</title>
      <meta name="description" content="Helmet application" />
    </Helmet>

    <TitleImage />
    <Quote
      quote="I chose the penalty because I saw and realised it was the easiest and simplest recipe for scoring a goal. It is a simple recipe."
      author="Antonín Panenka"
      description="makes the pioneering spot-kick method that helped Czech Republic win Euro ’76 sound like a piece of cake"
    />
    <Subscribe />
  </HeaderFooterLayout>
)

export default IndexPage
