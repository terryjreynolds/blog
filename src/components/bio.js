/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, withAssetPrefix } from "gatsby"
import Image from "gatsby-image"

import { rhythm, scale } from "../utils/typography"
import { redirectTo } from "@reach/router"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
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
          minWidth: 50,
          border: ".1vw solid #efedf5",
        }}
      />
      <p
        style={{
          marginBottom: 0,
        }}
      >
        <a href={`https://terryjreynolds.github.io/`} target="_blank">
          <strong>{author}</strong>
        </a>{" "}
        is a blogger, developer and teacher from Sharbot Lake, Ontario, Canada.
        {` `}
      </p>
    </div>
  )
}

export default Bio
