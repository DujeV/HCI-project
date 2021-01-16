const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const raw = await graphql(`query {
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
      }`)
      
      const res = raw.data.allContentfulBlogPosts.nodes
     
      res.forEach((e, index, array) => actions.createPage({
        component: path.resolve(`./src/components/Blogs/BlogPost.js`),
        context: {
          ...e,
          next: index < array.length ? array[index + 1] : null,
          prev: index > 0 ? array[index - 1] : null
        },
        path: `posts/${e.slug}`,
        slug: `posts/${e.slug}`
      }))
}
