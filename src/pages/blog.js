import React from "react"
import HeaderFooterLayout from "../layouts/HeaderFooter"
import Quote from "../components/Quote/Quote"
import BlogList from "../components/Blogs/BlogList";
import {Helmet} from "react-helmet"

const Blog = () => (
  <HeaderFooterLayout activeTab="Blog">
     <Helmet>
        <title>Blog</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <BlogList />
    <Quote
      quote="What am I to think when the coach has his hands and head up the backside of certain players."
      author="Edgar Davids"
      description="gets a one-way ticket back to the Netherlands after just one Euro ’96 game following his remarks about coach Guus Hiddink."
    />
  </HeaderFooterLayout>
)

export default Blog
