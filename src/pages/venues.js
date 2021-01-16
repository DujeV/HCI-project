import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import Quote from "../components/Quote/Quote"
import VenuesInfo from "../components/VenuesInfo/VenuesInfo"

const Venues = () => (
  <HeaderFooterLayout activeTab="Venues">
    <VenuesInfo />
    <Quote
      quote="Everyone is still talking about that goal in the 1988 final – I think it was a bit lucky."
      author="Rafael van der Vaart"
      description="bravely belittles his coach Marco van Basten’s Euro ’88 stunner during the Netherlands’ Euro ’08 campaign."
    />
  </HeaderFooterLayout>
)

export default Venues
