/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(0.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          minWidth: 130,
          border: ".1vw solid #efedf5",
        }}
      />
      <p
        style={{
          marginBottom: 0,
          minWidth: 170,
          paddingRight: "12px",
        }}
      >
        <a
          href={`https://terryjreynolds.github.io/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>{author}</strong>
        </a>{" "}
        is a blogger, developer and teacher from Sharbot Lake, Ontario, Canada.
        {` `}
      </p>
    </div>
  )
}

export default Bio
