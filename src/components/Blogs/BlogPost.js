import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "./BlogPost.css"
import HeaderFooterLayout from "../../layouts/HeaderFooter"
import BackgroundGradient from "../BackgroundGradient"

const BlogPost = ({ pageContext }) => {
  const { text, title, blogImage, next, prev } = pageContext

  return (
    <HeaderFooterLayout>
      <BackgroundGradient>
        <main className="mainContainer">
          <header className={!prev || !next ? "headerTwo" : ""}>
            {prev && (
              <Link to={`/posts/${prev.slug}`}>
                <span>Previous</span>
              </Link>
            )}
            <h2>{title}</h2>
            {next && (
              <Link to={`/posts/${next.slug}`}>
                <span>Next</span>
              </Link>
            )}
          </header>
          <Img fluid={blogImage.fluid} className="blogThumbnail" />
          <article>{renderRichText(text)}</article>
        </main>
      </BackgroundGradient>
    </HeaderFooterLayout>
  )
}

export default BlogPost
