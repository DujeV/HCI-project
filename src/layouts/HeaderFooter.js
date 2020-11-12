import React from "react"
import NavigationHeader from "../modules/NavigationHeader/NavigationHeader"

const HeaderFooterLayout = ({ children }) => (
  <>
    <NavigationHeader />
    {children}
    <h1>Page content</h1>
  </>
)

export default HeaderFooterLayout
