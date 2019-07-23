/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { rhythm } from "../utils/typography"
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
  const brandStyling = {
    color: "white",
    fontSize: "2vw",
    marginRight: rhythm(1 / 2),
  }
  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,

          minWidth: 50,
          border: ".09vw solid #efedf5",
        }}
      />
      <p style={{}}>
        <a href={`https://terryjreynolds.github.io/`} target="_blank">
          <strong>{author}</strong>
        </a>{" "}
        is a developer and teacher from Sharbot Lake, Ontario, Canada.
        {` `}
        <span
          style={{
            display: "block",
          }}
        >
          <a
            style={brandStyling}
            href={`https://twitter.com/${social.twitter}`}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            style={brandStyling}
            href={`https://twitter.com/${social.twitter}`}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            style={brandStyling}
            href={`https://twitter.com/${social.twitter}`}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
      </p>
    </div>
  )
}

export default Bio
