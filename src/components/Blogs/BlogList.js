import React from "react"
import BackgroundGradient from "../BackgroundGradient"

import "./BlogList.css"
import { blogs, tags } from "./BlogData"

const BlogList = () => {
  return (
    <BackgroundGradient>
      <div className="mainContainer">
        <h1 className="pageHeader">Blogs & Latest News</h1>

        <div className="tagsContainer">
          <p>Filter blog posts with tags</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <button className="singleTag" key={index}>
                <span>{tag.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="blogsContainer">
          {blogs.map((blog, index) => (
            <div className="blog" key={index}>
              <img
                className="blogThumbnail"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
                alt="cristiano ronaldo"
              />
              <div className="blogTitle">{blog.title}</div>
              <div className="blogInfo">
                <p>by {blog.author},</p>
                <p>{blog.time}</p>
              </div>
              <p className="blogContent">{blog.text}</p>
              <div className="readMoreButton">
                <button>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackgroundGradient>
  )
}

export default BlogList