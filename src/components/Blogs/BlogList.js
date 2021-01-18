import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundGradient from "../BackgroundGradient"
import Img from "gatsby-image"
import "./BlogList.css"
import { tags } from "./Tags"

const BlogList = () => {
  const [filterBlogs, setFilterBlogs] = useState([])
  const [selectedTag, setSelectedTag] = useState("all")
  const user = localStorage.getItem("loggedIn")

  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPosts {
        nodes {
          author
          createdAt
          description
          slug
          tags
          title
          text {
            raw
          }
          blogImage {
            fluid(maxWidth: 1920, quality: 100) {
              src
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    let results = []

    data.allContentfulBlogPosts.nodes.forEach(blog => {
      if (blog.tags.includes(selectedTag)) {
        results.push(blog)
      }
    })
    setFilterBlogs(results)
  }, [selectedTag])

  const handleClick = e => {
    setSelectedTag(e.target.innerHTML)
  }

  return (
    <BackgroundGradient>
      <div className="mainContainer">
        {user ? (
          <>
            <h1 className="pageHeader">Blogs & Latest News</h1>

            <div className="tagsContainer">
              <p>Filter blog posts with tags</p>
              <div className="tags">
                {tags.map((tag, index) => (
                  <button
                    className={
                      selectedTag === tag.name
                        ? "singleTag activeTag"
                        : "singleTag"
                    }
                    key={index}
                    onClick={handleClick}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={
                filterBlogs.length > 2
                  ? "blogsContainer moreActive"
                  : filterBlogs.length === 1
                  ? "blogsContainer oneActive"
                  : "blogsContainer twoActive"
              }
            >
              {filterBlogs.map((blog, index) => (
                <div className="blog" key={index}>
                  <Img fluid={blog.blogImage.fluid} className="blogThumbnail" />
                  <div className="blogTitle">{blog.title}</div>
                  <div className="blogInfo">
                    <p>
                      by {blog.author}, {blog.createdAt}
                    </p>
                  </div>

                  <p className="blogContent">{blog.description}</p>
                  <div className="readMoreButton">
                    <Link to={`/posts/${blog.slug}`}>
                      <button>Read more</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1>
            Sorry... You have to be logged in to view this page{" "}
            <span role="img" aria-label="emoji">
              😜
            </span>
          </h1>
        )}
      </div>
    </BackgroundGradient>
  )
}

export default BlogList
