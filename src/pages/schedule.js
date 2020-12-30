import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import Quote from "../components/Quote/Quote"

const Schedule = () => (
  <HeaderFooterLayout activeTab="Schedule">
    <Quote
      quote="With the greatest respect to women, football is the most beautiful thing in the world."
      author="Slaven Bilić"
      description="tries but ultimately fails to avoid offending half the population during Euro 2008."
    />
  </HeaderFooterLayout>
)

export default Schedule
