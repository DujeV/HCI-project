import React from "react"
import NavigationHeader from "../modules/NavigationHeader/NavigationHeader"
import Footer from "../components/Footer/Footer"

const HeaderFooterLayout = ({ children }) => (
  <>
    <NavigationHeader />
    {children}
    <Footer />
  </>
)

export default HeaderFooterLayout
