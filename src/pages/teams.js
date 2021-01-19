import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import TeamsInfo from "../components/TeamsInfo/TeamsInfo"
import Quote from "../components/Quote/Quote"
import { Helmet } from "react-helmet"
const Teams = () => (
  <HeaderFooterLayout activeTab="Teams">
    <Helmet>
      <title>Teams</title>
      <meta name="description" content="Helmet application" />
    </Helmet>

    <TeamsInfo />
    <Quote
      quote="I’m English, without a doubt. I will never ever say I’m not English. English born and bred. I’m Turkish, though."
      author="Colin Kazim-Richards"
      description="London-born Turkish striker  suffers an identity crisis during Euro 2008."
    />
  </HeaderFooterLayout>
)

export default Teams
