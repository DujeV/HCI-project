import React from "react"
import NavigationHeader from "../modules/NavigationHeader/NavigationHeader"

const HeaderFooterLayout = ({ children }) => (
  <>
    <NavigationHeader />
    {children}
  </>
)

export default HeaderFooterLayout
