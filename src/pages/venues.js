import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import Quote from "../components/Quote/Quote"
import VenuesInfo from "../components/VenuesInfo/VenuesInfo"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
const Venues = () => (
  <HeaderFooterLayout activeTab="Venues">
    <Helmet>
      <title>Venues</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <VenuesInfo />
      <Quote
        quote="Everyone is still talking about that goal in the 1988 final – I think it was a bit lucky."
        author="Rafael van der Vaart"
        description="bravely belittles his coach Marco van Basten’s Euro ’88 stunner during the Netherlands’ Euro ’08 campaign."
      />
    </motion.div>
  </HeaderFooterLayout>
)

export default Venues
