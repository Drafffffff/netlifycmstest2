import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout/homeLayout"
import SEO from "../components/seo"
import styles from "../styles/homepost.module.scss"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const [url, setUrl] = useState()
  return (
    <Layout location={location} title={siteTitle} url={url}>
      <SEO title="首页" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug} className={styles.article}>
            <div>
              <div className={styles.imgCover}></div>
              <div>
                <Link
                  style={{ boxShadow: `none` }}
                  to={node.fields.slug}
                  className={styles.link}
                  onMouseOver={() => {
                    let imgurl =
                      node.frontmatter.background_image.childImageSharp.sizes
                        .srcWebp
                    if (imgurl) setUrl(imgurl)
                    document.querySelector("video").style.display = "none"
                  }}
                  onMouseOut={() => {
                    document.querySelector("video").style.display = "block"
                  }}
                >
                  {title}
                </Link>
              </div>
              <small>{node.frontmatter.date}</small>
            </div>
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const homeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            background_image {
              childImageSharp {
                sizes(webpQuality: 90)  {
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
