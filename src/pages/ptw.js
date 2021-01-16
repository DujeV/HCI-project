import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import Quote from "../components/Quote/Quote"
import PlayersToWatchInfo from "../components/PlayersToWatchInfo/PlayersToWatchInfo"

const PlayersToWatch = () => (
  <HeaderFooterLayout activeTab="PTW">
    <PlayersToWatchInfo />
    <Quote
      quote="What am I to think when the coach has his hands and head up the backside of certain players."
      author="Otto Rehhagel"
      description="discusses the perks of helping the Greeks pull off one of the biggest shocks in world football at Euro ’04."
    />
  </HeaderFooterLayout>
)

export default PlayersToWatch
