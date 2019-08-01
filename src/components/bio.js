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
  faBlackTie,
} from "@fortawesome/free-brands-svg-icons"
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
  const brandStyling = {
    color: "white",
    fontSize: "3.8vh",
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
        <span
          style={{
            display: "block",
          }}
        >
          <a
            style={brandStyling}
            href={`https://twitter.com/${social.twitter}`}
            target="_blank"
          >
            <FontAwesomeIcon
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "6px",
              }}
              icon={faTwitter}
            />
          </a>
          <a
            style={brandStyling}
            href={`https://www.linkedin.com/in/terryreynolds5330/}`}
            target="_blank"
          >
            <FontAwesomeIcon
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "4px",
              }}
              icon={faLinkedinIn}
            />
          </a>
          <a
            style={{
              color: "white",
              fontSize: "3.8vh",
              marginRight: "0",
            }}
            href={`https://github.com/terryjreynolds`}
            target="_blank"
          >
            <FontAwesomeIcon
              style={{
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "6px",
              }}
              icon={faGithub}
            />
          </a>
        </span>
      </p>
    </div>
  )
}

export default Bio
