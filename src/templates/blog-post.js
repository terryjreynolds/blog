import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import SocialLink from "../components/social"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { formatReadingTime } from "../utils/helpers"

//this component is how the post looks after clicking on a post link on the main page
class BlogPostTemplate extends React.Component {
  //this patch prevents the social media links from turning back to default white during lightMode on the blogpost page. Also, no need to clean up with unmount because falight gets removed on state change in toggle component
  componentDidMount() {
    const viewMode = localStorage.getItem("viewMode")

    if (viewMode === "🌛") {
      let svg = document.querySelectorAll(" a > svg")

      svg.forEach(icon => icon.classList.add("faLight"))
    }
  }

  render() {
    const post = this.props.data.markdownRemark

    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1
          style={{
            textShadow: "none",
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(0.1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(0.8),
          }}
        >{` ${formatReadingTime(
          post.wordCount.words,
          post.frontmatter.imageCount || null
        )}`}</div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <SocialLink />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html

      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        imageCount
      }
      wordCount {
        words
      }
    }
  }
`
