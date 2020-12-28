import React from "react"
import NavigationHeader from "../modules/NavigationHeader/NavigationHeader"
import Footer from "../components/Footer/Footer"

const HeaderFooterLayout = ({ activeTab, children }) => (
  <>
    <NavigationHeader activeTab={activeTab} />
    {children}
    <Footer />
  </>
)

export default HeaderFooterLayout
