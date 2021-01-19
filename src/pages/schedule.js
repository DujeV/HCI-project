import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import ScheduleInfo from "../components/ScheduleInfo/ScheduleInfo"
import Quote from "../components/Quote/Quote"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
const Schedule = () => (
  <HeaderFooterLayout activeTab="Schedule">
    <Helmet>
      <title>Schedule</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScheduleInfo />
      <Quote
        quote="With the greatest respect to women, football is the most beautiful thing in the world."
        author="Slaven Bilić"
        description="tries but ultimately fails to avoid offending half the population during Euro 2008."
      />
    </motion.div>
  </HeaderFooterLayout>
)

export default Schedule
