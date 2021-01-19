import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from "gatsby-image"
import { Link } from "gatsby"
import {Helmet} from "react-helmet"

import "./BlogPost.css"
import HeaderFooterLayout from "../../layouts/HeaderFooter"
import BackgroundGradient from "../BackgroundGradient"

const BlogPost = ({ pageContext }) => {
  const { text, title, blogImage, next, prev } = pageContext

  return (
    <HeaderFooterLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <BackgroundGradient>
        <main className="blogPostContainer">
          {next && !prev ? (
            <div className="onlyNext">
              <Link to={`/posts/${next.slug}`}>
                <button className="singleTag arrowWidth">Next</button>
              </Link>
            </div>
          ) : (
            <div className="arrowContainer">
              {prev && (
                <Link to={`/posts/${prev.slug}`}>
                  <button className="singleTag arrowWidth">Previous</button>
                </Link>
              )}
              {next && (
                <Link to={`/posts/${next.slug}`}>
                  <button className="singleTag arrowWidth">Next</button>
                </Link>
              )}
            </div>
          )}
          <div className="blogPost">
            <header>{title}</header>
            <Img fluid={blogImage.fluid} className="blogPostThumbnail" />
            <article>{renderRichText(text)}</article>
          </div>
        </main>
      </BackgroundGradient>
    </HeaderFooterLayout>
  )
}

export default BlogPost
