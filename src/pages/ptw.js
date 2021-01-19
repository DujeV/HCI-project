import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import Quote from "../components/Quote/Quote"
import PlayersToWatchInfo from "../components/PlayersToWatchInfo/PlayersToWatchInfo"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
const PlayersToWatch = () => (
  <HeaderFooterLayout activeTab="PTW">
    <Helmet>
      <title>PTW</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <PlayersToWatchInfo />
      <Quote
        quote="“When I walk around people salute me and now I must be the only person allowed to drive in the bus lanes.”"
        author="Otto Rehhagel"
        description="discusses the perks of helping the Greeks pull off one of the biggest shocks in world football at Euro ’04."
      />
    </motion.div>
  </HeaderFooterLayout>
)

export default PlayersToWatch
