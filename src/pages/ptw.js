import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import Quote from "../components/Quote/Quote"
import PlayersToWatchInfo from "../components/PlayersToWatchInfo/PlayersToWatchInfo"

const PlayersToWatch = () => (
  <HeaderFooterLayout activeTab="PTW">
    <PlayersToWatchInfo />
    <Quote
      quote="“When I walk around people salute me and now I must be the only person allowed to drive in the bus lanes.”"
      author="Otto Rehhagel"
      description="discusses the perks of helping the Greeks pull off one of the biggest shocks in world football at Euro ’04."
    />
  </HeaderFooterLayout>
)

export default PlayersToWatch
