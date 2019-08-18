import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLink from "../components/social"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  //accessibility note: on first click of tab key, restores button outlines for keyboard users. Switches back to no outlines if mouse clicked. But still listens for tabbing.

  componentDidMount() {
    function handleFirstTab(e) {
      if (e.keyCode === 9) {
        // code 9 is the tab key
        document.body.classList.add("userTabs")
        window.removeEventListener("keydown", handleFirstTab)
        window.addEventListener("mousedown", handleMouseDownOnce)
      }
    }

    function handleMouseDownOnce() {
      document.body.classList.remove("userTabs")

      window.removeEventListener("mousedown", handleMouseDownOnce)
      window.addEventListener("keydown", handleFirstTab)
    }

    window.addEventListener("keydown", handleFirstTab)
  }
  //ok
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="CODECADENCE" />

        <Bio />
        <SocialLink />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none`, color: "rgb(180,9,180)" }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
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
          }
        }
      }
    }
  }
`
